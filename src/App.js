import React, {Component} from 'react';
import './App.css';
import Modal from './Components/UI/Modal/Modal'
import ButtonRow from "./Components/UI/ButtonRow/ButtonRow";
import Alert from './Components/UI/Alert/Alert'

class App extends Component {
    state = {
        showModal: false,
        showAlert: false
    };

    modalToggler = () => {
        this.setState({showModal: true})
    };

    modalCancelHandler = () => {
        this.setState({showModal: false});
    };

    purchaseContinueHandler = () => {
        alert('Представим, что вы добавили заказ и подтвердили его. Это сообщение уведомляет вас в этом.');
    };

    alertToggler = () => {
        this.setState({showAlert: true})
    };

    alertCancelHandler = () => {
        this.setState({showAlert: false});
    };


    render() {

        const buttons = [
            {type: 'warning', label: 'Продолжить', clicked: this.purchaseContinueHandler},
            {type: 'danger', label: 'Закрыть', clicked: this.modalCancelHandler}
        ];

        return (
            <div className="App">
                <button className='gnr-btn' onClick={this.modalToggler}>Modal</button>
                <button className='gnr-btn' onClick={this.alertToggler}>Alert</button>
                <Modal show={this.state.showModal}
                       cancel={this.modalCancelHandler}
                       title="Заголовок модального окна">
                    <p>Здесь какая-то важная информация, но это не точно</p>
                    <ButtonRow buttons={buttons}/>
                </Modal>

                <Alert
                    type='warning'
                    show={this.state.showAlert}
                    dismiss={this.alertCancelHandler}>
                    This is a warning type alert
                </Alert>

                <Alert
                    show={this.state.showAlert}
                    type='danger'>
                    This is a danger type alert
                </Alert>
            </div>
        );
    }
}

export default App;
