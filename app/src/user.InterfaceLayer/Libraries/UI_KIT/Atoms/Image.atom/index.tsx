import React from "react";

import * as ST from "./styled/styled";
import ImageEnum from "./enum";
import { IImagePropsDefault } from "./mock";
import { ImageType } from "./type";

const Image: React.FC<ImageType> = (props: ImageType) => {
	const {
		children,
		type,
		icon,
		isLoading,
		margin,
		height,
		width,
		background,
		src,
		alt,
		fill,
		onClick,
	} = props;
	if (isLoading) return <>Loading</>;
	switch (type) {
		case ImageEnum.enum_srcImage: {
			return (
				<ST.SrcImageBlock
					margin={margin}
					width={width}
					height={height}
					background={background}
				>
					<ST.SrcImage
						isLoading={isLoading}
						src={src}
						alt={alt}
					/>
				</ST.SrcImageBlock>
			);
		}
		case ImageEnum.enum_backgroundImage: {
			return (
				<ST.BackgroundImage
					margin={margin}
					width={width}
					height={height}
					isLoading={isLoading}
					background={background}
				/>
			);
		}
		case ImageEnum.enum_defaultSvg: {
			return (
				<ST.DefaultSvg
					fill={fill}
					margin={margin}
					width={width}
					height={height}
					onClick={onClick}
					isLoading={isLoading}
				>
					{icon}
				</ST.DefaultSvg>
			);
		}
		case ImageEnum.enum_nodeSvgImage: {
			return (
				<ST.NodeSvgImage
					isLoading={isLoading}
					dangerouslySetInnerHTML={{ __html: children as string }}
				/>
			);
		}
		default: {
			return <ST.Image>Ошибка</ST.Image>;
		}
	}
};

Image.defaultProps = IImagePropsDefault;
export default React.memo(Image);
