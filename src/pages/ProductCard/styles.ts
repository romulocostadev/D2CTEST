import styled from 'styled-components'

import {Layout} from 'antd' 
import {Row} from 'antd' 
import {Col} from 'antd' 
import {Button} from 'antd' 

export const ProductCard = styled(Layout)`
    min-width:100vw;
    min-height:100vh;
    background-color:#FFFFFF;
    opacity: 0;
    box-shadow:0px 3px 6px rgba(0, 0, 0, 0.11999999731779099) ;
    box-shadow:0px 6px 16px rgba(0, 0, 0, 0.07999999821186066) ;
    box-shadow:0px 9px 28px rgba(0, 0, 0, 0.05000000074505806) ;
    border-radius:8px;
`;
export const ProductCardHeader = styled(Row).attrs({
justify: 'space-between',
})`
width: 292px;
    padding: 16.0px 16.0px 16.0px 16.0px
`;
export const ProductOfferType = styled(Row).attrs({
})`
width: 136px;
    padding: 4.0px 8.0px 4.0px 8.0px
    background-color:#FBAE15;
    opacity: 0;
    border-radius:4px;
`;
export const Produtonositio(VOL) = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:12px;
    line-height:12px;
    color:#FFFFFF;
    text-align:center;
`;

export const ProductImage = styled.div`
display:flex;
height: 130px;
width: 292px;
flex-direction: column;
row-gap: 12.0px;
align-items:center;
`;
export const PhotoCarouselWide = styled(Row).attrs({
})`
width: 292px;
    background-color:#FFFFFF;
    opacity: 0;
`;
export const ProductPhoto = styled.img`
    height: 130px;
    width: 292px;
`;
export const ImageCaption = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const ProductCardFooter = styled.div`
display:flex;
height: 106px;
width: 292px;
flex-direction: column;
row-gap: 8.0px;
    padding: 16.0px 16.0px 16.0px 16.0px
`;
export const MainInfo = styled(Row).attrs({
justify: 'space-between',
})`
width: 260px;
`;
export const ProductName = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:16px;
    line-height:16px;
    color:#36393A;
    text-align:left;
`;

export const PriceInfo = styled.div`
display:flex;
height: 40px;
width: 67px;
flex-direction: column;
align-items:center;
`;
export const PriceInfoLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const PriceOld = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#F88F1F;
    text-align:center;
`;

export const PriceNew = styled(Row).attrs({
})`
`;
export const Currency = styled.h1`
    font-family:Roboto;
    font-weight:700;
    font-size:10px;
    line-height:10px;
    color:#005CA8;
    text-align:center;
`;

export const Price = styled.h1`
    font-family:Roboto;
    font-weight:700;
    font-size:20px;
    line-height:20px;
    color:#005CA8;
    text-align:center;
`;

export const Unit = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#8D8D8D;
    text-align:center;
`;

export const SecondaryInfo = styled(Row).attrs({
})`
width: 260px;
`;
export const ProductCodes = styled.div`
display:flex;
height: 24px;
width: 95px;
flex-direction: column;
row-gap: 4.0px;
`;
export const ProductCode = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const BarCode = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const ProducedBy = styled.div`
display:flex;
height: 26px;
width: 102px;
flex-direction: column;
row-gap: 4.0px;
align-items:flex-end;
`;
export const ProducedByLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:10px;
    line-height:10px;
    color:#8D8D8D;
    text-align:center;
`;

export const ProducedByValue = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const ProductCardExpanded = styled.div`
display:flex;
height: 321px;
width: 292px;
flex-direction: column;
`;
export const ProductInfo = styled.div`
display:flex;
height: 164px;
width: 292px;
flex-direction: column;
row-gap: 16.0px;
    padding-left:16.0px;
    padding-bottom:8.0px;
    padding-right:16.0px;
