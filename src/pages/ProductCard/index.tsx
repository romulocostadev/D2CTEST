import React, { useState, useEffect } from 'react';

import {
  ShoppingCartOutlined,
  ApartmentOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

import {
  ProductCard,
  ProductCardHeader,
  ProductOfferType,
  Produtonositio,
  ProductImage,
  PhotoCarouselWide,
  ImageCaption,
  ProductImageSpacing,
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
  ProductCodesSpacing,
  ProducedBy,
  ProducedByLabel,
  ProducedByValue,
  ProducedBySpacing,
  ProductCardFooterSpacing,
  ProductCardExpanded,
  ProductInfo,
  ProductNote,
  ProductNoteLabel,
  ProductNoteValue,
  ProductNoteSpacing,
  ProductDetails,
  ProductDetailLeft,
  ProductQuality,
  QualityIcon,
  QualityInfo,
  QualityInfoLabel,
  QualityInfoValue,
  QualityInfoSpacing,
  ProductSize,
  SizeIcon,
  SizeInfo,
  SizeInfoLabel,
  SizeInfoValue,
  SizeInfoSpacing,
  ProductMultiple,
  MultipleIcon,
  MultipleInfo,
  MultipleLabel,
  MultipleValue,
  MultipleInfoSpacing,
  ProductDetailLeftSpacing,
  ProductDetailRight,
  ProductColor,
  ColorIcon,
  ColorInfo,
  ColorInfoLabel,
  ColorInfoValue,
  ColorInfoSpacing,
  ProductPackage,
  PackageIcon,
  PackageInfo,
  PackageInfoLabel,
  PackageInfoValue,
  PackageInfoSpacing,
  ProductDetailRightSpacing,
  ProductInfoSpacing,
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
  AvailableQuantitySpacing,
  PriceOptionsSpacing,
  OrderActions,
  ButtonNetwork,
  ProductCardActionsSpacing,
} from './styles';

import ProductPhoto from '../../assets/ProductImage.png';

const ProductCardPage = () => {
  function clickButtonNetword() {
    console.log('clickButtonNetword');
  }

  function clickButtonNetwork() {
    console.log('clickButtonNetwork');
  }

  return (
    <ProductCard>
      <ProductCardHeader>
        <CalendarOutlined style={{ fontSize: '16px', color: '#f88f1f' }} />
        <ProductOfferType>
          <Produtonositio>Produto no sítio (VOL)</Produtonositio>
        </ProductOfferType>
      </ProductCardHeader>
      <ProductImage>
        <ProductImageSpacing>
          <PhotoCarouselWide src={ProductPhoto} />
        </ProductImageSpacing>
      </ProductImage>
      <ProductCardFooter>
        <ProductCardFooterSpacing>
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
              <ProductCodesSpacing>
                <ProductCode>01168.014.000.99.00</ProductCode>
                <BarCode>000.00000.0000.0</BarCode>
              </ProductCodesSpacing>
            </ProductCodes>
            <ProducedBy>
              <ProducedBySpacing>
                <ProducedByLabel>Por:</ProducedByLabel>
                <ProducedByValue>João da Silva LTDA</ProducedByValue>
              </ProducedBySpacing>
            </ProducedBy>
          </SecondaryInfo>
        </ProductCardFooterSpacing>
      </ProductCardFooter>
      <ProductCardExpanded>
        <ProductInfo>
          <ProductInfoSpacing>
            <ProductNote>
              <ProductNoteSpacing>
                <ProductNoteLabel>Observação:</ProductNoteLabel>
                <ProductNoteValue>
                  Variado nas cores vermelho, amarelo...
                </ProductNoteValue>
              </ProductNoteSpacing>
            </ProductNote>
            <ProductDetails>
              <ProductDetailLeft>
                <ProductDetailLeftSpacing>
                  <ProductQuality>
                    <QualityIcon>
                      <ApartmentOutlined
                        style={{ fontSize: '16px', color: '#f88f1f' }}
                      />
                    </QualityIcon>
                    <QualityInfo>
                      <QualityInfoSpacing>
                        <QualityInfoLabel>Qualidade:</QualityInfoLabel>
                        <QualityInfoValue>A1</QualityInfoValue>
                      </QualityInfoSpacing>
                    </QualityInfo>
                  </ProductQuality>
                  <ProductSize>
                    <SizeIcon>
                      <ApartmentOutlined
                        style={{ fontSize: '16px', color: '#f88f1f' }}
                      />
                    </SizeIcon>
                    <SizeInfo>
                      <SizeInfoSpacing>
                        <SizeInfoLabel>Dimensão:</SizeInfoLabel>
                        <SizeInfoValue>P14</SizeInfoValue>
                      </SizeInfoSpacing>
                    </SizeInfo>
                  </ProductSize>
                  <ProductMultiple>
                    <MultipleIcon>
                      <ApartmentOutlined
                        style={{ fontSize: '16px', color: '#f88f1f' }}
                      />
                    </MultipleIcon>
                    <MultipleInfo>
                      <MultipleInfoSpacing>
                        <MultipleLabel>Múltiplo:</MultipleLabel>
                        <MultipleValue>4</MultipleValue>
                      </MultipleInfoSpacing>
                    </MultipleInfo>
                  </ProductMultiple>
                </ProductDetailLeftSpacing>
              </ProductDetailLeft>
              <ProductDetailRight>
                <ProductDetailRightSpacing>
                  <ProductColor>
                    <ColorIcon>
                      <ApartmentOutlined
                        style={{ fontSize: '16px', color: '#f88f1f' }}
                      />
                    </ColorIcon>
                    <ColorInfo>
                      <ColorInfoSpacing>
                        <ColorInfoLabel>Cores:</ColorInfoLabel>
                        <ColorInfoValue>Variado</ColorInfoValue>
                      </ColorInfoSpacing>
                    </ColorInfo>
                  </ProductColor>
                  <ProductPackage>
                    <PackageIcon>
                      <ApartmentOutlined
                        style={{ fontSize: '16px', color: '#f88f1f' }}
                      />
                    </PackageIcon>
                    <PackageInfo>
                      <PackageInfoSpacing>
                        <PackageInfoLabel>Embalagem:</PackageInfoLabel>
                        <PackageInfoValue>070 - PV11</PackageInfoValue>
                      </PackageInfoSpacing>
                    </PackageInfo>
                  </ProductPackage>
                </ProductDetailRightSpacing>
              </ProductDetailRight>
            </ProductDetails>
          </ProductInfoSpacing>
        </ProductInfo>
        <ProductCardActions>
          <ProductCardActionsSpacing>
            <PriceOptions>
              <PriceOptionsSpacing>
                <RadioGroupCustom>
                  <RadioCustomFirst>
                    <RadioCustomFirstLabel>Embalagem</RadioCustomFirstLabel>
                    <RadioCustomFirstPrice>R$ 00,0</RadioCustomFirstPrice>
                  </RadioCustomFirst>
                  <RadioCustomCenter>
                    <RadioCustomCenterLabel>Camada</RadioCustomCenterLabel>
                    <RadioCustomCenterPrice>R$ 00,0</RadioCustomCenterPrice>
                  </RadioCustomCenter>
                  <RadioCustomLast>
                    <RadioCustomLastLabel>Carrinho</RadioCustomLastLabel>
                    <RadioCustomLastPrice>R$ 00,0</RadioCustomLastPrice>
                  </RadioCustomLast>
                </RadioGroupCustom>
                <AmountInfo>
                  <MinimumPurchase>
                    <MinimumPurchaseLabel>Compra mínima:</MinimumPurchaseLabel>
                    <MinimunAmount>4</MinimunAmount>
                  </MinimumPurchase>
                  <AvailableQuantity>
                    <AvailableQuantitySpacing>
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
                    </AvailableQuantitySpacing>
                  </AvailableQuantity>
                </AmountInfo>
              </PriceOptionsSpacing>
            </PriceOptions>
            <OrderActions>
              <ButtonNetwork
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={clickButtonNetword}
              />
              <ButtonNetwork
                type="primary"
                icon={<ApartmentOutlined />}
                onClick={clickButtonNetwork}
              />
            </OrderActions>
          </ProductCardActionsSpacing>
        </ProductCardActions>
      </ProductCardExpanded>
    </ProductCard>
  );
};

export default ProductCardPage;
