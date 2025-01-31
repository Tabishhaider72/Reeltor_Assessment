class User {
    constructor(email, name, mobile, bio = "", availability = true) {
      this.email = email;
      this.name = name;
      this.mobile = mobile;
      this.bio = bio;
      this.availability = availability;
    }
  
    toFirestore() {
      return {
        email: this.email,
        name: this.name,
        mobile: this.mobile,
        bio: this.bio,
        availability: this.availability,
      };
    }
  }
  
  module.exports = User;
  