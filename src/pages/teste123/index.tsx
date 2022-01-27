import React, { useState, useEffect } from 'react';

import { ShoppingCartOutlined, ApartmentOutlined } from '@ant-design/icons';

import {
  ProductCardHorizontal,
  ProductImage,
  PhotoCarouselSquare,
  ProductPhoto,
  ProductInfoWrapper,
  ProductInfo,
  InfoLeft,
  ProductCardHorizontalHeader,
  MainInfo,
  ProductNameWrapper,
  ProductName,
  ProductCodes,
  ProductCode,
  BarCode,
  MainInfoSpacing,
  ProductOfferType,
  ProductOfferTypeValue,
  ProductDetails,
  ProductDetailLeft,
  ProductQuality,
  QualityIcon,
  QualityInfo,
  QualityInfoLabel,
  QualityInfoValue,
  QualityInfoSpacing,
  ProductPackage,
  PackageIcon,
  PackageInfo,
  PackageInfoLabel,
  PackageInfoValue,
  PackageInfoSpacing,
  ProductDetailLeftSpacing,
  ProductDetailCenter,
  ProductColor,
  ColorIcon,
  ColorIconSpacing,
  ColorInfo,
  ColorInfoLabel,
  ColorInfoValue,
  ColorInfoSpacing,
  ProductMultiple,
  MultipleIcon,
  GroupOutlinedIcon,
  MultipleInfo,
  MultipleInfoLabel,
  MultipleInfoValue,
  MultipleInfoSpacing,
  ProductDetailCenterSpacing,
  ProductDetailRight,
  ProductSize,
  SizeIcon,
  SizeInfo,
  SizeInfoLabel,
  SizeInfoValue,
  SizeInfoSpacing,
  ProductDetailRightSpacing,
  ProductComments,
  ProducedBy,
  ProducedByLabel,
  JoaodaSilvaLTDA,
  ProductNote,
  ProductNoteLabel,
  ProductNoteValue,
  ProductCommentsSpacing,
  InfoLeftSpacing,
  InfoRight,
  PriceOptionsWrapper,
  PriceOptions,
  ProductPriceGroup,
  Price,
  PriceLabelWrapper,
  PriceLabel,
  PriceActual,
  PriceActualCurrency,
  PriceActualPrice,
  PriceActualUnit,
  RadioGroupCustomWrapper,
  RadioGroupCustom,
  RadioCustomFirst,
  RadioCustomLast,
  RadioCustomLastLabelWrapper,
  RadioCustomLastLabel,
  RadioCustomLastValueWrapper,
  RadioCustomLastValue,
  AmountInfo,
  MinimumPurchaseWrapper,
  MinimumPurchase,
  MinimumPurchaseLabel,
  MinimumPurchaseValue,
  AvailableQuantity,
  AvailableInfo,
  AvailableInfoValue,
  AvailableInfoLabel,
  AvailablePer,
  AvailablePackage,
  AvailablePerLayer,
  AvailableLayer,
  AvailablePerCart,
  AvailableCart,
  AvailableQuantitySpacing,
  PriceOptionsSpacing,
  OrderActions,
  ButtonBuy,
  ButtonNetwork,
  InfoRightSpacing,
  ProductInfoWrapperSpacing,
} from './styles';

import ProductPhotoImage from './assets/13286_333097.png';