`;
export const ProductNote = styled.div`
display:flex;
height: 28px;
width: 260px;
flex-direction: column;
row-gap: 2.0px;
`;
export const ProductNoteLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const ProductNoteValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductDetails = styled(Row).attrs({
justify: 'space-between',
})`
width: 260px;
`;
export const ProductDetailLeft = styled.div`
display:flex;
height: 112px;
width: 126px;
flex-direction: column;
row-gap: 8.0px;
align-items:center;
`;
export const ProductQuality = styled(Row).attrs({
justify: 'space-between',
})`
width: 126px;
`;
export const QualityIcon = styled(Row).attrs({
})`
width: 18px;
    border-radius:4px;
`;
export const QualityInfo = styled.div`
display:flex;
height: 32px;
width: 100px;
flex-direction: column;
row-gap: 2.0px;
justify-content:center;
`;
export const QualityInfoLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const QualityInfoValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductSize = styled(Row).attrs({
justify: 'space-between',
})`
width: 126px;
`;
export const SizeIcon = styled(Row).attrs({
})`
width: 18px;
    border-radius:4px;
`;
export const SizeInfo = styled.div`
display:flex;
height: 28px;
width: 81px;
flex-direction: column;
row-gap: 2.0px;
`;
export const SizeInfoLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const SizeInfoValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductMultiple = styled(Row).attrs({
justify: 'space-between',
})`
width: 126px;
`;
export const MultipleIcon = styled(Row).attrs({
})`
width: 18px;
    border-radius:4px;
`;
export const MultipleInfo = styled.div`
display:flex;
height: 28px;
width: 81px;
flex-direction: column;
row-gap: 2.0px;
`;
export const MultipleLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const MultipleValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductDetailRight = styled.div`
display:flex;
height: 112px;
width: 126px;
flex-direction: column;
row-gap: 8.0px;
align-items:center;
`;
export const ProductColor = styled(Row).attrs({
justify: 'space-between',
})`
width: 126px;
`;
export const ColorIcon = styled(Row).attrs({
})`
width: 18px;
    border-radius:4px;
`;
export const ColorInfo = styled.div`
display:flex;
height: 28px;
width: 49px;
flex-direction: column;
row-gap: 2.0px;
`;
export const ColorInfoLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const ColorInfoValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductPackage = styled(Row).attrs({
justify: 'space-between',
})`
width: 126px;
`;
export const PackageIcon = styled(Row).attrs({
})`
width: 18px;
    border-radius:4px;
`;
export const PackageInfo = styled.div`
display:flex;
height: 28px;
width: 81px;
flex-direction: column;
row-gap: 2.0px;
`;
export const PackageInfoLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:left;
`;

export const PackageInfoValue = styled.h1`
    font-family:Roboto;
    font-weight:500;
    font-size:14px;
    line-height:14px;
    color:#36393A;
    text-align:left;
`;

export const ProductCardActions = styled.div`
display:flex;
height: 156px;
width: 292px;
flex-direction: column;
row-gap: 16.0px;
align-items:center;
    padding: 16.0px 16.0px 16.0px 16.0px
    background-color:#F6F6F6;
    opacity: 0;
`;
export const PriceOptions = styled.div`
display:flex;
height: 76px;
width: 260px;
flex-direction: column;
row-gap: 8.0px;
align-items:center;
`;
export const RadioGroupCustom = styled(Row).attrs({
})`
`;
export const RadioCustomFirst = styled.div`
display:flex;
height: 40px;
width: 87px;
flex-direction: column;
justify-content:center;
align-items:center;
    padding: 5.0px 16.0px 5.0px 16.0px
    background-color:#F88F1F;
    opacity: 0;
    box-shadow:inset 0px 1px 0px rgba(1, 1, 1, 1) ;
    box-shadow:inset 0px -1px 0px rgba(1, 1, 1, 1) ;
    box-shadow:inset 1px 0px 0px rgba(1, 1, 1, 1) ;
`;
export const RadioCustomFirstLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:8px;
    line-height:8px;
    color:#FFFFFF;
    text-align:center;
