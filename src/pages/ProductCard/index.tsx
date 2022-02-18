import React, { useState, useEffect } from 'react';

import { ShoppingCartOutlined, ApartmentOutlined } from '@ant-design/icons';

import ProductPhotoImage from './assets/13290_333091.png';

import {
  ProductCard,
  ProductCardHeader,
  CalendarOutlinedIcon,
  ProductOfferType,
  ProdutonositioVOL,
  ProductImage,
  PhotoCarouselWide,
  ProductPhoto,
  ImageCaption,
  ProductCardFooter,
  MainInfo,
  ProductName,
  PriceInfo,
  PriceInfoLabel,
  PriceOld,
  PriceNew,
  Currency,
  Price,
  Unit,
  SecondaryInfo,
  ProductCodes,
  ProductCode,
  BarCode,
  ProducedBy,
  ProducedByLabel,
  ProducedByValue,
  ProductCardExpanded,
  ProductInfo,
  ProductNote,
  ProductNoteLabel,
  ProductNoteValue,
  ProductDetails,
  ProductDetailLeft,
  ProductQuality,
  QualityIcon,
  FlagOutlinedIcon,
  QualityInfo,
  QualityInfoLabel,
  QualityInfoValue,
  ProductSize,
  SizeIcon,
  SizeInfo,
  SizeInfoLabel,
  SizeInfoValue,
  ProductMultiple,
  MultipleIcon,
  GroupOutlinedIcon,
  MultipleInfo,
  MultipleLabel,
  MultipleValue,
  ProductDetailRight,
  ProductColor,
  ColorIcon,
  ExpandOutlinedIcon,
  ColorInfo,
  ColorInfoLabel,
  ColorInfoValue,
  ProductPackage,
  PackageIcon,
  PackageInfo,
  PackageInfoLabel,
  PackageInfoValue,
  ProductCardActions,
  PriceOptions,
  RadioGroupCustom,
  RadioCustomFirst,
  RadioCustomFirstLabel,
  RadioCustomFirstPrice,
  RadioCustomCenter,
  RadioCustomCenterLabel,
  RadioCustomCenterPrice,
  RadioCustomLast,
  RadioCustomLastLabel,
  RadioCustomLastPrice,
  AmountInfo,
  MinimumPurchase,
  MinimumPurchaseLabel,
  MinimunAmount,
  AvailableQuantity,
  AvailableInfo,
  AvailableAmount,
  AvailableInfoLabel,
  AvailablePer,
  AvailablePackage,
  AvailablePerLabelPackage,
  AvailableLayer,
  AvailablePerLabelCart,
  AvailableCart,
  OrderActions,
  Frame826,
  ButtonNetwork,
  Frame825,
} from './styles';

