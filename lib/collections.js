Tasks = new Mongo.Collection('tasks');

Images = new FS.Collection('images', {
	stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

Images.allow({
  'insert': function () {
    return true;
  }
});