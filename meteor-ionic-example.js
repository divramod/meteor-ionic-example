Projects = new Meteor.Collection("Projects");
Tasks = new Meteor.Collection("Tasks");

if (Meteor.isClient) {


  // subscribe to the two collections we use
  Meteor.subscribe('Projects');
  Meteor.subscribe('Tasks');

}

if (Meteor.isServer) {

  Meteor.publish('Projects', function () {
    return Projects.find({});
  });

  Meteor.publish('Tasks', function () {
    return Tasks.find({});
  });

  Projects.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });

  Tasks.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });

}
