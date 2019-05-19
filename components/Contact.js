var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },
    render: function () {
        return ( <
            div className = {
                'contactItem'
            } >
            <
            img className = {
                'contactImage'
            }
            src = {
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/120px-User_icon_2.svg.png'
            }
            /> <
            p className = {
                'contactLabel'
            } > Name: {
                this.props.item.firstName
            } < /p> <
            p className = {
                'contactLabel'
            } > Last Name: {
                this.props.item.lastName
            } < /p> <
            a className = {
                'contactEmail'
            }
            href = {
                'mailto: ' + this.props.item.email
            } > {
                this.props.item.email
            } < /a> <
            /div>
        )
    },
});