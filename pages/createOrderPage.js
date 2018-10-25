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


        editingRadioBtn: {
            selector: '//span[contains(text(), "Editing")]',
            locateStrategy: 'xpath'
        },
        editingRadioBtnInput: '#order_product_service_3',

        editingRewritingBtn: {
            selector: '//span[contains(text(), "Rewriting")]',
            locateStrategy: 'xpath'
        },
        editingRewritingBtnInput: '#order_product_service_2',

        editingWritingFromScratchBtn: {
            selector: '//span[contains(text(), "Writing from scratch")]',
            locateStrategy: 'xpath'
        },
        editingWritingFromScratchInput: '#order_product_service_1',



        bestWriterCheckBox: '.b-checkbox_best-writer .b-checkbox__box',
        bestWriterCheckInput: '#order_vas_co_1',

        preferredWritersCheckBox: '.b-checkbox_size_l .b-checkbox__box',

        preferredWritersCheckInput: {
            selector: '//input [@class=js_rel_wr_checkbox b-checkbox__control js_hire_writer_request_ga]',
            locateStrategy: 'xpath'
        },

        platinumRadioBtn: {
            selector: '//span[contains(text(), "Platinum")]',
            locateStrategy: 'xpath'
        },

        platinumRadioInput: '#order_product_wrlevel_3',

        premiumRadioBtn: {
            selector: '//span[contains(text(), "Premium")]',
            locateStrategy: 'xpath'
        },

        premiumRadioInput: '#order_product_wrlevel_2',

        standardRadioBtn: {
            selector: '//span[contains(text(), "Standard")]',
            locateStrategy: 'xpath'
        },

        standardRadioInput: '#order_product_wrlevel_1',


    },

};