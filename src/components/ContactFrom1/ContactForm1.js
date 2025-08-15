import React, { useState, useEffect } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { useLanguage } from '../../contexts/LanguageContext';


const ContactForm1 = () => {
    const { t } = useLanguage();

    const [forms, setForms] = useState({
        name: '',
        lastName: '',
        phone: '',
        arrivalDay: '',
        attendance: '',
        songSuggestion: ''
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
        const { name, value } = e.target;
        
        // Si cambian a "no podré asistir", limpiar el día de llegada y sugerencia de canción
        if (name === 'attendance' && value === 'no') {
            setForms({ ...forms, [name]: value, arrivalDay: '', songSuggestion: '' });
        } else {
            setForms({ ...forms, [name]: value });
        }
        
        if (validator && validator.allValid()) {
            validator.hideMessages();
        } else if (validator) {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        
        // Validaciones condicionales
        const nameValid = validator.message('name', forms.name, 'required|alpha_space');
        const lastNameValid = validator.message('lastName', forms.lastName, 'required|alpha_space');
        const phoneValid = validator.message('phone', forms.phone, 'required');
        const attendanceValid = validator.message('attendance', forms.attendance, 'required');
        
        // Solo validar día de llegada si confirma asistencia
        let arrivalDayValid = null;
        if (forms.attendance === 'yes') {
            arrivalDayValid = validator.message('arrivalDay', forms.arrivalDay, 'required');
        }
        
        // Verificar si todas las validaciones requeridas pasan
        const isFormValid = !nameValid && !lastNameValid && !phoneValid && !attendanceValid && 
                           (forms.attendance === 'no' || !arrivalDayValid);
        
        if (isFormValid) {
            validator.hideMessages();
            
            // Crear mensaje para WhatsApp
            const attendanceText = forms.attendance === 'yes' ? t('confirmAttendance') : t('cannotAttend');
            let whatsappText = `${t('weddingInvitationConfirmation')}

*${t('name')}:* ${forms.name}
*${t('lastName')}:* ${forms.lastName}
*${t('phone')}:* ${forms.phone}
*${t('attendance')}:* ${attendanceText}`;

            // Solo agregar día de llegada si confirma asistencia
            if (forms.attendance === 'yes' && forms.arrivalDay) {
                whatsappText += `
*${t('arrivalDay')}:* ${forms.arrivalDay}`;
            }

            // Solo agregar sugerencia de canción si confirma asistencia y escribió algo
            if (forms.attendance === 'yes' && forms.songSuggestion.trim()) {
                whatsappText += `
*${t('suggestedSong')}:* ${forms.songSuggestion}`;
            }

            // Codificar el mensaje para URL
            const encodedMessage = encodeURIComponent(whatsappText);
            
            // Crear URL de WhatsApp
            const whatsappUrl = `https://wa.me/17734311552?text=${encodedMessage}`;
            
            // Abrir WhatsApp en nueva ventana
            window.open(whatsappUrl, '_blank');
            
            // Limpiar formulario
            setForms({
                name: '',
                lastName: '',
                phone: '',
                arrivalDay: '',
                attendance: '',
                songSuggestion: ''
            });
        } else {
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
                            placeholder={t('name')} />
                        {validator && validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.lastName}
                            type="text"
                            name="lastName"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('lastName')} />
                        {validator && validator.message('lastName', forms.lastName, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.phone}
                            type="tel"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder={t('phone')} />
                        {validator && validator.message('phone', forms.phone, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            value={forms.arrivalDay}
                            name="arrivalDay"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            disabled={forms.attendance === 'no'}
                            style={{ 
                                height: '50px', 
                                padding: '0 15px', 
                                border: '1px solid #e0e0e0', 
                                borderRadius: '5px', 
                                backgroundColor: forms.attendance === 'no' ? '#f5f5f5' : 'white',
                                cursor: forms.attendance === 'no' ? 'not-allowed' : 'pointer'
                            }}>
                            <option value="">
                                {forms.attendance === 'no' ? t('notApplicable') : t('arrivalDay')}
                            </option>
                            {forms.attendance !== 'no' && (
                                <>
                                    <option value="viernes">{t('friday')}</option>
                                    <option value="sabado">{t('saturday')}</option>
                                </>
                            )}
                        </select>
                        {forms.attendance === 'yes' && validator && validator.message('arrivalDay', forms.arrivalDay, 'required')}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <select
                            value={forms.attendance}
                            name="attendance"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            style={{ height: '50px', padding: '0 15px', border: '1px solid #e0e0e0', borderRadius: '5px', backgroundColor: 'white' }}>
                            <option value="">{t('confirmYourAttendance')}</option>
                            <option value="yes">{t('yesConfirmAttendance')}</option>
                            <option value="no">{t('cannotAttend')}</option>
                        </select>
                        {validator && validator.message('attendance', forms.attendance, 'required')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input
                            value={forms.songSuggestion}
                            type="text"
                            name="songSuggestion"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            disabled={forms.attendance !== 'yes'}
                            placeholder={forms.attendance === 'yes' ? t('songSuggestionPlaceholder') : t('availableOnlyIfConfirm')}
                            style={{ 
                                backgroundColor: forms.attendance !== 'yes' ? '#f5f5f5' : 'white',
                                cursor: forms.attendance !== 'yes' ? 'not-allowed' : 'text',
                                color: forms.attendance !== 'yes' ? '#999' : '#333'
                            }} />
                    </div>
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">{t('confirmInvitation')}</button>
            </div>
        </form >
    )
}

export default ContactForm1;
