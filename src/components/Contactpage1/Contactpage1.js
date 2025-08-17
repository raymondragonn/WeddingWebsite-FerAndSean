import React from "react";
import ContactForm1 from "../ContactFrom1/ContactForm1";
import { useLanguage } from "../../contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { JackInTheBox } from "react-awesome-reveal";
import "./Contactpage1.css";

const Contactpage1 = () => {
    const { t } = useLanguage();

    return (
        <>
            {/* Nuevo diseño del formulario con estilo RSVP */}
            <section
                className="wpo-contact-pg-section wpo-contact-section section-padding"
                style={{
                    backgroundColor: "#f6f1ee",
                    paddingTop: "50px",
                    paddingBottom: "80px",
                }}
            >
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="wpo-contact-section-wrapper" style={{ width: '100%', maxWidth: '100%'}}>
                                <SectionTitle
                                    subTitle={t("invitationConfirmation")}
                                    MainTitle={t("confirmYourAttendance")}
                                />
                                {/* Itinerario de Actividades */}
                                <div
                                    className="itinerary-section"
                                    style={{
                                        marginBottom: "30px",
                                        textAlign: "center",
                                        padding: "20px",
                                    }}
                                >
                                    <h3
                                        style={{
                                            color: "#5C5C5C",
                                            fontSize: "24px",
                                            marginBottom: "15px",
                                        }}
                                    >
                                        {t("itinerary")}
                                    </h3>
                                    <div>
                                        <p
                                            style={{
                                                color: "#666",
                                                fontSize: "16px",
                                                lineHeight: "1.6",
                                            }}
                                        >
                                            <strong>{t("fridayEvent")}</strong>
                                        </p>
                                        <p
                                            style={{
                                                color: "#666",
                                                fontSize: "16px",
                                                lineHeight: "1.6",
                                            }}
                                        >
                                            <strong>{t("saturdayEvent")}</strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="wpo-contact-form-area">
                                    <ContactForm1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29817.06255800722!2d-103.83386376679846!3d20.906975359972215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84263fc89e7aaf67%3A0x1a490d668cc314e1!2sLa%20Cueva%20de%20la%20Luna!5e0!3m2!1ses!2smx!4v1754147243660!5m2!1ses!2smx"
                        title="La Cueva de la Luna Location Map"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Contactpage1;
