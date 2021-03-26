const { Text, File } = require('@keystonejs/fields')
const { LocalFileAdapter } = require('@keystonejs/file-adapters');

const fileAdapter = new LocalFileAdapter({
    src: './files',
    path: '/files',
  });

const serviceFields = {
    fields : {
        name : {
            type : Text,
            isRequired : true
        },
        description : {
            type : Text,
            isMultiline : true,
            isRequired : true
        },
        image : {
            type : File,
            isRequired : true,
            adapter: fileAdapter,
        }
    }
}


module.exports = serviceFields