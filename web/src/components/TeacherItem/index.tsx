import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
function TeacherItem() {

    return (

        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/21070633?s=460&u=d7550b210681d608623ddc75768568ab77bda2b2&v=4" alt="Gustavo Boanerges"/>

                <div>
                    <strong>Gustavo Boanerges</strong>
                    <span>Teste</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/><br/>Illum aut doloremque perferendis, quibusdam.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;