const ProductCardHorizontalPage = () => {
  function handleButtonBuy() {
    console.log('handleButtonBuy');
  }

  function handleButtonNetwork() {
    console.log('handleButtonBuy');
  }

  return (
    <ProductCardHorizontal>
      <ProductImage>
        <PhotoCarouselSquare>
          <ProductPhoto src={ProductPhotoImage} />
        </PhotoCarouselSquare>
      </ProductImage>
      <ProductInfoWrapper>
        <ProductInfoWrapperSpacing>
          <ProductInfo>
            <InfoLeft>
              <InfoLeftSpacing>
                <ProductCardHorizontalHeader>
                  <MainInfo>
                    <MainInfoSpacing>
                      <ProductNameWrapper>
                        <ProductName>Kalanchoe Variado P14</ProductName>
                      </ProductNameWrapper>
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
                </ProductCardHorizontalHeader>
                <ProductDetails>
                  <ProductDetailLeft>
                    <ProductDetailLeftSpacing>
                      <ProductQuality>
                        <QualityIcon />
                        <QualityInfo>
                          <QualityInfoSpacing>
                            <QualityInfoLabel>Qualidade:</QualityInfoLabel>
                            <QualityInfoValue>A1</QualityInfoValue>
                          </QualityInfoSpacing>
                        </QualityInfo>
                      </ProductQuality>
                      <ProductPackage>
                        <PackageIcon>
                          <GroupOutlinedIcon />
                        </PackageIcon>
                        <PackageInfo>
                          <PackageInfoSpacing>
                            <PackageInfoLabel>Embalagem:</PackageInfoLabel>
                            <PackageInfoValue>070 - PV11</PackageInfoValue>
                          </PackageInfoSpacing>
                        </PackageInfo>
                      </ProductPackage>
                    </ProductDetailLeftSpacing>
                  </ProductDetailLeft>
                  <ProductDetailCenter>
                    <ProductDetailCenterSpacing>
                      <ProductColor>
                        <ColorIcon>
                          <ColorIconSpacing />
                        </ColorIcon>
                        <ColorInfo>
                          <ColorInfoSpacing>
                            <ColorInfoLabel>Cores:</ColorInfoLabel>
                            <ColorInfoValue>Variado</ColorInfoValue>
                          </ColorInfoSpacing>
                        </ColorInfo>
                      </ProductColor>
                      <ProductMultiple>
                        <MultipleIcon>
                          <GroupOutlinedIcon />
                        </MultipleIcon>
                        <MultipleInfo>
                          <MultipleInfoSpacing>
                            <MultipleInfoLabel>Múltiplo:</MultipleInfoLabel>
                            <MultipleInfoValue>4</MultipleInfoValue>
                          </MultipleInfoSpacing>
                        </MultipleInfo>
                      </ProductMultiple>
                    </ProductDetailCenterSpacing>
                  </ProductDetailCenter>
                  <ProductDetailRight>
                    <ProductDetailRightSpacing>
                      <ProductSize>
                        <SizeIcon />
                        <SizeInfo>
                          <SizeInfoSpacing>
                            <SizeInfoLabel>Dimensão:</SizeInfoLabel>
                            <SizeInfoValue>P14</SizeInfoValue>
                          </SizeInfoSpacing>
                        </SizeInfo>
                      </ProductSize>
                    </ProductDetailRightSpacing>
                  </ProductDetailRight>
                  <ProductComments>
                    <ProductCommentsSpacing>
                      <ProducedBy>
                        <ProducedByLabel>Por:</ProducedByLabel>
                        <JoaodaSilvaLTDA>João da Silva LTDA</JoaodaSilvaLTDA>
                      </ProducedBy>
                      <ProductNote>
                        <ProductNoteLabel>Observação:</ProductNoteLabel>
                        <ProductNoteValue>
                          Variado nas cores vermelho, amarelo e laranja.
                        </ProductNoteValue>
                      </ProductNote>
                    </ProductCommentsSpacing>
                  </ProductComments>
                </ProductDetails>
              </InfoLeftSpacing>
            </InfoLeft>
            <InfoRight>
              <InfoRightSpacing>
                <PriceOptionsWrapper>
                  <PriceOptions>
                    <PriceOptionsSpacing>
                      <ProductPriceGroup>
                        <Price>
                          <PriceLabelWrapper>
                            <PriceLabel>A partir de</PriceLabel>
                          </PriceLabelWrapper>
                          <PriceActual>
                            <PriceActualCurrency>R$</PriceActualCurrency>
                            <PriceActualPrice>3,70</PriceActualPrice>
                            <PriceActualUnit>un</PriceActualUnit>
                          </PriceActual>
                        </Price>
                        <RadioGroupCustomWrapper />
                      </ProductPriceGroup>
                      <AmountInfo>
                        <MinimumPurchaseWrapper>
                          <MinimumPurchase>
                            <MinimumPurchaseLabel>
                              Compra mínima:
                            </MinimumPurchaseLabel>
                            <MinimumPurchaseValue>4</MinimumPurchaseValue>
                          </MinimumPurchase>
                        </MinimumPurchaseWrapper>
                        <AvailableQuantity>
                          <AvailableQuantitySpacing>
                            <AvailableInfo>
                              <AvailableInfoValue>2.500</AvailableInfoValue>
                              <AvailableInfoLabel>
                                disponíveis
                              </AvailableInfoLabel>
                            </AvailableInfo>
                            <AvailablePer>
                              <AvailablePackage>1</AvailablePackage>
                              <AvailablePerLayer>x</AvailablePerLayer>
                              <AvailableLayer>1</AvailableLayer>
                              <AvailablePerCart>x</AvailablePerCart>
                              <AvailableCart>1</AvailableCart>
                            </AvailablePer>
                          </AvailableQuantitySpacing>
                        </AvailableQuantity>
                      </AmountInfo>
                    </PriceOptionsSpacing>
                  </PriceOptions>
                </PriceOptionsWrapper>
                <OrderActions>
                  <ButtonBuy
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    size="small"
                    onClick={handleButtonBuy}
                  />
                  <ButtonNetwork
                    type="primary"
                    icon={<ApartmentOutlined />}
                    size="small"
                    onClick={handleButtonNetwork}
                  />
                </OrderActions>
              </InfoRightSpacing>
            </InfoRight>
          </ProductInfo>
        </ProductInfoWrapperSpacing>
      </ProductInfoWrapper>
    </ProductCardHorizontal>
  );
};

export default ProductCardHorizontalPage;
