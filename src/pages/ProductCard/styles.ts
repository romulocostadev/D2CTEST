import styled from 'styled-components';

import { Layout, Row, Button } from 'antd';

import {
  CalendarOutlined,
  FlagOutlined,
  ExpandOutlined,
  GroupOutlined,
} from '@ant-design/icons';

export const ProductCard = styled(Layout)`
  width: 292px;
  height: 609px;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #ffffff;
  /* box-shadow: 0px 9px 28px rgba(0, 0, 0, 0, 05000000074505806),
    0px 6px 16px rgba(0, 0, 0, 0, 07999999821186066),
    0px 3px 6px rgba(0, 0, 0, 0, 11999999731779099); */
  box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 3px 6px -4px rgba(0, 0, 0, 0.12);
`;
export const ProductCardHeader = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 292px;
  height: 52px;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 16px 16px;
`;
export const CalendarOutlinedIcon = styled(CalendarOutlined)`
  color: #f88f1f;
  font-size: 16px;
`;

export const ProductOfferType = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 136px;
  height: 20px;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
  background-color: #fbae15;
`;
export const ProdutonositioVOL = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  text-align: center;
`;

export const ProductImage = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 10;
  box-sizing: border-box;
  row-gap: 12px;
  justify-content: flex-start;
  align-items: center;
`;
export const PhotoCarouselWide = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 292px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
export const ProductPhoto = styled.img`
  height: 130px;
  width: 292px;
`;

export const ImageCaption = styled.h1`
  font-family: Roboto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #8d8d8d;
  text-align: center;
`;

export const ProductCardFooter = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 106px;
  box-sizing: border-box;
  row-gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 16px 16px 16px;
`;
export const MainInfo = styled(Row).attrs({
  justify: 'space-between',
})`
  display: flex;
  flex-direction: row;
  width: 260px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-end;
`;
export const ProductName = styled.h1`
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #36393a;
  text-align: left;
`;

export const PriceInfo = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
`;
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

export const PriceNew = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
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
  justify: 'space-between',
})`
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 26px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ProductCodes = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
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

export const ProducedBy = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 102px;
  box-sizing: border-box;
  row-gap: 4px;
  justify-content: flex-start;
  align-items: flex-end;
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

export const ProductCardExpanded = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 321px;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ProductInfo = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 164px;
  box-sizing: border-box;
  row-gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 16px;
  padding-bottom: 8px;
  padding-right: 16px;
`;
export const ProductNote = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 9;
  box-sizing: border-box;
  row-gap: 2px;
  justify-content: flex-start;
  align-items: flex-start;
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

export const ProductDetails = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 7;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: center;
  align-items: flex-start;
`;
export const ProductDetailLeft = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 5;
  box-sizing: border-box;
  row-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const ProductQuality = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 3;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const QualityIcon = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 18px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const FlagOutlinedIcon = styled(FlagOutlined)`
  color: #f88f1f;
  font-size: 16px;
`;

export const QualityInfo = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 8;
  box-sizing: border-box;
  row-gap: 2px;
  justify-content: center;
  align-items: flex-start;
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

export const ProductSize = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 3;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const SizeIcon = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 18px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const ExpandOutlinedIcon = styled(ExpandOutlined)`
  color: #f88f1f;
  font-size: 16px;
`;

export const SizeInfo = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 2px;
  justify-content: flex-start;
  align-items: flex-start;
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

export const ProductMultiple = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 3;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const MultipleIcon = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 18px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
export const GroupOutlinedIcon = styled(GroupOutlined)`
  color: #f88f1f;
  font-size: 16px;
`;

export const MultipleInfo = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 2px;
  justify-content: flex-start;
  align-items: flex-start;
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

export const ProductDetailRight = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 5;
  box-sizing: border-box;
  row-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const ProductColor = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 3;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const ColorIcon = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 18px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ColorInfo = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 2px;
  justify-content: flex-start;
  align-items: flex-start;
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

export const ProductPackage = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 3;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const PackageIcon = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 18px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const PackageInfo = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 2px;
  justify-content: flex-start;
  align-items: flex-start;
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

export const ProductCardActions = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 292px;
  height: 156px;
  box-sizing: border-box;
  row-gap: 16px;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 16px 16px 16px;
  background-color: #f6f6f6;
`;
export const PriceOptions = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 76px;
  box-sizing: border-box;
  row-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;
export const RadioGroupCustom = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const RadioCustomFirst = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 5px 16px 5px 16px;
  background-color: #f88f1f;
  box-shadow: inset 1px 0px 0px rgba(1, 1, 1, 1),
    inset 0px -1px 0px rgba(1, 1, 1, 1), inset 0px 1px 0px rgba(1, 1, 1, 1);
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

export const RadioCustomCenter = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 5px 16px 5px 16px;
  background-color: #ffffff;
  box-shadow: inset 0px -1px 0px rgba(1, 1, 1, 1),
    inset 0px 1px 0px rgba(1, 1, 1, 1);
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

export const RadioCustomLast = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 5px 16px 5px 16px;
  background-color: #ffffff;
  box-shadow: inset -1px 0px 0px rgba(1, 1, 1, 1),
    inset 0px -1px 0px rgba(1, 1, 1, 1), inset 0px 1px 0px rgba(1, 1, 1, 1);
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
  justify: 'space-between',
})`
  display: flex;
  flex-direction: row;
  width: 260px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;
export const MinimumPurchase = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  column-gap: 4px;
  justify-content: flex-start;
  align-items: center;
`;
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

export const AvailableQuantity = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 4px;
  justify-content: center;
  align-items: flex-end;
`;
export const AvailableInfo = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  column-gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
`;
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

export const AvailablePer = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 4;
  box-sizing: border-box;
  column-gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
`;
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

export const OrderActions = styled(Row).attrs({})`
  display: flex;
  flex-direction: row;
  width: 260px;
  height: 32px;
  box-sizing: border-box;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const Frame826 = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ButtonNetwork = styled(Button)`
  width: 32px;
  height: 32px;
  border-radius: 2px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  height: 32px;
  line-height: 22px;
`;

export const Frame825 = styled.div`
  flex-direction: column;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
