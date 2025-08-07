import React from 'react';
import './WeddingMenuSection.css';

const WeddingMenuSection = () => {
    const regularMenu = [
        {
            name: "Entrada",
            dish: "Ensalada César con Pollo",
            description: "Lechuga romana fresca, crutones caseros, queso parmesano, pechuga de pollo a la parrilla y aderezo césar tradicional."
        },
        {
            name: "Plato Principal",
            dish: "Salmón a la Parrilla con Risotto",
            description: "Filete de salmón fresco a la parrilla con hierbas finas, acompañado de risotto cremoso de champiñones y espárragos."
        },
        {
            name: "Acompañamiento",
            dish: "Verduras Mediterráneas",
            description: "Mezcla de calabacín, berenjena, pimientos rojos y amarillos asados con aceite de oliva y hierbas provenzales."
        },
        {
            name: "Postre",
            dish: "Tarta de Chocolate y Frambuesas",
            description: "Deliciosa tarta de chocolate belga con mousse ligero, coulis de frambuesas frescas y decoración de frutas."
        }
    ];

    const glutenFreeMenu = [
        {
            name: "Entrada",
            dish: "Ensalada de Quinoa y Aguacate",
            description: "Quinoa orgánica, aguacate fresco, tomates cherry, pepino, cilantro y vinagreta de limón y aceite de oliva."
        },
        {
            name: "Plato Principal",
            dish: "Pollo Mediterráneo sin Gluten",
            description: "Pechuga de pollo marinada en hierbas mediterráneas, servida con puré de coliflor y verduras grilladas."
        },
        {
            name: "Acompañamiento",
            dish: "Arroz Pilaf con Almendras",
            description: "Arroz basmati con almendras tostadas, pasas, cebolla caramelizada y especias suaves sin gluten."
        },
        {
            name: "Postre",
            dish: "Pannacotta de Vainilla",
            description: "Cremoso pannacotta de vainilla natural con coulis de frutas del bosque y decoración de menta fresca."
        }
    ];

    return (
        <section className="wedding-menu-section ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wrapper text-center">
                            <h2 className="section-title">Menú de Nuestra Boda</h2>
                            <p className="section-subtitle">
                                Hemos seleccionado cuidadosamente cada plato para hacer de este día una experiencia gastronómica memorable
                            </p>
                        </div>
                    </div>
                </div>

                {/* Menú Regular */}
                <div className="row menu-section-wrapper">
                    <div className="col-lg-6 col-md-12">
                        <div className="menu-card regular-menu">
                            <div className="menu-header">
                                <h3 className="menu-title">Menú Principal</h3>
                                <div className="menu-icon">
                                    <i className="fi flaticon-restaurant"></i>
                                </div>
                            </div>
                            <div className="menu-content">
                                {regularMenu.map((item, index) => (
                                    <div key={index} className="menu-item">
                                        <div className="menu-item-header">
                                            <span className="course-type">{item.name}</span>
                                            <div className="menu-divider"></div>
                                        </div>
                                        <h4 className="dish-name">{item.dish}</h4>
                                        <p className="dish-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Menú Sin Gluten */}
                    <div className="col-lg-6 col-md-12">
                        <div className="menu-card gluten-free-menu">
                            <div className="menu-header">
                                <h3 className="menu-title">Menú Sin Gluten</h3>
                                <div className="menu-icon gluten-free">
                                    <i className="fi flaticon-leaf"></i>
                                </div>
                                <span className="special-badge">Libre de Gluten</span>
                            </div>
                            <div className="menu-content">
                                {glutenFreeMenu.map((item, index) => (
                                    <div key={index} className="menu-item">
                                        <div className="menu-item-header">
                                            <span className="course-type">{item.name}</span>
                                            <div className="menu-divider"></div>
                                        </div>
                                        <h4 className="dish-name">{item.dish}</h4>
                                        <p className="dish-description">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="menu-note">
                            <p>
                                <strong>Nota importante:</strong> Si tienes alguna alergia alimentaria o restricción dietética especial, 
                                por favor háznoslo saber al confirmar tu asistencia para que podamos preparar una alternativa adecuada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingMenuSection;
