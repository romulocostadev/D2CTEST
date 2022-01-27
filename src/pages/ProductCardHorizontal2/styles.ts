import styled from 'styled-components';

import { Layout, Col, Row, Space, Button, Image } from 'antd';

export const ProductCardHorizontal = styled(Row).attrs({
  align: 'middle',
})`
  /* min-width: 100vw; */
  /* min-height: 100vh; */
  padding: 16px 16px 16px 16px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 1360px;
  border: 1px solid black;
  height: 146px;
`;

export const ProductImage = styled(Col).attrs({ md: 3, xs: 24 })``;

export const PhotoCarouselSquare = styled.img`
  height: 114px;
  margin-left: -30px;
`;

export const ProductInfoWrapper = styled(Col).attrs({ md: 21, xs: 24 })``;

export const ProductInfoWrapperSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 10.0,
})`
  width: 100%;
`;
export const ProductInfo = styled(Row).attrs({
  gutter: [24.0, 0],
  // justify: 'space-between',
})``;

export const InfoLeft = styled(Col).attrs({ md: 16, xs: 24 })``;

export const InfoLeftSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductCardHorizontalHeader = styled(Row).attrs({
  gutter: [12.0, 0],
  align: 'middle',
  // justify: 'space-between',
})``;

export const MainInfo = styled(Col).attrs({ md: 7, xs: 24 })``;

export const MainInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 4.0,
})`
  width: 100%;
`;
export const ProductNameWrapper = styled(Row)``;

export const ProductName = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #36393a;
  text-align: center;
`;

export const ProductCodes = styled(Row).attrs({
  gutter: [16.0, 0],
  // justify: 'space-between',
})``;

export const ProductCode = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const BarCode = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const ProductOfferType = styled(Col).attrs({ md: 5, xs: 24 })`
  padding: 4px 8px 4px 8px;
  background-color: #fbae15;
  border-radius: 4px;
`;

export const ProductOfferTypeValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  text-align: center;
`;

export const ProductDetails = styled(Row).attrs({
  gutter: [8.0, 0],
  align: 'middle',
  // justify: 'space-between',
})``;

export const ProductDetailLeft = styled(Col).attrs({ md: 4, xs: 24 })``;

export const ProductDetailLeftSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductQuality = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const QualityIcon = styled(Col).attrs({ md: 3, xs: 24 })`
  border-radius: 4px;
`;

export const QualityInfo = styled(Col).attrs({ md: 19, xs: 24 })``;

export const QualityInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 2.0,
})`
  width: 100%;
`;
export const QualityInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const QualityInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductPackage = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const PackageIcon = styled(Row)`
  border-radius: 4px;
`;

export const PackageInfo = styled(Col).attrs({ md: 19, xs: 24 })``;

export const PackageInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 2.0,
})`
  width: 100%;
`;
export const PackageInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const PackageInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductDetailCenter = styled(Col).attrs({ md: 4, xs: 24 })``;

export const ProductDetailCenterSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductColor = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const ColorIcon = styled(Col).attrs({ md: 3, xs: 24 })`
  background-color: #ffffff;
`;

export const ColorIconSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ColorInfo = styled(Col).attrs({ md: 19, xs: 24 })``;

export const ColorInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 2.0,
})`
  width: 100%;
`;
export const ColorInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const ColorInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductMultiple = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const MultipleIcon = styled(Col).attrs({ md: 3, xs: 24 })`
  border-radius: 4px;
`;

export const MultipleInfo = styled(Col).attrs({ md: 19, xs: 24 })``;

export const MultipleInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 2.0,
})`
  width: 100%;
`;
export const MultipleInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const MultipleInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductDetailRight = styled(Col).attrs({ md: 4, xs: 24 })``;

export const ProductDetailRightSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductSize = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const SizeIcon = styled(Col).attrs({ md: 3, xs: 24 })`
  border-radius: 4px;
`;

export const SizeInfo = styled(Col).attrs({ md: 19, xs: 24 })``;

export const SizeInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 2.0,
})`
  width: 100%;
`;
export const SizeInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const SizeInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductComments = styled(Col).attrs({ md: 12, xs: 24 })``;

export const ProductCommentsSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProducedBy = styled(Row).attrs({
  gutter: [4.0, 0],
  align: 'middle',
})``;

