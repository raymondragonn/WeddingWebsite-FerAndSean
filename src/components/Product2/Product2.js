import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from '../SectionTitle'
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslatedProducts } from '../../hooks/useTranslatedData';

const Product2 = ({ addToCartProduct, addToWishListProduct }) => {
  const { t } = useLanguage();
  const products = useTranslatedProducts();
  
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="wpo-product-section section-padding">
      <div className="container">
        <SectionTitle 
          subTitle={t('Our Amazing Work')} 
          MainTitle={t('Our Amazing Work')} 
        />
        <div className="wpo-product-wrap">
          <div className="row">
            {products.length > 0 &&
              products.slice(4, 12).map((product, pitem) => (
                <div className="col col-lg-3 col-md-6 col-sm-6 col-12" key={pitem}>
                  <div className="wpo-product-item">
                    <div className="wpo-product-img">
                      <img src={product.proImg} alt={product.title} />
                      <ul>
                        <li>
                          <button
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Add to Wishlist"
                            onClick={() => addToWishListProduct(product)}
                          >
                            <i className="fi flaticon-heart"></i>
                          </button>
                        </li>
                        <li>
                          <button
                            data-bs-toggle="tooltip"
                            data-bs-html="true"
                            title="Add to Cart"
                            onClick={() => addToCartProduct(product)}
                          >
                            Add To Cart
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="wpo-product-text">
                      <h3><Link onClick={ClickHandler} to={`/product-single/${product.slug}`}>{product.title}</Link></h3>
                      <ul>
                        <li>${product.delPrice}</li>
                        <li>${product.price}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product2;
