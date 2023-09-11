import React, { useState, useEffect } from 'react';
import CollapsibleCard from './CollapsibleCard ';
import './Product.css';
import { useTranslation } from 'react-i18next';

const Product = ({ product, onSelect, language }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  function showDiv() {
    var itemAdded = document.getElementById('item-added');
    itemAdded.style.display = 'block';

    setTimeout(function () {
      itemAdded.style.display = 'none';
    }, 2000);
  }

  const onClick = () => {
    showDiv();
    onSelect();
  };

  return (
    <div className='product-detail'>
      <img src={product.image} alt={product.name} />
      <div className='product-info'>
        <h2>{product.name}</h2>
        <div className='stars'>
          {'★'.repeat(product.rating)}
          {'☆'.repeat(5 - product.rating)}
        </div>
        <h3>
          {product.price} {t('sign')}
        </h3>

        <button className='cart-button' onClick={() => onClick()}>
          {t('add')}
        </button>

        <div id='item-added'>{t('added')}</div>

        <CollapsibleCard
          title={t('descbutton')}
          description={product.description}
        ></CollapsibleCard>
      </div>
    </div>
  );
};

export default Product;
