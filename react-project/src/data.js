const PRODUCTS = [
	{
		id: 1,
		name: 'CHANEL CHANCE EAU TENDRE ',
		price: '$120.00',
		image: require('./images/chanel chance.png'),
		details:
			'An enhanced interpretation of the unexpected floral-fruity fragrance, CHANCE EAU TENDRE Eau de Parfum possesses a tender, delicate presence that sweeps you into a whirlwind of happiness and fantasy—a chance encounter.I saw an opportunity, and I took it. Gabrielle Chanel knew that her real chance was the one of her own creation, a state of mind, a way of being.',
	},
	{
		id: 2,
		name: 'CHANEL CHANCE EAU FRAICHE',
		price: '$115.00',
		image: require('./images/Chanel.png'),
		details:
			'Chance eau Fraiche opens with the citrusy sourness of the lemon and the woodsy quality from the cedar, creating a damp yet clean opening. In some ways the scent is slightly masculine, reminiscent of many citrus based male scents.It carries Chanels great lasting power and doesnt fail in making you feel as if every cent was well spent.',
	},
	{
		id: 3,
		name: 'CHANEL №5 EAU DE PARFUME',
		price: '$140.00',
		image: require('./images/chanel5.png'),
		details:
			'Since its creation in 1921, N°5 has exuded the very essence of femininity. The abstract, mysterious scent—alive with countless subtle facets—radiates an extravagant floral richness. In 1986, Jacques Polge reinterpreted his predecessor Ernest Beauxs composition to create a fuller, more voluminous version of the now and forever fragrance: the Eau de Parfum.',
	},
	{
		id: 4,
		name: 'CHLOE EAU DE PARFUM CHLOE',
		price: '$110.00',
		image: require('./images/chloe.png'),
		details:
			'The new eponymous eau de parfum by Chloe is quite a departure from the once-popular tuberose composition of the same name. A light and fresh yet seductively strong and self-possessed scent, the new Chloe fragrance is in no way its predecessors timid younger sister.',
	},
	{
		id: 5,
		name: 'CHOPARD HAPPY SPIRIT BOUQUET',
		price: '$155.00',
		image: require('./images/chopard.png'),
		details:
			'Happy Spirit Bouquet dAmour by Chopard is a Floral Fruity Gourmand fragrance for women. Happy Spirit Bouquet dAmour was launched in 2013. The fragrance features yuzu, peony, rose, raspberry, cashmeran, musk, vanilla, nougat and sugar.'
	},
	{
		id: 6,
		name: 'MARK JACOBS DAISY EAU DE TOILETTE',
		price: '$80.00',
		image: require('./images/daisy.png'),
		details:
			'Radiant and enchanting, Daisy is a sparkling floral bouquet - spirited and fresh, wrapped in comfort and warmth. At the heart of Daisy is a floral with vintage edge: Violet. Sophisticated with a touch of whimsy, Violet captures the eclectic, vintage flavour of Marc Jacobs feminine, edgy designs.',
	},
	{
		id: 7,
		name: 'MARK JACOBS DAISY DREAM FEMME',
		price: '$95.00',
		image: require('./images/daisylight.png'),
		details:
			'Top notes are Hiacynth, Coconut, Asafoetida, Peach, Mandarin Orange and Bergamot; middle notes are Carnation, Tuberose, Jasmine, Ylang-Ylang, Narcissus, Orange Blossom, Frangipani and Iris; base notes are Vanilla, Sandalwood, Heliotrope, Cedar, Oakmoss and Musk.',
	},
	{
		id: 8,
		name: 'MISS DIOR EAU DE PARFUME',
		price: '$93.00',
		image: require('./images/Dior.png'),
		details:
			'The new fragrance Miss Dior is based on the note of Centifolia rose, with its honey and peppery notes, which reigns over the extremely creamy velvety heart. The new Miss Dior Eau de Parfum comes out in September 2021, announced as the rebirth of this fragrance full of love and hope.',
	},
	{
		id: 9,
		name: 'ESCADA ESCADA',
		price: '$87.22',
		image: require('./images/escada.png'),
		details:
			'Top notes are Hiacynth, Coconut, Asafoetida, Peach, Mandarin Orange and Bergamot; middle notes are Carnation, Tuberose, Jasmine, Ylang-Ylang, Narcissus, Orange Blossom, Frangipani and Iris; base notes are Vanilla, Sandalwood, Heliotrope, Cedar, Oakmoss and Musk.',
	},
	{
		id: 10,
		name: 'MISS DIOR CHERIE',
		price: '$64.00',
		image: require('./images/missdior.png'),
		details:
			'Miss Dior Cherie Eau de Parfum by Dior is a Chypre Fruity fragrance for women. Miss Dior Cherie Eau de Parfum was launched in 2011. The nose behind this fragrance is François Demachy. Top notes are Strawberry and Mandarin Orange; middle notes are Rose and Jasmine; base notes are Patchouli, Sandalwood, Amber, oak moss and Vetiver.',
	},
	{
		id: 11,
		name: 'CALVIN KLEIN ETERNITY SUMMER',
		price: '$69.00',
		image: require('./images/eternity.png'),
		details:
			'Eternity Summer 2020 by Calvin Klein is a Floral fragrance for women. Eternity Summer 2020 was launched in 2020. Top notes are Violet Leaf, Rose and Bergamot; middle notes are Ginger, Coconut Nectar and Jasmine Sambac; base notes are Musk, Guaiac Wood and Vetiver.',
	},
	{
		id: 12,
		name: 'FLORA BY GUCCI EAU DE PARFUME',
		price: '$91.00',
		image: require('./images/gucci.png'),
		details:
			'Flora by Gucci Eau de Parfum is characterized by fresh notes of agrums in the opening, combined with beautiful peony. A heart introduces balanced aromas of rose and osmanthus, while a base is created of patchouli and sandalwood. The more opulent, stronger and more powerful EDP has the same flacon as the original edition.',
	},
	{
		id: 13,
		name: 'SHALIMAR EAU DE PARFUME GUERLAIN',
		price: '$99.00',
		image: require('./images/guerlain.png'),
		details:
			'Shalimar Eau de Parfum by Guerlain is a Amber Spicy fragrance for women. Shalimar Eau de Parfum was launched in 1990. The nose behind this fragrance is Jacques Guerlain. Top notes are Citruses, Bergamot, Lemon, Cedar and Mandarin Orange; middle notes are Iris, Patchouli, Vetiver, Jasmine and Rose; base notes are Vanilla, Incense, Leather, Opoponax, Civet, Sandalwood, Tonka Bean and Musk.',
	},
	{
		id: 14,
		name: 'TRESOR IN LOVE LANCOME',
		price: '$86.00',
		image: require('./images/lancomeinlove.png'),
		details:
			'Lancome is launching a new fragrance, Tresor In Love end of March 2010. The fragrance was created by perfumers Dominique Ropion and Veronique Nyberg. This fragrant composition incorporates fruity-floral notes on a cedar wood base.Tresor In Love opens with accords of nectarine, bergamot, peach and sour pear. A heart blooms with Turkish rose and elegant jasmine, while a base includes cedar.',
	},
	{
		id: 15,
		name: 'COCO NOIR CHANEL',
		price: '$130.00',
		image: require('./images/cocochanel.png'),
		details:
			'Coco Noir by Chanel is a Amber Woody fragrance for women. Coco Noir was launched in 2012. Coco Noir was created by Jacques Polge and Christopher Sheldrake. Top notes are Grapefruit, Bergamot and Orange; middle notes are Rose, Geranium, Jasmine, Narcissus and Peach; base notes are Patchouli, Sandalwood, Olibanum, Tonka Bean, Vanille, White Musk, Cloves and Benzoin.',
	},
	{
		id: 16,
		name: 'LILACS & GOOSEBERRIES SHAY & BLUE ',
		price: '$104.00',
		image: require('./images/violet.png'),
		details:
			'Lilacs & Gooseberries by Shay & Blue London is a Floral fragrance for women and men. Lilacs & Gooseberries was launched in 2021. The nose behind this fragrance is Julie Massé. Top note is Lilac; middle note is Gooseberry; base note is White Amber.',
	},
	{
		id: 17,
		name: 'SI GIORGIO ARMANI',
		price: '$87.00',
		image: require('./images/si.png'),
		details:
			'Si by Giorgio Armani is a Chypre Fruity fragrance for women. Si was launched in 2013. The nose behind this fragrance is Christine Nagel. Top note is Cassis; middle notes are May Rose and Freesia; base notes are Vanilla, Patchouli, Woody Notes and Ambroxan',
	},
	{
		id: 18,
		name: 'VALENTINO DONNA BORN IN ROMA',
		price: '$109.00',
		image: require('./images/valentino.png'),
		details:
			'Valentino Donna Born In Roma by Valentino is a Amber Floral fragrance for women. Valentino Donna Born In Roma was launched in 2019. Top notes are Black Currant, Pink Pepper and Bergamot; middle notes are Jasmine, Jasmine Sambac.',
	},
	{
		id: 19,
		name: 'PINK 2001 VICTORIAS SECRET',
		price: '$60.00',
		image: require('./images/pinki.png'),
		details:
			'Pink 2001 by Victorias Secret is a Floral Green fragrance for women. Pink 2001 was launched in 2001. The nose behind this fragrance is Annie Buzantian. Top notes are Mandarin Orange, Juniper Berries, Artemisia, Bergamot and Violet Leaf.',
	},
	{
		id: 20,
		name: 'LOLA MARC  JACOBS',
		price: '$80.00',
		image: require('./images/lolamarcjacobs.png'),
		details:
			'Lola arrived on the market in August 2009. It was created in cooperation with Calice Becker, Yann Vasnier and consultations with Ann Gottlieb. Lola includes pink pepper, pear, ruby red grapefruit, peony, rose, geranium, vanilla, creamy musk and tonka.',
	},
	{
		id: 21,
		name: 'MIRACLE LANCOME',
		price: '$70.00',
		image: require('./images/miracle2.png'),
		details:
			'This fragrance can be exactly described by two words: energy and revelation. The beauty lies in living, in maintaining interests, in seeing and cherishing every second of life as a miracle, and in the ability to start all over again.',
	},
];

export default PRODUCTS;
