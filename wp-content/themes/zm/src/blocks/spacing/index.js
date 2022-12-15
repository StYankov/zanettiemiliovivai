import assign from 'lodash/assign';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

// Enable spacing control on the following blocks
const enableSpacingControlOnBlocks = [
	'core/group',
	'core/archives',
	'core/audio',
	'core/buttons',
	'core/button',
	'core/categories',
	'core/code',
	'core/column',
	'core/columns',
	'core/cover',
	'core/coverImage',
	'core/embed',
	'core/file',
	'core/freeform',
	'core/gallery',
	'core/heading',
	'core/html',
	'core/image',
	'core/latestComments',
	'core/latestPosts',
	'core/list',
	'core/more',
	'core/nextpage',
	'core/paragraph',
	'core/preformatted',
	'core/pullquote',
	'core/quote',
	'core/reusableBlock',
	'core/separator',
	'core/shortcode',
	'core/spacer',
	'core/subhead',
	'core/table',
	'core/textColumns',
	'core/verse',
	'core/media-text',
	'core/video',
	'acf/map',
	'acf/featured-product',
	'acf/separator',
	'acf/catalogue',
	'acf/product-filter',
	'acf/slider-vertical',
	'acf/slider',
	'acf/slider-large',
	'acf/slider-recipe',
	'acf/text-gallery',
	'getwid/image-box',
	'hlwp/tabs',
	'hlwp/slider',
	'acf/location',
];

// Available spacing control options
const spacingControlOptions = [
	{
		label: __('Default'),
		value: '',
	},
	{
		label: __('None'),
		value: 'none',
	},
	{
		label: __('Extra Small'),
		value: 'xsmall',
	},
	{
		label: __('Small'),
		value: 'small',
	},
	{
		label: __('Medium'),
		value: 'medium',
	},
	{
		label: __('Large'),
		value: 'large',
	},
	{
		label: __('Extra Large'),
		value: 'xlarge',
	},
];

/**
 * Add spacing control attribute to block.
 *
 * @param {Object} settings Current block settings.
 * @param {string} name     Name of block.
 *
 * @return {Object} Modified block settings.
 */
const addSpacingControlAttribute = (settings, name) => {
	// Do nothing if it's another block than our defined ones.
	if (!enableSpacingControlOnBlocks.includes(name)) {
		return settings;
	}

	// Use Lodash's assign to gracefully handle if attributes are undefined
	settings.attributes = assign(settings.attributes, {
		paddingTop: {
			type: 'string',
			default: spacingControlOptions[0].value,
		},
		paddingBtm: {
			type: 'string',
			default: spacingControlOptions[0].value,
		},
		marginTop: {
			type: 'string',
			default: spacingControlOptions[0].value,
		},
		marginBtm: {
			type: 'string',
			default: spacingControlOptions[0].value,
		},
	});

	return settings;
};

addFilter(
	'blocks.registerBlockType',
	'extend-block-example/attribute/spacing',
	addSpacingControlAttribute
);

// Filter out spacing css classes to preserve other additional classes
const removeFromClassName = (className) => {
	return (className || '')
		.split(' ')
		.filter((c) => !c.startsWith('has-gsp-'))
		.join(' ')
		.replace(/\s+/g, ' ') // Remove superfluous whitespace
		.trim();
};

/**
 * Create HOC to add spacing control to inspector controls of block.
 */
const withSpacingControl = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		// Do nothing if it's another block than our defined ones.
		if (!enableSpacingControlOnBlocks.includes(props.name)) {
			return <BlockEdit {...props} />;
		}

		const { className, paddingTop, paddingBtm, marginTop, marginBtm } =
			props.attributes;
		const classNameWithoutSpacing = removeFromClassName(
			props.attributes.className
		);

		props.attributes.className =
			`${!!classNameWithoutSpacing ? classNameWithoutSpacing + ' ' : ''
			}` +
			`${!!props.attributes.marginTop
				? 'has-gsp-margin-top-' + props.attributes.marginTop + ' '
				: ''
			}` +
			`${!!props.attributes.marginBtm
				? 'has-gsp-margin-bottom-' +
				props.attributes.marginBtm +
				' '
				: ''
			}` +
			`${!!props.attributes.paddingTop
				? 'has-gsp-padding-top-' + props.attributes.paddingTop + ' '
				: ''
			}` +
			`${!!props.attributes.paddingBtm
				? 'has-gsp-padding-bottom-' +
				props.attributes.paddingBtm +
				' '
				: ''
			}`;

		return (
			<Fragment>
				<BlockEdit {...props} />
				<InspectorControls>
					<PanelBody title={__('Block Spacing')} initialOpen={false}>
						<SelectControl
							label={__('Margin Top')}
							value={marginTop}
							options={spacingControlOptions}
							onChange={(selectedMarginTopOption) => {
								props.setAttributes({
									marginTop: selectedMarginTopOption,
								});
							}}
						/>
						<SelectControl
							label={__('Padding Top')}
							value={paddingTop}
							options={spacingControlOptions}
							onChange={(selectedPaddingTopOption) => {
								props.setAttributes({
									paddingTop: selectedPaddingTopOption,
								});
							}}
						/>
						<SelectControl
							label={__('Margin Bottom')}
							value={marginBtm}
							options={spacingControlOptions}
							onChange={(selectedMarginBtmOption) => {
								props.setAttributes({
									marginBtm: selectedMarginBtmOption,
								});
							}}
						/>
						<SelectControl
							label={__('Padding Bottom')}
							value={paddingBtm}
							options={spacingControlOptions}
							onChange={(selectedPaddingBtmOption) => {
								props.setAttributes({
									paddingBtm: selectedPaddingBtmOption,
								});
							}}
						/>
					</PanelBody>
				</InspectorControls>
			</Fragment>
		);
	};
}, 'withSpacingControl');

addFilter(
	'editor.BlockEdit',
	'extend-block-example/with-spacing-control',
	withSpacingControl
);

/**
 * Add margin style attribute to save element of block.
 *
 * @param {Object} saveElementProps Props of save element.
 * @param {Object} blockType        Block type information.
 * @param {Object} attributes       Attributes of block.
 *
 * @return {Object} Modified props of save element.
 */
const addSpacingExtraProps = (saveElementProps, blockType, attributes) => {
	if (!enableSpacingControlOnBlocks.includes(blockType.name)) {
		return saveElementProps;
	}
	return saveElementProps;
};

addFilter(
	'blocks.getSaveContent.extraProps',
	'extend-block-example/get-save-content/extra-props',
	addSpacingExtraProps
);
