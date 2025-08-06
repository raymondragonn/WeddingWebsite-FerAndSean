import React, { useState, useEffect } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { useLanguage } from '../../contexts/LanguageContext';


const ContactForm = () => {
    const { t } = useLanguage();

    const [forms, setForms] = useState({
        name: '',
        subject: '',
        message: ''
    });
    const [validator, setValidator] = useState(null);

    useEffect(() => {
        setValidator(new SimpleReactValidator({
            className: 'errorMessage',
            messages: {
                required: t('requiredField'),
                alpha_space: t('invalidName')
            }
        }));
    }, [t]);
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator && validator.allValid()) {
            validator.hideMessages();
        } else if (validator) {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator && validator.allValid()) {
            validator.hideMessages();
            
            // Crear mensaje para WhatsApp
            const whatsappText = `${t('whatsappMessage')}

*Nombre:* ${forms.name}
*Asunto:* ${forms.subject}
*Mensaje:* ${forms.message}`;

            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappText);
            
            // Crear URL de WhatsApp
            const whatsappUrl = `https://wa.me/17734311552?text=${encodedMessage}`;
            
            // Abrir WhatsApp en nueva ventana
            window.open(whatsappUrl, '_blank');
            
            // Limpiar formulario
            setForms({
                name: '',
                subject: '',
                message: ''
            });
        } else if (validator) {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('yourName')} />
                        {validator && validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.subject}
                            type="text"
                            name="subject"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('subject')} />
                        {validator && validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder={t('message')}>
                    </textarea>
                    {validator && validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn"> {t('submitNow')}</button>
            </div>
        </form >
    )
}

export default ContactForm;