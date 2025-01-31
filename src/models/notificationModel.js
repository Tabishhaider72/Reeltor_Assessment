class Notification {
    constructor(email, message, type = "non-critical", status = "pending") {
      this.email = email;
      this.message = message;
      this.type = type; // "critical" or "non-critical"
      this.status = status; // "pending" or "sent"
      this.timestamp = new Date().toISOString();
    }
  
    toFirestore() {
      return {
        email: this.email,
        message: this.message,
        type: this.type,
        status: this.status,
        timestamp: this.timestamp,
      };
    }
  }
  
  module.exports = Notification;
  