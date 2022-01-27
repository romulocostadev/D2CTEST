/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState, useEffect } from 'react';

import {
    ShoppingCartOutlined,
    ApartmentOutlined,
    CalendarOutlined,
  } from '@ant-design/icons';
import {
  ProductCardCart,
  Frame812,
  ProductCard,
  ProductInfo,
  InfoLeft,
  ProductCardHeader,
  MainInfo,
  ProductName,
  ProductCodes,
  ProductCode,
  BarCode,
  MainInfoSpacing,
  ProductOfferType,
  ProductOfferTypeValue,
  ProductDetail,
  ProductQuality,
  QualityIcon,
  QualityInfo,
  QualityInfoLabel,
  QualityInfoValue,
  QualityInfoSpacing,
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
  ProductSize,
  SizeIcon,
  SizeInfo,
  SizeInfoLabel,
  SizeInfoValue,
  SizeInfoSpacing,
  InfoLeftSpacing,
  InfoCenter,
  ProducedBy,
  ProducedByLabel,
  Button,
  ProductNote,
  ProductDeliveryLabel,
  ProductDeliveryValue,
  ProductDelivery,
  InfoCenterSpacing,
  Frame811,
  InfoRight,
  QuantityInfo,
  UnitInfo,
  UnitInfoValue,
  UnitInfoLabel,
  TotalInfo,
  TotalInfoLabel,
  TotalInfoValue,
  TotalInfoUnit,
  QuantityInfoSpacing,
  PriceInfo,
  UnitPrice,
  UnitPriceLabel,
  UnitPriceInfo,
  UnitPriceInfoLabel,
  UnitPriceInfoValue,
  TotalPrice,
  TotalPriceLabel,
  TotalPriceInfo,
  TotalPriceInfoLabel,
  TotalPriceInfoValue,
  PriceInfoSpacing,
  Frame811Spacing,
  Frame812Spacing,
  ProductPhoto,
  ProductPhotoCol,
  ProductCardCol
} from './styles';

import Photo from '../../assets/ProductImage.png'

const ProductCardCartPage = () => {
  return (
    <ProductCardCart>
      <Frame812>
        <Frame812Spacing>
          <ProductCard>
            <ProductPhotoCol>
              <ProductPhoto src={Photo} />
            </ProductPhotoCol>
            <ProductCardCol>
              <ProductInfo>
                <InfoLeft>
                  <InfoLeftSpacing>
                    <ProductCardHeader>
                      <MainInfo>
                          <MainInfoSpacing>
                              <ProductCodes>
                          <ProductName>Kalanchoe Variado P14</ProductName>
                            </ProductCodes>
                          <ProductCodes>
                            <ProductCode>01168.014.000.99.00</ProductCode>
                            <BarCode>000.00000.0000.0</BarCode>
                          </ProductCodes>
                        </MainInfoSpacing>
                      </MainInfo>
                      <ProductOfferType>
                        <ProductOfferTypeValue>
                          Produto no sítio (VOL)
                        </ProductOfferTypeValue>
                      </ProductOfferType>
                    </ProductCardHeader>
                    <ProductDetail>
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
                        <PackageIcon >
                        <ApartmentOutlined
                            style={{ fontSize: '16px', color: '#f88f1f' }}
                          />
                        </PackageIcon>
                        <PackageInfo>
                          <PackageInfoSpacing>
                            <PackageInfoLabel>Embalagem:</PackageInfoLabel>
                            <PackageInfoValue>
                              070 - Porta Vaso
                            </PackageInfoValue>
                          </PackageInfoSpacing>
                        </PackageInfo>
                      </ProductPackage>
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
                    </ProductDetail>
                  </InfoLeftSpacing>
                </InfoLeft>
                <InfoCenter>
                  <InfoCenterSpacing>
                    <ProducedBy>
                      <ProducedByLabel>Por:</ProducedByLabel>
                      <Button>João da Silva LTDA</Button>
                    </ProducedBy>
                    <ProductNote>
                      <ProductDeliveryLabel>Observação: </ProductDeliveryLabel>
                      <ProductDeliveryValue>
                      {" "} Variado nas cores vermelho, a...
                      </ProductDeliveryValue>
                    </ProductNote>
                    <ProductDelivery>
                      <ProductDeliveryLabel>
                        Previsão de entrega na CVH:
                      </ProductDeliveryLabel>
                      <ProductDeliveryValue>
                        (Ter) 01/01/2022 às 08:00
                      </ProductDeliveryValue>
                    </ProductDelivery>
                  </InfoCenterSpacing>
                </InfoCenter>
                <Frame811>
                  <Frame811Spacing>
                    <InfoRight>
                      <QuantityInfo>
                        <QuantityInfoSpacing>
                          <UnitInfo>
                            <UnitInfoValue>48</UnitInfoValue>
                            <UnitInfoLabel>Embalagens</UnitInfoLabel>
                          </UnitInfo>
                          <TotalInfo>
                            <TotalInfoLabel>Total</TotalInfoLabel>
                            <TotalInfoValue>150 </TotalInfoValue>
                            <TotalInfoUnit>Unidades</TotalInfoUnit>
                          </TotalInfo>
                        </QuantityInfoSpacing>
                      </QuantityInfo>
                      <PriceInfo>
                        <PriceInfoSpacing>
                          <UnitPrice>
                            <UnitPriceLabel>Valor unitário:</UnitPriceLabel>
                            <UnitPriceInfo>
                              <UnitPriceInfoLabel>R$</UnitPriceInfoLabel>
                              <UnitPriceInfoValue>3,70</UnitPriceInfoValue>
                            </UnitPriceInfo>
                          </UnitPrice>
                          <TotalPrice>
                            <TotalPriceLabel>Total:</TotalPriceLabel>
                            <TotalPriceInfo>
                              <TotalPriceInfoLabel>R$</TotalPriceInfoLabel>
                              <TotalPriceInfoValue>3,70</TotalPriceInfoValue>
                            </TotalPriceInfo>
                          </TotalPrice>
                        </PriceInfoSpacing>
                      </PriceInfo>
                    </InfoRight>
                  </Frame811Spacing>
                </Frame811>
              </ProductInfo>
            </ProductCardCol>
          </ProductCard>
        </Frame812Spacing>
      </Frame812>
    </ProductCardCart>
  );
};

export default ProductCardCartPage;