`;

export const RadioCustomFirstPrice = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:14px;
    line-height:22px;
    color:#FFFFFF;
    text-align:center;
`;

export const RadioCustomCenter = styled.div`
display:flex;
height: 40px;
width: 87px;
flex-direction: column;
justify-content:center;
align-items:center;
    padding: 5.0px 16.0px 5.0px 16.0px
    background-color:#FFFFFF;
    opacity: 0;
    box-shadow:inset 0px 1px 0px rgba(1, 1, 1, 1) ;
    box-shadow:inset 0px -1px 0px rgba(1, 1, 1, 1) ;
`;
export const RadioCustomCenterLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:8px;
    line-height:8px;
    color:#36393A;
    text-align:left;
`;

export const RadioCustomCenterPrice = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:14px;
    line-height:22px;
    color:#F88F1F;
    text-align:left;
`;

export const RadioCustomLast = styled.div`
display:flex;
height: 40px;
width: 87px;
flex-direction: column;
justify-content:center;
align-items:center;
    padding: 5.0px 16.0px 5.0px 16.0px
    background-color:#FFFFFF;
    opacity: 0;
    box-shadow:inset 0px 1px 0px rgba(1, 1, 1, 1) ;
    box-shadow:inset 0px -1px 0px rgba(1, 1, 1, 1) ;
    box-shadow:inset -1px 0px 0px rgba(1, 1, 1, 1) ;
`;
export const RadioCustomLastLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:8px;
    line-height:8px;
    color:#36393A;
    text-align:left;
`;

export const RadioCustomLastPrice = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:14px;
    line-height:22px;
    color:#F88F1F;
    text-align:left;
`;

export const AmountInfo = styled(Row).attrs({
justify: 'space-between',
})`
width: 260px;
`;
export const MinimumPurchase = styled(Row).attrs({
justify: 'space-between',
})`
`;
export const MinimumPurchaseLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:right;
`;

export const MinimunAmount = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#8D8D8D;
    text-align:right;
`;

export const AvailableQuantity = styled.div`
display:flex;
height: 28px;
width: 96px;
flex-direction: column;
row-gap: 4.0px;
justify-content:center;
align-items:flex-end;
`;
export const AvailableInfo = styled(Row).attrs({
justify: 'space-between',
})`
`;
export const AvailableAmount = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:right;
`;

export const AvailableInfoLabel = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#36393A;
    text-align:right;
`;

export const AvailablePer = styled(Row).attrs({
justify: 'space-between',
})`
width: 96px;
`;
export const AvailablePackage = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#8D8D8D;
    text-align:center;
`;

export const AvailablePerLabelPackage = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#8D8D8D;
    text-align:center;
`;

export const AvailableLayer = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#8D8D8D;
    text-align:center;
`;

export const AvailablePerLabelCart = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#8D8D8D;
    text-align:center;
`;

export const AvailableCart = styled.h1`
    font-family:Roboto;
    font-weight:400;
    font-size:12px;
    line-height:12px;
    color:#8D8D8D;
    text-align:center;
`;

export const OrderActions = styled(Row).attrs({
justify: 'space-between',
})`
width: 260px;
`;
export const Frame826 = styled.div`
display:flex;
height: 32px;
width: 32px;
flex-direction: column;
`;
export const ButtonNetwork = styled(Button)`
    padding:0;
    width:32px;
    height:32px;
    border-radius:2px;
    font-family:Roboto;
    font-weight:400;
    font-size:14px;
    line-height:22px;
`;

export const Frame825 = styled.div`
display:flex;
height: 32px;
width: 32px;
flex-direction: column;
`;
export const ButtonNetwork = styled(Button)`
    padding:0;
    width:32px;
    height:32px;
    border-radius:2px;
    font-family:Roboto;
    font-weight:400;
    font-size:14px;
    line-height:22px;
`;