export const ProducedByLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: center;
`;

export const JoaodaSilvaLTDA = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #f88f1f;
  text-align: left;
`;

export const ProductNote = styled(Row).attrs({
  gutter: [4.0, 0],
  align: 'middle',
})``;

export const ProductNoteLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const ProductNoteValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const InfoRight = styled(Col).attrs({ md: 7, xs: 24 })`
  background-color: #ffffff;
`;

export const InfoRightSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const PriceOptionsWrapper = styled(Row)``;

export const PriceOptions = styled(Col).attrs({ md: 24, xs: 24 })``;

export const PriceOptionsSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductPriceGroup = styled(Row).attrs({
  gutter: [8.0, 0],
  align: 'middle',
  // justify: 'space-between',
})`
  height: 40px;
`;

export const Price = styled(Col).attrs({ md: 7, xs: 24 })``;

export const PriceLabelWrapper = styled(Row).attrs({
  justify: 'center',
})``;

export const PriceLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const PriceActual = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})``;

export const PriceActualCurrency = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
  color: #f88f1f;
  text-align: center;
`;

export const PriceActualPrice = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #f88f1f;
  text-align: center;
`;

export const PriceActualUnit = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: center;
`;

export const RadioGroupCustomWrapper = styled(Col).attrs({ md: 17, xs: 24 })``;

export const RadioGroupCustom = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})`
  height: 100%;
`;

export const RadioCustomFirst = styled(Col).attrs({ md: 8, xs: 24 })`
  padding-left: 4px;
  padding-right: 4px;
  background-color: #f88f1f;
`;

export const RadioCustomCenterLabelWrapper = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})``;

export const RadioCustomCenterLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #ffffff;
  text-align: center;
`;

export const RadioCustomCenterValueWrapper = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})``;

export const RadioCustomCenterValue = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  text-align: center;
`;

export const RadioCustomCenter = styled(Col).attrs({ md: 8, xs: 24 })`
  padding-left: 4px;
  padding-right: 4px;
  background-color: #ffffff;
`;

// export const RadioCustomCenterLabelWrapper = styled(Row)``;

// export const RadioCustomCenterLabel = styled.h1`
//   font-family: Roboto;
//   font-weight: 400;
//   font-size: 8px;
//   line-height: 8px;
//   color: #36393a;
//   text-align: center;
// `;

// export const RadioCustomCenterValueWrapper = styled(Row)``;

// export const RadioCustomCenterValue = styled.h1`
//   font-family: Roboto;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 22px;
//   color: #f88f1f;
//   text-align: center;
// `;

export const RadioCustomLast = styled(Col).attrs({ md: 8, xs: 24 })`
  padding-left: 4px;
  padding-right: 4px;
  background-color: #ffffff;
`;

export const RadioCustomLastLabelWrapper = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})``;

export const RadioCustomLastLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #36393a;
  text-align: center;
`;

export const RadioCustomLastValueWrapper = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})``;

export const RadioCustomLastValue = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #f88f1f;
  text-align: center;
`;

export const AmountInfo = styled(Row).attrs({
  align: 'middle',
})``;

export const MinimumPurchaseWrapper = styled(Col).attrs({ md: 12, xs: 24 })``;

export const MinimumPurchase = styled(Row).attrs({
  gutter: [4.0, 0],
  // justify: 'space-between',
})``;

export const MinimumPurchaseLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: right;
`;

export const MinimumPurchaseValue = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: right;
`;

export const AvailableQuantity = styled(Col).attrs({ md: 12, xs: 24 })``;

export const AvailableQuantitySpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 4.0,
})`
  width: 100%;
`;
export const AvailableInfo = styled(Row).attrs({
  gutter: [4.0, 0],
  justify: 'end',
})``;

export const AvailableInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: right;
`;

export const AvailableInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: right;
`;

export const AvailablePer = styled(Row).attrs({
  gutter: [16.0, 0],
  justify: 'end',
})``;

export const AvailablePackage = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: right;
`;

export const AvailablePerLayer = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: right;
`;

export const AvailableLayer = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: right;
`;

export const AvailablePerCart = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: right;
`;

export const AvailableCart = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: right;
`;

export const OrderActions = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'center',
})``;

export const ButtonBuy = styled(Button)`
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-right: 4px;
`;

export const ButtonNetwork = styled(Button)`
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
