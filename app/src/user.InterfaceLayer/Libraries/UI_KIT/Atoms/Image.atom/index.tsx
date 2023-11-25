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
		height,
		background,
		src,
		alt,
		onClick,
	} = props;
	if (isLoading) return <>Loading</>;
	switch (type) {
		case ImageEnum.enum_srcImage: {
			return (
				<ST.SrcImage
					height={height}
					isLoading={isLoading}
					src={src}
					alt={alt}
				/>
			);
		}
		case ImageEnum.enum_defaultSvg: {
			return (
				<ST.DefaultSvg
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
		case ImageEnum.enum_backgroundImage: {
			return (
				<ST.BackgroundImage
					isLoading={isLoading}
					background={background}
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
