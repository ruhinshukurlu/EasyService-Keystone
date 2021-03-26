const { Text, Password, CalendarDay, Select, File } = require('@keystonejs/fields')


const ServiceProviderFields = {
    fields : {
        name : {
            type : Text,
            isRequired : true
        },
        surname : {
            type : Text,
            isRequired : true
        },
        email : {
            type : Text,
            isRequired : true,
            isUnique : true
        },
        password : {
            type : Password,
            isRequired : true
        },
        about : {
            type : Text,
            isMultiline : true
        },
        work_address : {
            type : Text,
            isRequired : true
        }, 
        languages : {
            type : Text
        },
        experience : {
            type : Select,
            options : [
                {value : 'one_year', label : '1 year'},
                {value : 'two_year', label : '2 years'},
                {value : 'three_year', label : '3 years'},
                {value : 'four_year', label : '4 years'},
                {value : 'five_more_year', label : '5+ years'},
            ],
            multi : true
        }
    }
}

module.exports = ServiceProviderFields