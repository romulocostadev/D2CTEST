import styled from 'styled-components';

import { Layout, Row, Col, Space, Button } from 'antd';

export const ProductCard = styled(Layout)`
  width: 292px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 50px 0px 0px 50px;
`;

export const ProductCardHeader = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})`
  padding: 16px 16px 16px 16px;
`;

export const ProductOfferType = styled(Row)`
  padding: 4px 8px 4px 8px;
  background-color: #fbae15;
  border-radius: 4px;
`;

export const ProdutonositioVOL = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  text-align: center;
`;

export const ProductImage = styled(Col).attrs({ xs: 24 })``;

export const ProductImageSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 12.0,
})`
  width: 100%;
`;
export const PhotoCarouselWide = styled(Row)`
  background-color: #ffffff;
`;

export const ImageCaption = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const ProductCardFooter = styled(Col).attrs({ xs: 24 })`
  padding: 16px 16px 16px 16px;
`;

export const ProductCardFooterSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const MainInfo = styled(Row).attrs({
  gutter: [4.0, 0],
  justify: 'space-between',
})``;

export const ProductName = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #36393a;
  text-align: left;
`;

export const PriceInfo = styled(Col).attrs({ md: 6, xs: 24 })``;

export const PriceInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const PriceOld = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #f88f1f;
  text-align: center;
`;

export const PriceNew = styled(Row).attrs({
  align: 'middle',
})``;

export const Currency = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
  color: #005ca8;
  text-align: center;
`;

export const Price = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #005ca8;
  text-align: center;
`;

export const Unit = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: center;
`;

export const SecondaryInfo = styled(Row).attrs({
  //   gutter: [4.0, 0],
  justify: 'space-between',
})``;

export const ProductCodes = styled(Col).attrs({ md: 9, xs: 24 })``;

export const ProductCodesSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 4.0,
})`
  width: 100%;
`;
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

export const ProducedBy = styled(Col).attrs({ md: 9, xs: 24 })``;

export const ProducedBySpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 4.0,
})`
  width: 100%;
`;
export const ProducedByLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const ProducedByValue = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const ProductCardExpanded = styled(Col).attrs({ xs: 24 })``;

export const ProductInfo = styled(Col).attrs({ xs: 24 })`
  padding-left: 16px;
  padding-bottom: 8px;
  padding-right: 16px;
`;

export const ProductInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const ProductNote = styled(Col).attrs({ xs: 24 })``;

export const ProductNoteSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 2.0,
})`
  width: 100%;
`;
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
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductDetails = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const ProductDetailLeft = styled(Col).attrs({ md: 12, xs: 24 })``;

export const ProductDetailLeftSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductQuality = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const QualityIcon = styled(Row)`
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
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductSize = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const SizeIcon = styled(Row)`
  border-radius: 4px;
`;

export const SizeInfo = styled(Col).attrs({ md: 15, xs: 24 })``;

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
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductMultiple = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const MultipleIcon = styled(Row)`
  border-radius: 4px;
`;

export const MultipleInfo = styled(Col).attrs({ md: 15, xs: 24 })``;

export const MultipleInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 2.0,
})`
  width: 100%;
`;
export const MultipleLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const MultipleValue = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductDetailRight = styled(Col).attrs({ md: 12, xs: 24 })``;

export const ProductDetailRightSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductColor = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const ColorIcon = styled(Row)`
  border-radius: 4px;
`;

export const ColorInfo = styled(Col).attrs({ md: 9, xs: 24 })``;

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
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductPackage = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const PackageIcon = styled(Row)`
  border-radius: 4px;
`;

export const PackageInfo = styled(Col).attrs({ md: 15, xs: 24 })``;

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
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductCardActions = styled(Col).attrs({ xs: 24 })`
  padding: 16px 16px 16px 16px;
  background-color: #f6f6f6;
`;

export const ProductCardActionsSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 16.0,
})`
  width: 100%;
`;
export const PriceOptions = styled(Col).attrs({ xs: 24 })``;

export const PriceOptionsSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const RadioGroupCustom = styled(Row)``;

export const RadioCustomFirst = styled(Col).attrs({ md: 8, xs: 24 })`
  padding: 5px 16px 5px 16px;
  background-color: #f88f1f;
`;

export const RadioCustomFirstLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #ffffff;
  text-align: center;
`;

export const RadioCustomFirstPrice = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  text-align: center;
`;

export const RadioCustomCenter = styled(Col).attrs({ md: 8, xs: 24 })`
  padding: 5px 16px 5px 16px;
  background-color: #ffffff;
`;

export const RadioCustomCenterLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #36393a;
  text-align: left;
`;

export const RadioCustomCenterPrice = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #f88f1f;
  text-align: left;
`;

export const RadioCustomLast = styled(Col).attrs({ md: 8, xs: 24 })`
  padding: 5px 16px 5px 16px;
  background-color: #ffffff;
`;

export const RadioCustomLastLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #36393a;
  text-align: left;
`;

export const RadioCustomLastPrice = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #f88f1f;
  text-align: left;
`;

export const AmountInfo = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const MinimumPurchase = styled(Row).attrs({
  gutter: [4.0, 0],
  justify: 'space-between',
})``;

export const MinimumPurchaseLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: right;
`;

export const MinimunAmount = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: right;
`;

export const AvailableQuantity = styled(Col).attrs({ md: 9, xs: 24 })``;

export const AvailableQuantitySpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 4.0,
})`
  width: 100%;
`;
export const AvailableInfo = styled(Row).attrs({
  gutter: [4.0, 0],
  justify: 'space-between',
})``;

export const AvailableAmount = styled.h1`
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
  justify: 'space-between',
})``;

export const AvailablePackage = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: center;
`;

export const AvailablePerLabelPackage = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: center;
`;

export const AvailableLayer = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: center;
`;

export const AvailablePerLabelCart = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: center;
`;

export const AvailableCart = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #8d8d8d;
  text-align: center;
`;

export const OrderActions = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const Frame826 = styled(Col).attrs({ md: 3, xs: 24 })``;

export const ButtonNetwork = styled(Button)`
  padding: 0;
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;

export const Frame825 = styled(Col).attrs({ md: 3, xs: 24 })``;
