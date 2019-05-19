var contacts = [{
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com'
    },
    {
        id: 3,
        firstName: 'Kith',
        lastName: 'Kits',
        email: 'kith.kits@example.com'
    },
    {
        id: 4,
        firstName: 'Marry',
        lastName: 'Smith',
        email: 'marry.smith@example.com'
    }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass({
    render: function () {
        return ( <
            div className = {
                'app'
            } >
            <
            ContactForm contact = {
                contactForm
            }
            />  <
            Contacts items = {
                contacts
            }
            /> <
            /div >
        );
    }
});