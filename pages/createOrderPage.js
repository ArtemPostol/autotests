module.exports = {


    elements: {
        form: '.js_order_form',
        paperTypeDropdown: '#order_product_paper_type',
        assignmentOption: {
            selector: '//option[text()="Assignment"]',
            locateStrategy: 'xpath'
        },
        topicField: '#order_name',

        subjectDropdown: '#order_product_subject',
        sportOption: {
            selector: '//option[text()="Sport"]',
            locateStrategy: 'xpath'
        },

        formatOfCitationDropdown: '#order_product_style',
        apaOption: {
            selector: '//option[text()="APA"]',
            locateStrategy: 'xpath'
        },

        goToStep2Btn:{
            selector: '//span[contains(text(), "go to step 2")]',
            locateStrategy: 'xpath'
        },

        numberOfPages: '#order_product_pages',

        orderDeadlineDate: '#order_deadline_date',

        orderDeadlineTime: '#order[deadline][time]',

        dateTimePicker: '//div[@class = xdsoft_datepicker active]',

        formatOfCitationDropdown: '#order_product_sources',

        numberOfCited: '#order_product_sources',

        goToStep3Btn:{
            selector: '//span[contains(text(), "go to step 3")]',
            locateStrategy: 'xpath'
        },

        paperInstructionsField: '#order_description',

        bestWriterCheckBox:{
            selector: '.b-checkbox_best-writer .b-checkbox__box',
            locateStrategy: 'css'
        }

    },

};