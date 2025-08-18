import React, { useState, useEffect } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';


const ContactForm1 = () => {
    const { t } = useLanguage();

    const [forms, setForms] = useState({
        name: '',
        lastName: '',
        phone: '',
        attendance: '',
        fridayAttendance: '',
        saturdayAttendance: '',
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
        
        // Si cambian a "no podré asistir", limpiar todos los campos relacionados
        if (name === 'attendance' && value === 'no') {
            setForms({ ...forms, [name]: value, fridayAttendance: '', saturdayAttendance: '', songSuggestion: '' });
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
        
        // Solo validar campos adicionales si confirma asistencia
        let fridayAttendanceValid = null;
        let saturdayAttendanceValid = null;
        
        if (forms.attendance === 'yes') {
            fridayAttendanceValid = validator.message('fridayAttendance', forms.fridayAttendance, 'required');
            saturdayAttendanceValid = validator.message('saturdayAttendance', forms.saturdayAttendance, 'required');
        }
        
        // Verificar si todas las validaciones requeridas pasan
        const isFormValid = !nameValid && !lastNameValid && !phoneValid && !attendanceValid && 
                           (forms.attendance === 'no' || (!fridayAttendanceValid && !saturdayAttendanceValid));
        
        if (isFormValid) {
            validator.hideMessages();
            
            // Crear mensaje para WhatsApp
            const attendanceText = forms.attendance === 'yes' ? t('confirmAttendance') : t('cannotAttend');
            let whatsappText = `${t('weddingInvitationConfirmation')}

                *${t('name')}:* ${forms.name}
                *${t('lastName')}:* ${forms.lastName}
                *${t('phone')}:* ${forms.phone}
                *${t('attendance')}:* ${attendanceText}`;

            // Solo agregar información adicional si confirma asistencia
            if (forms.attendance === 'yes') {
                if (forms.fridayAttendance) {
                    whatsappText += `
                *${t('fridayAttendance')}:* ${forms.fridayAttendance}`;
                }
                if (forms.saturdayAttendance) {
                    whatsappText += `
                    *${t('saturdayAttendance')}:* ${forms.saturdayAttendance}`;
                }
                if (forms.songSuggestion.trim()) {
                    whatsappText += `
                    *${t('suggestedSong')}:* ${forms.songSuggestion}`;
                }
                
            }

            let apiLocal = 'http://localhost/BackEndInvitaciones/index.php'

            fetch(apiLocal, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(forms)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
             });

            console.log(forms);

            // // Codificar el mensaje para URL
            // const encodedMessage = encodeURIComponent(whatsappText);
            
            // // Crear URL de WhatsApp
            // const whatsappUrl = `https://wa.me/17734311552?text=${encodedMessage}`;
            
            // // Abrir WhatsApp en nueva ventana
            // window.open(whatsappUrl, '_blank');
            
            // Limpiar formulario
            setForms({
                name: '',
                lastName: '',
                phone: '',
                attendance: '',
                fridayAttendance: '',
                saturdayAttendance: '',
                songSuggestion: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active" style={{paddingTop:'40px'}}>
            {/* Instrucciones generales */}
            <div style={{ 
                backgroundColor: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                marginBottom: '25px',
                border: '1px solid #e9ecef'
            }}>
                                 <h4 style={{ color: '#495057', marginBottom: '10px', fontSize: '22px' }}>
                     {t('formInstructions')}
                 </h4>
                                 <p style={{ color: '#6c757d', fontSize: '16px', lineHeight: '1.5', margin: 0 }}>
                     {t('formInstructionsText')}
                 </p>
            </div>

            <div className="row">
                {/* Información Personal */}
                <div className="col col-lg-12 col-12">
                                         <h5 style={{ 
                         color: '#495057', 
                         marginBottom: '15px', 
                         fontSize: '20px',
                         borderBottom: '2px solid #e9ecef',
                         paddingBottom: '8px'
                     }}>
                     {t('personalInformation')}
                     </h5>
                </div>
                
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                                                 <label style={{ 
                             display: 'block', 
                             marginBottom: '5px', 
                             color: '#495057',
                             fontSize: '16px',
                             fontWeight: '500'
                         }}>
                             {t('name')} *
                         </label>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                                                         placeholder={t('namePlaceholder')}
                             style={{ fontSize: '16px' }} />
                        {validator && validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                                                 <label style={{ 
                             display: 'block', 
                             marginBottom: '5px', 
                             color: '#495057',
                             fontSize: '16px',
                             fontWeight: '500'
                         }}>
                             {t('lastName')} *
                         </label>
                        <input
                            value={forms.lastName}
                            type="text"
                            name="lastName"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                                                         placeholder={t('lastNamePlaceholder')}
                             style={{ fontSize: '16px' }} />
                        {validator && validator.message('lastName', forms.lastName, 'required|alpha_space')}
                    </div>
                </div>
                
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                                                 <label style={{ 
                             display: 'block', 
                             marginBottom: '5px', 
                             color: '#495057',
                             fontSize: '16px',
                             fontWeight: '500'
                         }}>
                             {t('phone')} *
                         </label>
                        <input
                            value={forms.phone}
                            type="tel"
                            name="phone"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                                                         placeholder={t('phonePlaceholder')}
                             style={{ fontSize: '16px' }} />
                                                 <small style={{ color: '#6c757d', fontSize: '14px' }}>
                             {t('phoneHelpText')}
                         </small>
                        {validator && validator.message('phone', forms.phone, 'required')}
                    </div>
                </div>

                {/* Confirmación de Asistencia */}
                <div className="col col-lg-12 col-12">
                                         <h5 style={{ 
                         color: '#495057', 
                         marginTop: '25px',
                         marginBottom: '15px', 
                         fontSize: '20px',
                         borderBottom: '2px solid #e9ecef',
                         paddingBottom: '8px'
                     }}>
                     {t('attendanceConfirmation')}
                     </h5>
                </div>
                
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                                                 <label style={{ 
                             display: 'block', 
                             marginBottom: '5px', 
                             color: '#495057',
                             fontSize: '16px',
                             fontWeight: '500'
                         }}>
                             {t('willYouAttend')} *
                         </label>
                        <select
                            value={forms.attendance}
                            name="attendance"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            style={{ 
                                height: '50px', 
                                padding: '0 15px', 
                                border: '1px solid #e0e0e0', 
                                borderRadius: '5px', 
                                backgroundColor: 'white',
                                fontSize: '16px'
                            }}>
                            <option value="">{t('selectAttendanceOption')}</option>
                            <option value="yes">{t('yesConfirmAttendance')}</option>
                            <option value="no">{t('cannotAttend')}</option>
                        </select>
                        {validator && validator.message('attendance', forms.attendance, 'required')}
                    </div>
                </div>

                {/* Información adicional solo si confirma asistencia */}
                {forms.attendance === 'yes' && (
                    <>
                        <div className="col col-lg-12 col-12">
                            <h5 style={{ 
                                color: '#495057', 
                                marginTop: '25px',
                                marginBottom: '15px', 
                                fontSize: '20px',
                                borderBottom: '2px solid #e9ecef',
                                paddingBottom: '8px'
                            }}>
                            {t('additionalInformation')}
                            </h5>
                        </div>
                        

                         
                         <div className="col col-lg-6 col-12">
                             <div className="form-field">
                                 <label style={{ 
                                     display: 'block', 
                                     marginBottom: '5px', 
                                     color: '#495057',
                                     fontSize: '16px',
                                     fontWeight: '500'
                                 }}>
                                     {t('fridayEvent')} *
                                 </label>
                                 <select
                                     value={forms.fridayAttendance}
                                     name="fridayAttendance"
                                     onBlur={(e) => changeHandler(e)}
                                     onChange={(e) => changeHandler(e)}
                                     style={{ 
                                         height: '50px', 
                                         padding: '0 15px', 
                                         border: '1px solid #e0e0e0', 
                                         borderRadius: '5px', 
                                         backgroundColor: 'white',
                                         fontSize: '16px'
                                     }}>
                                     <option value="">{t('selectAttendanceOption')}</option>
                                     <option value="yes">{t('yesConfirmAttendance')}</option>
                                     <option value="no">{t('cannotAttend')}</option>
                                 </select>
                                 {validator && validator.message('fridayAttendance', forms.fridayAttendance, 'required')}
                             </div>
                         </div>
                         
                         <div className="col col-lg-6 col-12">
                             <div className="form-field">
                                 <label style={{ 
                                     display: 'block', 
                                     marginBottom: '5px', 
                                     color: '#495057',
                                     fontSize: '16px',
                                     fontWeight: '500'
                                 }}>
                                     {t('saturdayEvent')} *
                                 </label>
                                 <select
                                     value={forms.saturdayAttendance}
                                     name="saturdayAttendance"
                                     onBlur={(e) => changeHandler(e)}
                                     onChange={(e) => changeHandler(e)}
                                     style={{ 
                                         height: '50px', 
                                         padding: '0 15px', 
                                         border: '1px solid #e0e0e0', 
                                         borderRadius: '5px', 
                                         backgroundColor: 'white',
                                         fontSize: '16px'
                                     }}>
                                     <option value="">{t('selectAttendanceOption')}</option>
                                     <option value="yes">{t('yesConfirmAttendance')}</option>
                                     <option value="no">{t('cannotAttend')}</option>
                                 </select>
                                 {validator && validator.message('saturdayAttendance', forms.saturdayAttendance, 'required')}
                             </div>
                         </div>
                        
                        <div className="col col-lg-12 col-12">
                            <div className="form-field">
                                <label style={{ 
                                    display: 'block', 
                                    marginBottom: '5px', 
                                    color: '#495057',
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}>
                                    {t('songSuggestion')}
                                </label>
                                <input
                                    value={forms.songSuggestion}
                                    type="text"
                                    name="songSuggestion"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    placeholder={t('songSuggestionPlaceholder')}
                                    style={{ fontSize: '16px' }} />
                                <small style={{ color: '#6c757d', fontSize: '14px' }}>
                                    {t('songSuggestionHelpText')}
                                </small>
                            </div>
                        </div>
                    </>
                )}

                {/* Mensaje si no puede asistir */}
                {forms.attendance === 'no' && (
                    <div className="col col-lg-12 col-12">
                        <div style={{ 
                            backgroundColor: '#fff3cd', 
                            border: '1px solid #ffeaa7', 
                            borderRadius: '8px', 
                            padding: '15px',
                            marginTop: '15px'
                        }}>
                            <p style={{ 
                                color: '#856404', 
                                margin: 0, 
                                fontSize: '16px',
                                textAlign: 'center'
                            }}>
                                {t('thankYouMessage')}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="submit-area" style={{ marginTop: '30px' }}>
                <button 
                    type="submit" 
                    className="theme-btn" 
                    style={{ 
                        fontSize: '18px', 
                        padding: '15px 30px', 
                        fontWeight: '600', 
                        opacity: (!forms.name.trim() || !forms.lastName.trim() || !forms.phone.trim() || !forms.attendance) ? 0.5 : 1,
                        cursor: (!forms.name.trim() || !forms.lastName.trim() || !forms.phone.trim() || !forms.attendance) ? 'not-allowed' : 'pointer'
                    }}
                    disabled={
                        !forms.name.trim() ||
                        !forms.lastName.trim() ||
                        !forms.phone.trim() ||
                        !forms.attendance
                    }
                >
                    {t('confirmInvitation')}
                </button>
            </div>
            
                                                   {/* Nota de contacto para dudas */}
             <div style={{ 
                 backgroundColor: '#f8f9fa', 
                 border: '1px solid #e9ecef', 
                 borderRadius: '8px', 
                 padding: '20px',
                 marginTop: '30px',
                 textAlign: 'center'
             }}>
                 <h5 style={{ 
                     color: '#495057', 
                     marginBottom: '10px', 
                     fontSize: '18px',
                     fontWeight: '600'
                 }}>
                     {t('haveQuestions')}
                 </h5>
                 <p style={{ 
                     color: '#6c757d', 
                     fontSize: '16px', 
                     lineHeight: '1.5', 
                     marginBottom: '20px'
                 }}>
                     {t('contactForQuestions')}
                 </p>
                                                     <Link to="/contact" className="theme-btn" style={{ 
                       display: 'inline-block',
                       fontSize: '16px',
                       padding: '12px 25px',
                       fontWeight: '500',
                       textDecoration: 'none',
                       backgroundColor: '#333',
                       color: 'white',
                       borderRadius: '0',
                       border: 'none',
                       cursor: 'pointer',
                       transition: 'background-color 0.3s ease'
                   }}
                   onMouseEnter={(e) => e.target.style.backgroundColor = '#1f1f1f'}
                   onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}>
                     {t('contactUs')}
                 </Link>
             </div>
        </form>
    )
}

export default ContactForm1;
