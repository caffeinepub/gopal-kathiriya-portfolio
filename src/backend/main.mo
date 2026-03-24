import Int "mo:core/Int";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Time "mo:core/Time";
import Array "mo:core/Array";

actor {
  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactSubmission {
    public func compare(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      Int.compare(s2.timestamp, s1.timestamp);
    };
  };

  let submissions = Map.empty<Int, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    let submission = {
      name;
      email;
      message;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort();
  };
};
