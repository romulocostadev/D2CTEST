import styled from 'styled-components';

import { Layout, Col, Space, Row, Image } from 'antd';

export const ProductCardCart = styled(Row).attrs({
  align: 'middle',
})`
  /* min-width: 100vw; */
  /* min-height: 100vh; */
  height: 110px;
  width: 1360px;
  border: 1px solid black;
  margin: 20px;
`;

export const ProductPhoto = styled(Image)`
  width: 136px;
  margin-left: 10px;
`;

export const Frame812 = styled(Col).attrs({ md: 24, xs: 24 })``;

export const Frame812Spacing = styled(Space).attrs({
  direction: 'vertical',
  size: 10.0,
})`
  width: 100%;
`;
export const ProductCard = styled(Row).attrs({
  gutter: [24.0, 0],
  align: 'middle',
  justify: 'space-between',
})`
  background-color: #ffffff;
  border-radius: 8px;
  width: 100%;
`;

export const ProductCardCol = styled(Col).attrs({ md: 21 })`
  width: 100%;
`;

export const ProductPhotoCol = styled(Col).attrs({ md: 3 })`
  width: 100%;
`;

export const ProductInfo = styled(Row).attrs({
  gutter: [24.0, 0],
  align: 'middle',
  // justify: 'space-between',
})``;

export const InfoLeft = styled(Col).attrs({ md: 10, xs: 24 })``;

export const InfoLeftSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const ProductCardHeader = styled(Row).attrs({
  gutter: [12.0, 0],
  align: 'middle',
  // justify: 'space-between',
})``;

export const MainInfo = styled(Col).attrs({ md: 11, xs: 24 })``;

export const MainInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 4.0,
})`
  width: 100%;
`;
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
  align: 'middle',
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

export const ProductOfferType = styled(Row)`
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

export const ProductDetail = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-around',
})``;

export const ProductQuality = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const QualityIcon = styled(Row)`
  border-radius: 4px;
`;

export const QualityInfo = styled(Col).attrs({ md: 18, xs: 24 })``;

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
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const ProductColor = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const ColorIcon = styled(Row)`
  border-radius: 4px;
`;

export const ColorInfo = styled(Col).attrs({ md: 16, xs: 24 })``;

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
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const ProductPackage = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const PackageIcon = styled(Col).attrs({ md: 4 })`
  border-radius: 4px;
`;

export const PackageInfo = styled(Col).attrs({ md: 20, xs: 24 })``;

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
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const ProductSize = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
  align: 'middle',
})``;

export const SizeIcon = styled(Row)`
  border-radius: 4px;
`;

export const SizeInfo = styled(Col).attrs({ md: 16, xs: 24 })``;

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
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const InfoCenter = styled(Col).attrs({ md: 7, xs: 24 })``;

export const InfoCenterSpacing = styled(Space).attrs({
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

export const Button = styled.h1`
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

export const ProductDeliveryLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #36393a;
  text-align: left;
`;

export const ProductDeliveryValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #36393a;
  text-align: left;
`;

export const ProductDelivery = styled(Row).attrs({
  gutter: [4.0, 0],
  align: 'middle',
})``;

// export const ProductDeliveryLabel = styled.h1`
//   font-family: Roboto;
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 12px;
//   color: #36393a;
//   text-align: left;
// `;

// export const ProductDeliveryValue = styled.h1`
//   font-family: Roboto;
//   font-weight: bold;
//   font-size: 14px;
//   line-height: 14px;
//   color: #36393a;
//   text-align: left;
// `;

export const Frame811 = styled(Col).attrs({ md: 6, xs: 24 })``;

export const Frame811Spacing = styled(Space).attrs({
  direction: 'vertical',
  size: 10.0,
})`
  width: 100%;
`;
export const InfoRight = styled(Row).attrs({
  gutter: [8.0, 0],
  // justify: 'space-between',
})``;

export const QuantityInfo = styled(Col).attrs({ md: 11, xs: 24 })``;

export const QuantityInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const UnitInfo = styled(Row).attrs({
  gutter: [4.0, 0],
  // justify: 'space-between',
})``;

export const UnitInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const UnitInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const TotalInfo = styled(Row).attrs({
  gutter: [4.0, 0],
  // justify: 'space-between',
})``;

export const TotalInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const TotalInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const TotalInfoUnit = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const PriceInfo = styled(Col).attrs({ md: 13, xs: 24 })``;

export const PriceInfoSpacing = styled(Space).attrs({
  direction: 'vertical',
  size: 8.0,
})`
  width: 100%;
`;
export const UnitPrice = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'space-between',
})``;

export const UnitPriceLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const UnitPriceInfo = styled(Row).attrs({ align: 'middle' })``;

export const UnitPriceInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
  color: #f88f1f;
  text-align: center;
`;

export const UnitPriceInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #f88f1f;
  text-align: center;
`;

export const TotalPrice = styled(Row).attrs({
  gutter: [8.0, 0],
  justify: 'end',
})``;

export const TotalPriceLabel = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #36393a;
  text-align: left;
`;

export const TotalPriceInfo = styled(Row).attrs({ align: 'middle' })``;

export const TotalPriceInfoLabel = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
  color: #f88f1f;
  text-align: center;
`;

export const TotalPriceInfoValue = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #f88f1f;
  text-align: center;
`;