const ProductCardPage = () => {
  return (
    <ProductCard>
      <ProductCardHeader>
        <CalendarOutlinedIcon />
        <ProductOfferType>
          <ProdutonositioVOL>Produto no sítio (VOL)</ProdutonositioVOL>
        </ProductOfferType>
      </ProductCardHeader>
      <ProductImage>
        <PhotoCarouselWide>
          <ProductPhoto src={ProductPhotoImage} />
        </PhotoCarouselWide>
        <ImageCaption>Imagem ilustrativa</ImageCaption>
      </ProductImage>
      <ProductCardFooter>
        <MainInfo>
          <ProductName>Kalanchoe Variado P14</ProductName>
          <PriceInfo>
            <PriceInfoLabel>A partir de</PriceInfoLabel>
            <PriceOld>R$ 3,70</PriceOld>
            <PriceNew>
              <Currency>R$</Currency>
              <Price>2,90</Price>
              <Unit>un</Unit>
            </PriceNew>
          </PriceInfo>
        </MainInfo>
        <SecondaryInfo>
          <ProductCodes>
            <ProductCode>01168.014.000.99.00</ProductCode>
            <BarCode>000.00000.0000.0</BarCode>
          </ProductCodes>
          <ProducedBy>
            <ProducedByLabel>Por:</ProducedByLabel>
            <ProducedByValue>João da Silva LTDA</ProducedByValue>
          </ProducedBy>
        </SecondaryInfo>
      </ProductCardFooter>
      <ProductCardExpanded>
        <ProductInfo>
          <ProductNote>
            <ProductNoteLabel>Observação:</ProductNoteLabel>
            <ProductNoteValue>
              Variado nas cores vermelho, amarelo...
            </ProductNoteValue>
          </ProductNote>
          <ProductDetails>
            <ProductDetailLeft>
              <ProductQuality>
                <QualityIcon>
                  <FlagOutlinedIcon />
                </QualityIcon>
                <QualityInfo>
                  <QualityInfoLabel>Qualidade:</QualityInfoLabel>
                  <QualityInfoValue>A1</QualityInfoValue>
                </QualityInfo>
              </ProductQuality>
              <ProductSize>
                <SizeIcon>
                  <ExpandOutlinedIcon />
                </SizeIcon>
                <SizeInfo>
                  <SizeInfoLabel>Dimensão:</SizeInfoLabel>
                  <SizeInfoValue>P14</SizeInfoValue>
                </SizeInfo>
              </ProductSize>
              <ProductMultiple>
                <MultipleIcon>
                  <GroupOutlinedIcon />
                </MultipleIcon>
                <MultipleInfo>
                  <MultipleLabel>Múltiplo:</MultipleLabel>
                  <MultipleValue>4</MultipleValue>
                </MultipleInfo>
              </ProductMultiple>
            </ProductDetailLeft>
            <ProductDetailRight>
              <ProductColor>
                <ColorIcon>
                  <ExpandOutlinedIcon />
                </ColorIcon>
                <ColorInfo>
                  <ColorInfoLabel>Cores:</ColorInfoLabel>
                  <ColorInfoValue>Variado</ColorInfoValue>
                </ColorInfo>
              </ProductColor>
              <ProductPackage>
                <PackageIcon>
                  <ExpandOutlinedIcon />
                </PackageIcon>
                <PackageInfo>
                  <PackageInfoLabel>Embalagem:</PackageInfoLabel>
                  <PackageInfoValue>070 - PV11</PackageInfoValue>
                </PackageInfo>
              </ProductPackage>
            </ProductDetailRight>
          </ProductDetails>
        </ProductInfo>
        <ProductCardActions>
          <PriceOptions>
            <RadioGroupCustom>
              <RadioCustomFirst>
                <RadioCustomFirstLabel>Embalagem</RadioCustomFirstLabel>
                <RadioCustomFirstPrice>R$ 00,00</RadioCustomFirstPrice>
              </RadioCustomFirst>
              <RadioCustomCenter>
                <RadioCustomCenterLabel>Camada</RadioCustomCenterLabel>
                <RadioCustomCenterPrice>R$ 00,00</RadioCustomCenterPrice>
              </RadioCustomCenter>
              <RadioCustomLast>
                <RadioCustomLastLabel>Carrinho</RadioCustomLastLabel>
                <RadioCustomLastPrice>R$ 00,00</RadioCustomLastPrice>
              </RadioCustomLast>
            </RadioGroupCustom>
            <AmountInfo>
              <MinimumPurchase>
                <MinimumPurchaseLabel>Compra mínima:</MinimumPurchaseLabel>
                <MinimunAmount>4</MinimunAmount>
              </MinimumPurchase>
              <AvailableQuantity>
                <AvailableInfo>
                  <AvailableAmount>2.500</AvailableAmount>
                  <AvailableInfoLabel>disponíveis</AvailableInfoLabel>
                </AvailableInfo>
                <AvailablePer>
                  <AvailablePackage>1</AvailablePackage>
                  <AvailablePerLabelPackage>x</AvailablePerLabelPackage>
                  <AvailableLayer>1</AvailableLayer>
                  <AvailablePerLabelCart>x</AvailablePerLabelCart>
                  <AvailableCart>1</AvailableCart>
                </AvailablePer>
              </AvailableQuantity>
            </AmountInfo>
          </PriceOptions>
          <OrderActions>
            <Frame826>
              <ButtonNetwork type="primary" icon={<ShoppingCartOutlined />} />
            </Frame826>
            <Frame825>
              <ButtonNetwork type="primary" icon={<ApartmentOutlined />} />
            </Frame825>
          </OrderActions>
        </ProductCardActions>
      </ProductCardExpanded>
    </ProductCard>
  );
};

export default ProductCardPage;
