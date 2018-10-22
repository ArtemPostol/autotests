module.exports = {

    // suite который проверяет что каждое из доступных полей ордера может быть выбрано или изменено

    before: (browser) => {
        let mainPage = browser.page.mainPage(),
            customerOrdersPage = browser.page.customerOrdersPage();

        mainPage.header = browser.page.mainPage().section.header;
        customerOrdersPage.header = browser.page.customerOrdersPage().section.header;

        mainPage
            .navigate()
            .login('postolbr@taphear.com','q12345678');
        customerOrdersPage
            .openCreateOrderPage();
    },

    after: (browser) => {
        browser.end(); // после выполнения всего сценария закроем браузер
    },

    'Пользователь изменил поле заказа: Type of paper': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .click('@paperTypeDropdown')
            .click('@assignmentOption')
            .expect.element('@assignmentOption').to.be.selected.before(1000);
        // проверка что значение поле type of paper: assignment было выбрано
    },

    'Пользователь заполнил поле заказа: Topic ': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .setValue('@topicField', 'New topic')
            .expect.element('@topicField').to.have.value.that.equals('New topic').before(5000);

        // проверка что значение поле topic равно новому значению
    },

    'Пользователь заполнил поле заказа: Select your subject ': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .click('@subjectDropdown')
            .click('@sportOption')
            .expect.element('@sportOption').to.be.selected.before(1000);

        // проверка что значение поле Select your subject было выбрано
    },

    'Пользователь изменил значение: Number of pages ': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .clearValue('@numberOfPages')
            .setValue('@numberOfPages', 5)
            .expect.element('@numberOfPages').to.have.value.that.equals(5).before(1000);

        // проверка что значение  Number of pages соответствует выбраному значению
    },
/*
    'Пользователь изменил значение: Deadline ': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .click('@orderDeadlineDate')
    },

*/

    'Пользователь кликнул на кнопку:  go to step 2/3 ': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage

            .click('@goToStep2Btn')

        //Пользователь перешел на 2й шаг ордер формы

    },

    'Пользователь заполнил поле заказа: Number of cited resources': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .clearValue('@numberOfCited')
            .setValue('@numberOfCited', 6)
            .expect.element('@numberOfCited').to.have.value.that.equals(6).before(1000);


    },

    'Пользователь заполнил поле заказа: Format of citation': (browser) => {
        let createOrderPage = browser.page.createOrderPage();

        createOrderPage
            .click('@formatOfCitationDropdown')
            .click('@apaOption')
            .expect.element('@apaOption').to.be.selected.before(1000);

        // проверка что значение поле Format of citation было выбрано
    },

    'Пользователь кликнул на кнопку:  go to step 3/3 ': (browser) => {
        let createOrderPage = browser.page.createOrderPage();


        createOrderPage
           // .click('@goToStep3Btn')
            .click('@goToStep3Btn')
            .expect.element('@paperInstructionsField').to.be.visible.before(1000);
        //Пользователь перешел на 3й шаг ордер формы
    },

        'Пользователь заполнил поле заказа: Paper instructions ': (browser) => {
            let createOrderPage = browser.page.createOrderPage();

            createOrderPage
                .setValue('@paperInstructionsField', 'Some Instructions')
                .expect.element('@paperInstructionsField').to.have.value.that.equals('Some Instructions').before(10000);

            // проверка что значение поле Paper instructions равно новому значению
        },

        'Пользователь выбрал чек-бокс: We select the writer for you ': (browser) => {
            let createOrderPage = browser.page.createOrderPage();

            createOrderPage
                .click('@bestWriterCheckBox')
                .expect.element('#order_vas_co_1').to.be.selected.before(1000);

            // проверка что значение поле Select your subject было выбрано
        },



};