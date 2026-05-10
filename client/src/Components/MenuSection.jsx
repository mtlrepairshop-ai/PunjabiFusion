import React, { useState } from 'react';

import butterChicken from '../assets/img/menu/Butter Chicken.png';
import chickenCurry from '../assets/img/menu/Chicken Curry.png';
import chickenKadai from '../assets/img/menu/Chicken Kadai.png';
import chickenKorma from '../assets/img/menu/Chicken Korma.png';
import chickenSaag from '../assets/img/menu/Chicken Saag.png';
import chickenTikkaMasala from '../assets/img/menu/Chicken Tikka Masala.png';
import chickenVindaloo from '../assets/img/menu/Chicken Vindaloo.png';
import lambCurry from '../assets/img/menu/Lamb Curry.png';
import lambKadai from '../assets/img/menu/Lamb Kadai.png';
import lambTikkaMasala from '../assets/img/menu/Lamb Tikka Masala.png';
import lambSaag from '../assets/img/menu/lamb saag.png';
import lambVindaloo from '../assets/img/menu/Lamb Vindaloo.png';
import pineappleChicken from '../assets/img/menu/pineapple chicken.png';
import shrimpKadai from '../assets/img/menu/Shrimp Kadai.png';
import shrimpTikkaMasala from '../assets/img/menu/Shrimp Tikka Masala.png';


import chickenBiryani from '../assets/img/Biryani/Chicken Biryani.png';
import eggBiryani from '../assets/img/Biryani/Egg Bhurji Biryani.png';
import lambBiryani from '../assets/img/Biryani/Lamb Biryani.png';
import paneerBiryani from '../assets/img/Biryani/Paneer Biryani.png';
import vegBiryani from '../assets/img/Biryani/Veg. Biryani.png';


import gajarHalwa from '../assets/img/deserts/Gajar Halwa.png';
import gulabJamun from '../assets/img/deserts/Gulab Jamun.png';
import kheer from '../assets/img/deserts/Kheer.png';
import mangoKulfi from '../assets/img/deserts/Mango Kulfi.png';
import pistaKulfi from '../assets/img/deserts/Pista Kulfi.png';
import rasMalai from '../assets/img/deserts/Ras Malai.png';
import mangoCustard from '../assets/img/newAdded/mango custard.png';
import plainCustard from '../assets/img/newAdded/plain custard.png';


import chickenTikaPizza from '../assets/img/pizza/Chicken tikka pizza.png';
import margaritaPizza from '../assets/img/pizza/Margarita pizza.png';
import pannerTikkaPizza from '../assets/img/pizza/Paneer tikka pizza.png';
import pepperoniPizza from '../assets/img/pizza/Pepperoni pizza.png';
import vegPizza from '../assets/img/pizza/veg pizza.png';
import bbqChickenPizza from '../assets/img/pizza/bbqChickenPizza.png';


import withoutManner from '../assets/img/wine/without manners.png';
import redBlend from '../assets/img/wine/19 Crimes Red Blend.png';
import domesticBeer from '../assets/img/wine/Domestic Beer.png';
import internationalBeer from '../assets/img/wine/International Beer.png';
import redWine from '../assets/img/wine/Red Wine.png';
import whiteWine from '../assets/img/wine/White Wine.png';
import indiaBeer from '../assets/img/wine/indian beer.png';
import sangriaClassic from '../assets/img/wine/sangria classic.png';
import stellaRose from '../assets/img/wine/stella rose.png';

import alloGobi from '../assets/img/vegitables/Aloo Gobi.png';
import alooMatar from '../assets/img/vegitables/Aloo Matar.png';
import bainganBhartaa from '../assets/img/vegitables/Baingan Bharthaa.png';
import bhindiMasala from '../assets/img/vegitables/Bhindi Masala.png';
import blackChickpeas from '../assets/img/vegitables/Black chickpeas.png';
import channaAlooMakhni from '../assets/img/vegitables/Chana Aloo Makhni.png';
import channaMasala from '../assets/img/vegitables/Chana Masala.png';
import chanaSaag from '../assets/img/vegitables/Chana Saag.png';
import dalTadka from '../assets/img/vegitables/Dal Tadka.png';
import kadaiPaneer from '../assets/img/vegitables/Kadai Paneer.png';
import malaiKofta from '../assets/img/vegitables/Malai Kofta.png';
import matarPaneer from '../assets/img/vegitables/Matar Paneer.png';
import mixedVegKarahi from '../assets/img/vegitables/Mixed Veg Karahi.png';
import mushroomSaag from '../assets/img/vegitables/Mushroom Saag.png';
import navratanKorma from '../assets/img/vegitables/Navratan Korma.png';
import paneerBhurji from '../assets/img/vegitables/Paneer Bhurji.png';
import paneerTikkaMasala from '../assets/img/vegitables/Paneer Tikka Masala.png';
import saagPaneer from '../assets/img/vegitables/Saag Paneer.png';
import shahiPaneer from '../assets/img/vegitables/Shahi Paneer.png';
import spanishDal from '../assets/img/vegitables/Spinach dal.png';
import mixVegCurry from '../assets/img/vegitables/Mix veg curry.png';

import dudhPatti from '../assets/img/drinks/Dudh patti.png';
import fanta from '../assets/img/drinks/Fanta.png';
import sweetTea from '../assets/img/drinks/Sweet Tea Refill.png';
import hotChai from '../assets/img/drinks/Hot Chai.png';
import hotColdCofee from '../assets/img/drinks/Hot_cold coffee.png';
import jeeraLimeSoda from '../assets/img/drinks/Jeera lime soda.png';
import mangoLassi from '../assets/img/drinks/Mango Lassi.png';
import pepsi from '../assets/img/drinks/Pepsi.png';
import punjabiMasalaLassi from '../assets/img/drinks/Punjabi masala Lassi.png';
import punjabiSweetLassi from '../assets/img/drinks/Punjabi sweet lassi.png';
import roseMilk from '../assets/img/drinks/Rose milk.png';
import sodaCan from '../assets/img/drinks/Soda Can.png';
import waterBottle from '../assets/img/drinks/Water Bottle.png';

import alooTikkiChat from '../assets/img/Appetizer/Aloo Tikki Chaat.png';
import chickeChilli from '../assets/img/Appetizer/Chicken Chilli.png';
import chickenSukkaFry from '../assets/img/Appetizer/Chicken Sukka Fry.png';
import chilliPaneer from '../assets/img/Appetizer/Chilli Paneer.png';
import chloeBhature from '../assets/img/Appetizer/Chole Bhature.png';
import gobiManchurian from '../assets/img/Appetizer/Gobi Manchurian.png';
import muttonSukkaFry from '../assets/img/Appetizer/Mutton Sukka Fry.png';
import pakoraCauliFlower from '../assets/img/Appetizer/Pakora - Cauliflower.png';
import pakoraChicken from '../assets/img/Appetizer/Pakora - Chicken.png';
import pakoraFish from '../assets/img/Appetizer/Pakora - Fish.png';
import pakoraMixedVeg from '../assets/img/Appetizer/Pakora - Mixed Veg.png';
import pakoraPaneer from '../assets/img/Appetizer/Pakora - Paneer.png';
import punjabiFusionPlatter from '../assets/img/Appetizer/Punjabi Fusion Platter.png';
import shrimpSukkaFry from '../assets/img/Appetizer/Shrimp Sukka Fry.png';
import vegSamosaChaat from '../assets/img/Appetizer/Veg Samosa Chaat.png';
import vegSamosa from '../assets/img/Appetizer/Veg Samosa.png';
import shrimp65 from '../assets/img/newAdded/shrimp 65.png';
import shrimpManchurian from '../assets/img/newAdded/shrimp manchurian.png';
import chickenManchurian from '../assets/img/newAdded/chicken manchurian.png';
import vegMachurian from '../assets/img/newAdded/veg machurian.png';


import chickenTandoori from '../assets/img/Tandoori/Chicken Tandoori.png';
import haryaliChickenTikka from '../assets/img/Tandoori/Haryali Chicken Tikka.png';
import tikkaChicken from '../assets/img/Tandoori/Tikka - chicken.png';
import tikkaMalai from '../assets/img/Tandoori/Tikka - Malai.png';
import tikkaPaneer from '../assets/img/Tandoori/Tikka - Paneer.png';

import basketOfBread from '../assets/img/Bread/Assorted Basket of Bread.png';
import chilliNaan from '../assets/img/Bread/Chilli Naan.png';
import garlicNaan from '../assets/img/Bread/Garlic Naan.png';
import onionKulcha from '../assets/img/Bread/Onion Kulcha.png';
import peshawriNaanSweet from '../assets/img/Bread/Peshwari Naan Sweet.png';
import plainNaan from '../assets/img/Bread/Plain Naan.png';
import spinachNaan from '../assets/img/Bread/Spinach Naan.png';
import TandooriRoti from '../assets/img/Bread/Tandoori Roti.png';


import fishBiryani from '../assets/img/newAdded/fish biryani.png';
import shrimpBiryani from '../assets/img/newAdded/shrimp biryani.png';
import muttonBiryani from '../assets/img/newAdded/mutton biryani.png';

import goatKorma from '../assets/img/newAdded/goat korma.png';
import goatMakhani from '../assets/img/newAdded/goat makhani.png';


import fishKarahi from '../assets/img/newAdded/fish karahi.png';
import fishKorma from '../assets/img/newAdded/fish korma.png';
import goatKarahi from '../assets/img/newAdded/goat karahi.png';
import fishMakhani from '../assets/img/newAdded/fish makhani.png';
import fishCurry from '../assets/img/newAdded/fish curry.png';


import chickenAchari from '../assets/img/newAdded/chicken achari.png';
import chickeHhuna from '../assets/img/newAdded/chicken bhuna.png';
import chickenGarlic from '../assets/img/newAdded/chicken garlic.png';
import chickenMadras from '../assets/img/newAdded/chicken madras.png';
import chickenDoPayaza from '../assets/img/newAdded/chicken do payaza.png';


import kadhiPakora from '../assets/img/newAdded/kadhi pakora.png';
import paneerBhurjiGravy from '../assets/img/newAdded/paneer bhurji with gravy.png';
import paneerKorma from '../assets/img/newAdded/paneer korma.png';

import chickpeas from '../assets/img/newAdded/chickpeas.png';
import kadhiChawal from '../assets/img/newAdded/kadhi chawal.png';
import kidneyBeansRice from '../assets/img/newAdded/kidney beans rice.png';

import lambBhuna from '../assets/img/newAdded/lamb bhuna.png';
import lambKorma from '../assets/img/newAdded/lamb korma.png';
import roganJosh from '../assets/img/newAdded/rogan josh.png';

import plainRice from '../assets/img/newAdded/plain rice.png';
import lemonRice from '../assets/img/newAdded/lemon rice.png';
import specialPulao from '../assets/img/newAdded/special pulao.png';
import mushroomRice from '../assets/img/newAdded/mushroom rice.png';
import chilliRice from '../assets/img/newAdded/chilli rice.png';
import tamarindRice from '../assets/img/newAdded/tamarind rice.png';



const menuItems = [
  {
    category: 'Fish',
    items: [
      { title: 'Fish Korma', image: fishKorma, ingredients: 'Fish Fillets, Onions, Ginger and garlic paste, Yogurt or coconut milk and a blend of Spices like cumin, coriander, turmeric and garam masala', price: '$17.77' },
      { title: 'Fish Curry', image: fishCurry, ingredients: 'Fish aromatics such as onion, Ginger and garlic', price: '$17.99' },
      { title: 'Fish Karahi', image: fishKarahi, ingredients: 'Fish, Aromatics like onions, ginger and garlic, tomatoes and spices herbs', price: '$17.88' },
      { title: 'Fish Makhani', image: fishMakhani, ingredients: 'Fish fillets, tomatoes (puree or fresh), butter and a blend of aromatic spices like ginger, garlic, garam masala and green chilli.', price: '$18.88' }
    ]
  },
  {
    category: 'Non Veg',
    items: [
      { title: 'Butter Chicken', image: butterChicken, ingredients: 'Tandoor-roasted chicken simmered in a velvety butter and tomato gravy, finished with mild aromatic spices.', price: '$16.99' },
      { title: 'Chicken Tikka Masala', image: chickenTikkaMasala, ingredients: 'Grilled chicken tikka pieces cooked in a creamy, spiced tomato-based masala.', price: '$16.99' },
      { title: 'Chicken Curry', image: chickenCurry, ingredients: 'Traditional north indian chicken curry slow-cocked in a hearty onion-tomato gravy.', price: '$16.99' },
      { title: 'Lamb Curry', image: lambCurry, ingredients: 'Boneless lamb cubes simmered in a traditional onion-tomato curry and garnished with fresh cilantro.', price: '$18.99' },
      { title: 'Chicken Korma', image: chickenKorma, ingredients: '(Contain nuts) Chicken cooked in a rich, creamy cashew gravy with mild spices, herbs, and raisins.', price: '$16.99' },
      { title: 'Lamb Tikka Masala', image: lambTikkaMasala, ingredients: 'Char-grilled marinated lamb served in a creamy tomato-based tikka masala sauce.', price: '$17.99' },
      { title: 'Lamb Saag', image: lambSaag, ingredients: 'Tender lamb simmered in a spinach and spice-infused curry.', price: '$17.99' },
      { title: 'Chicken Kadai', image: chickenKadai, ingredients: 'Chicken stir-fried with bell peppers, onions, garlic and kadai spices for a bold and rustic flavor', price: '$16.99' },
      { title: 'Lamb Kadai', image: lambKadai, ingredients: 'Lamb wok-tossed with onions, tomatoes, and peppers in bold kadai-style spices.', price: '$18.99' },
      { title: 'Chicken Vindaloo', image: chickenVindaloo, ingredients: 'South Indian-style chicken and potato curry with bold spices and a tangy vinegar-kissed sauce.', price: '$16.99' },
      { title: 'Lamb Vindaloo', image: lambVindaloo, ingredients: 'Spicy South indian-style lamb and potato curry in a tangy vinegar-based gravy.', price: '$18.99' },
      { title: 'Pineapple Chicken', image: pineappleChicken, ingredients: 'Pineapple and chicken cooked in a creamy tomato-butter sauce, delicately spiced with tropical sweetness.', price: '$18.99' },
      { title: 'Shrimp Tikka Masala', image: shrimpTikkaMasala, ingredients: 'Grilled marinated shrimp cooked in a rich tomato-cream curry with house spice blend.', price: '$19.99' },
      { title: 'Shrimp Kadai', image: shrimpKadai, ingredients: 'Shrimp sauteed with bell peppers, onions, and tomatoes in a bold kadai-style masala.', price: '$19.99' },
      { title: 'Chicken Saag', image: chickenSaag, ingredients: 'Juicy chicken pieces simmered in a creamy spinach and herb-based curry.', price: '$15.99' },
      { title: 'Chicken Achari', image: chickenAchari, ingredients: 'S/w Chicken Cooked with Indian Spices Tangy Pickles, Ginger, Garlic, Mustard Seed.', price: '$17.90' },
      { title: 'Chicken Bhuna', image: chickeHhuna, ingredients: 'S/w Chicken, Onions, Tomatoes, Blend of Spices Like, Ginger, Garlic, Chilli Powder Turmeric, Lumens and Coriander.', price: '$19.90' },
      { title: 'Chicken Garlic', image: chickenGarlic, ingredients: 'S/w Succolent Chicken, Sautued in a Rich Blend of Roasted Garlic (Rushed pepper and light soy finished with Fresh Herds for a Clean Arometic Flavor.', price: '$18.99' },
      { title: 'Chicken Madras', image: chickenMadras, ingredients: 'S/W Chicken, Onions, Garlic, Ginger and Tomatoes, Chilli Powder, Cumins, Coriander Turmeric and Indian Spices', price: '$18.95' },
      { title: 'Chicken Do Pyaza', image: chickenDoPayaza, ingredients: 'Chicken Onions, Finely Diced Large Cube Shapes, Ginger-Garlic Paste, Red Chilli Powder, Turmeric, Coriander', price: '$16.99' }

    ]
  },
  {
    category: 'Vegetarian',
    items: [
      { title: 'Baingan Bharthaa', image: bainganBhartaa, ingredients: 'Fire-roasted eggplant mashed and blended with onions, tomatoes, ginger, and spices.', price: '$15.99' },
      { title: 'Paneer Tikka Masala', image: paneerTikkaMasala, ingredients: 'Grilled paneer cubes cooked in a creamy tomato-based sauce with aromatic spices. Served with basmati rice.', price: '$15.99' },
      { title: 'Paneer Bhurji', image: paneerBhurji, ingredients: 'Scrambled paneer sautéed with onions, tomatoes, green chilies, and warm Indian spices.', price: '$16.99' },
      { title: 'Chana Masala', image: channaMasala, ingredients: 'Chickpeas slow-cooked in a tomato-onion masala with garlic and warming spices. Vegan & gluten-free', price: '$14.99' },
      { title: 'Saag Paneer', image: saagPaneer, ingredients: 'Paneer cubes slow-cooked in creamy spiced spinach, finished with garlic and mild herbs.', price: '$15.99' },
      { title: 'Navratan Korma', image: navratanKorma, ingredients: 'Nine-vegetable medley cooked in a creamy cashew-korma sauce with cardamom, raisin and nuts, Served with basmati rice', price: '$16.99' },
      { title: 'Aloo Gobi', image: alloGobi, ingredients: 'Potatoes and cauliflower sauteed with bell peppers, onions and tomatoes in house-style dry masala.', price: '$14.99' },
      { title: 'Mushroom Saag', image: mushroomSaag, ingredients: 'Mushrooms simmered in a rich spinach-based gravy with cumin, garlic, and traditional spices.', price: '$15.99' },
      { title: 'Malai Kofta', image: malaiKofta, ingredients: 'Soft paneer and vegetable dumplings in a creamy nut-based groovy with cardamom, raisins, and saffron. (Contains nuts)', price: '$17.99' },
      { title: 'Bhindi Masala', image: bhindiMasala, ingredients: 'Okra stir-fried with onions, tomatoes, bell peppers, and a blend of dry spices.', price: '$16.99' },
      { title: 'Mixed Veg Karahi', image: mixedVegKarahi, ingredients: 'Stir-fried seasonal vegetables cooked in a tangy tomato-onion masala with traditional karahi spices.', price: '$15.99' },
      { title: 'Black chickpeas', image: blackChickpeas, ingredients: 'Kala chana cooked in a thick masala of onions, tomatoes, ginger, and traditional ground spices.', price: '$15.99' },
      { title: 'Mix veg curry', image: mixVegCurry, ingredients: 'Seasonal vegetables cooked in a traditional curry base with house spice blend. Served with basmati rice.', price: '$14.99' },
      { title: 'Shahi Paneer', image: shahiPaneer, ingredients: 'Cottage cheese cubes simmered in a rich cream-based sauce with bell peppers, onions, and house spices.', price: '$15.99' },
      { title: 'Chana Saag', image: chanaSaag, ingredients: 'Chickpeas cooked with mustard greens and spinach in a spiced curry sauce.', price: '$15.99' },
      { title: 'Matar Paneer', image: matarPaneer, ingredients: 'Paneer and green peas simmered in a mildly spiced tomato-onion gravy..', price: '$15.99' },
      { title: 'Kadai Paneer', image: kadaiPaneer, ingredients: 'Wok-tossed paneer cubes with onions, bell peppers, tomatoes, and freshly ground kadai masala.', price: '$14.99' },
      { title: 'Chana Aloo Makhni', image: channaAlooMakhni, ingredients: 'Chickpeas and potatoes simmered in a creamy tomato-based makhni sauce with buttery spices.', price: '$14.99' },
      { title: 'Aloo Matar', image: alooMatar, ingredients: 'Potatoes & peas simmered in a creamy, mildly spiced tomato-based curry.', price: '$14.99' },
      { title: 'Dal Tadka', image: dalTadka, ingredients: 'Yellow lentils tempered with garlic, cumin and chili in a traditional North indian tadka style.', price: '$13.99' },
      { title: 'Spinach dal', image: spanishDal, ingredients: 'Yellow moong dal simmered with chopped spinach and tempered with cumin, galic, and ghee.', price: '$14.99' },
      { title: 'Kadhi Pakora', image: kadhiPakora, ingredients: 'Yogurt, gram flour/besan, water, turmeric, ginger-garlic paste', price: '$15.99' },
      { title: 'Paneer Bhurji (Dry)', image: paneerBhurji, ingredients: 'Paneer, Onions, tomatoes, ginger-garlic paste and spices like cumin seeds, turmeric, red chilli powder and garam masala.', price: '$17.99' },
      { title: 'Paneer Bhurji Masala with Gravy', image: paneerBhurjiGravy, ingredients: 'Paneer, Onions, Tomatoes, ginger-garlic paste and a mix of spices like cumin seeds, turmeric powder red chilli powder and garam masala.', price: '$16.99' },
      { title: 'Paneer Korma', image: paneerKorma, ingredients: 'Paneer, a creamy base (from nuts like cashews, cream or yogurt) aromatic spices.', price: '$16.99' }
    ]
  },
  {
    category: 'Veg. Best Food Deal',
    items: [
      { title: 'Chickpeas/Rice', image: chickpeas, ingredients: 'S/w Chick peas, Tomatoes, Onions, Garlic and Ginger Serve with Boiled Rice with', price: '$8.99' },
      { title: 'Kadhi Chawal', image: kadhiChawal, ingredients: 'A base of yogurt and gram flour for the kadhi and rice for the chawal', price: '$8.99' },
      { title: 'Kidney Beans Rice (Rajmah Rice Chawal)', image: kidneyBeansRice, ingredients: 'kidney beans and cooked rice aromatics like onion and garlic', price: '$8.99' }
    ]
  },
  {
    category: 'Lamb Khajana',
    items: [
      { title: 'Rogan Josh', image: roganJosh, ingredients: 'Dish made with - Lamb a gravy base with Featuring onions. Tomatoes, Ginger, Garlic and Yogurt. It is Seasoned with Blend of Indian Spices and Heros', price: '$19.99' },
      { title: 'Lamb Bhuna', image: lambBhuna, ingredients: 'S/w Lamb, Onions, Tomatoes, Blend Spices Ginger, Garlic, Chilli Powder, Tormeric, Cmins Coriandors, Green Onions and Bay Leafs.', price: '$18.99' },
      { title: 'Lamb Korma', image: lambKorma, ingredients: 'Lamb onions, ginger, garlic and a combination of ground spices like coriander, cumin turmeric and garam masala', price: '$17.99' }
    ]
  },
  {
    category: 'Goat',
    items: [
      { title: 'Goat Karahi', image: goatKarahi, ingredients: 'Goat, Onions, tomatoes and ginger-garlic paste, along with spices like coriander, cumin and green chilli', price: '$17.85' },
      { title: 'Goat Makhani', image: goatMakhani, ingredients: 'Goat Meat, butter, onions, tomatoes, ginger-garlic paste and a mix of spices like garam masala, turmeric and coriander', price: '$18.95' },
      { title: 'Goat Korma', image: goatKorma, ingredients: 'Goat. Onions, ginger-garlic paste, yogurt and a blend of whole and ground spices like cinnamon, cloves, cardamom and coriander.', price: '$18.99' }
    ]
  },
  {
    category: 'Biryani',
    items: [
      { title: 'Egg Bhurji Biryani', image: eggBiryani, ingredients: 'Eggs cooked with basmati rice, onions, bell peppers, herbs and spices.', price: '$14.99' },
      { title: 'Chicken Biryani', image: chickenBiryani, ingredients: 'Basmati rice,cooked with a delicate blend of spices,with chicken & side of raita', price: '$14.99' },
      { title: 'Veg. Biryani', image: vegBiryani, ingredients: 'Basmati rice cooked with a delicate belnd of spices ,with vegetables & side of raita.', price: '$13.99' },
      { title: 'Lamb Biryani', image: lambBiryani, ingredients: 'A classic mughlai dish, juicy lean pieces of lamb cooked with basmati rice and spices.', price: '$17.99' },
      { title: 'Paneer Biryani', image: paneerBiryani, ingredients: 'Cubes of paneer (indian cheese) cooked with basmati rice, onions, bell peppers, herbs and spices.', price: '$14.99' },
      { title: 'Shrimp Biryani', image: shrimpBiryani, ingredients: 'Shrimp cooked with basmati rice, shrimp, onions, tomatoes and a blend of spices.', price: '$15.99' },
      { title: 'Fish Biryani', image: fishBiryani, ingredients: 'Fish, Ginger-garlic paste and a blend of spices', price: '$17.99' },
      { title: 'Goat/Mutton Biryani', image: muttonBiryani, ingredients: 'Goat Meat cooked with basmati rice, ginger-garlic paste and a variety of spices', price: '$16.99' }

    ]
  },
  {
    category: 'Tea & Drinks',
    items: [
      { title: 'Water Bottle', image: waterBottle, ingredients: '', price: '$1.29' },
      { title: 'Soda(Can)', image: sodaCan, ingredients: '', price: '$1.59' },
      { title: 'Sweet Tea (Refill)', image: sweetTea, ingredients: '', price: '$2.99' },
      { title: 'Pepsi', image: pepsi, ingredients: '', price: '$2.00' },
      { title: 'Fanta', image: fanta, ingredients: '', price: '$2.99' },
      { title: 'Punjabi masala Lassi', image: punjabiMasalaLassi, ingredients: 'A savory yogurt-based drink infused with roasted cumin, salt, and spices - a true North indian classic', price: '$3.99' },
      { title: 'Punjabi sweet lassi', image: punjabiSweetLassi, ingredients: 'A creamy, sweetened yogurt smoothie topped with a touch of cardamom', price: '$3.99' },
      { title: 'Hot Chai', image: hotChai, ingredients: 'Steaming spiced indian tea brewed with milk and sugar.', price: '$2.99' },
      { title: 'Hot/cold coffee', image: hotColdCofee, ingredients: 'Choose between chilled iced cofee or hot desi-style below.', price: '$3.99' },
      { title: 'Rose milk', image: roseMilk, ingredients: 'Refreshing cold milk flavored with rose syrup - soothing and fragrant.', price: '$3.99' },
      { title: 'Dudh patti', image: dudhPatti, ingredients: 'Karachi-style rich milk tea brewed without water - bold and comforting', price: '$3.99' },
      { title: 'Mango lassi', image: mangoLassi, ingredients: 'A rich and fruity blend of mango pulp, yogurt, and sugar - chlled and satisfying', price: '$4.99' },
      { title: 'Jeera lime soda', image: jeeraLimeSoda, ingredients: 'Zesty lime soda with tasted cumin (jeera) - a tangy, fizzy digestive favorite', price: '$3.99' }
    ]
  },
  {
    category: 'Alcohol & Drinks',
    items: [
      { title: 'Red Wine', image: redWine, ingredients: '', price: '$8.99' },
      { title: 'White Wine', image: whiteWine, ingredients: '', price: '$8.99' },
      { title: 'Domestic Beer', image: domesticBeer, ingredients: '', price: '$4.99' },
      { title: 'International Beer', image: internationalBeer, ingredients: '', price: '$5.99' },
      { title: '19 Crimes Red Blend', image: redBlend, ingredients: '13.5% alcohol', price: '$33.99' },
      { title: 'XXL 16 Without Manners', image: withoutManner, ingredients: '16% alcohol', price: '$33.99' },
      { title: 'Stella rosa golden semi', image: stellaRose, ingredients: 'sweet white 5%', price: '$20.99' },
      { title: 'Red wine sangria 6%', image: redWine, ingredients: '1.5 Ltr', price: '$36.99' },
      { title: 'Sangria classic', image: sangriaClassic, ingredients: 'red 6%', price: '$14.99' },
      { title: 'All indian beer small', image: indiaBeer, ingredients: '', price: '$6.99' },
      { title: 'All indian beer Large', image: indiaBeer, ingredients: '', price: '$8.99' },
    ]
  },
  {
    category: 'Deserts',
    items: [
      { title: 'Mango Kulfi', image: mangoKulfi, ingredients: '', price: '$4.99' },
      { title: 'Pista Kulfi', image: pistaKulfi, ingredients: '', price: '$4.99' },
      { title: 'Mango Custard', image: mangoCustard, ingredients: 'Mango puree or chunks, milk or cream, sugar and a thickening agent like custard powder or cornstarch.', price: '$5.99' },
      { title: 'Kheer', image: kheer, ingredients: 'Kheer a base of rice, milk and sugar with key flavorings like cardamom, saffron and nuts.', price: '$6.49' },
      { title: 'Ras Malai', image: rasMalai, ingredients: 'milk whole milk, heavy cream, or condensed milk enriched milk, sugar, cardamom powder and saffron.', price: '$6.20' },
      { title: 'Gajar Halwa', image: gajarHalwa, ingredients: 'Carrots, milk and sugar, cooked together and finished with ghee, cardamom powder and nuts like almonds and pistachios.', price: '$6.49' },
      { title: 'Gulab Jamun', image: gulabJamun, ingredients: 'milk powder, all purpose flour, baking powder and ghee for the dough with milk for kneading.', price: '$4.99' },
      { title: 'Plain Custard', image: plainCustard, ingredients: 'Made with milk, sugar and a flavoring like vanilla extract.', price: '$4.99' }
    ]
  }, {
    category: 'Pizza (COMING SOON)',
    items: [
      { title: 'Pepperoni pizza', image: pepperoniPizza, ingredients: 'A generous layer of pepperoni on a rich tomato base with melted mozzarella.', price: '$12.49' },
      { title: 'Margarita pizza', image: margaritaPizza, ingredients: 'Classic tomato sauce, fresh mozzarello, and basil leaves on a crispy crust.', price: '$11.49' },
      { title: 'Chicken tikka pizza', image: chickenTikaPizza, ingredients: 'Marinated chicken tikka, bell peppers, onions, mozzarello, and a creamy tikka sauce base.', price: '$14.49' },
      { title: 'Paneer tikka pizza', image: pannerTikkaPizza, ingredients: 'Sliced paneer, mozzarella, gorgonzola, walnuts and caramelized onions on an olive oil base.', price: '$13.99' },
      { title: 'Veggie Supreme', image: vegPizza, ingredients: 'Mushrooms, red onions, green peppers, black olives, and sweet corn over tomato sauce.', price: '$12.99' },
      { title: 'Carolina BBQ chicken pizza', image: bbqChickenPizza, ingredients: 'Fresh pineapple, prasciutto and mazzarella and an olive oil base and topped with fresh cilantro.', price: '$13.49' }
    ]
  }, {
    category: 'Appetizer',
    items: [
      { title: 'Punjabi Fusion Platter', image: punjabiFusionPlatter, price: '$15.99', ingredients: 'A hearty sampler featuring 2 samosas, 2 tikki, crisp pakoras, and golden fries – a perfect sharing plate.' },
      { title: 'Pakora - Mixed Veg', image: pakoraMixedVeg, price: '$7.99', ingredients: 'Deep fried fritters coated in seasoned chickpea batter.' },
      { title: 'Pakora - Fish', image: pakoraFish, price: '$13.99', ingredients: 'Deep fried fritters coated in seasoned chickpea batter.' },
      { title: 'Pakora - Paneer', image: pakoraPaneer, price: '$12.99', ingredients: 'Deep fried fritters coated in seasoned chickpea batter.' },
      { title: 'Pakora - Chicken', image: pakoraChicken, price: '$12.99', ingredients: 'Deep fried fritters coated in seasoned chickpea batter.' },
      { title: 'Pakora - Cauliflower', image: pakoraCauliFlower, price: '$8.99', ingredients: 'Deep fried fritters coated in seasoned chickpea batter.' },
      { title: 'Veg Samosa', image: vegSamosa, price: '$4.99', ingredients: 'Flaky pastry filled with seasoned potatoes & peas & served with green chutney & tamarind sauce.' },
      { title: 'Veg Samosa Chaat', image: vegSamosaChaat, price: '$9.99', ingredients: 'Crushed samosas topped with chickpeas, yogurt, tamarind chutney, and fresh herbs – a flavorful street food favorite.' },
      { title: 'Chilli Paneer', image: chilliPaneer, price: '$13.99', ingredients: 'Golden-fried paneer cubes tossed with bell peppers in a zesty blend of soy, vinegar, and chili sauces.' },
      { title: 'Chicken Chilli', image: chickeChilli, price: '$13.99', ingredients: 'Crispy chicken and stir-fried peppers in a tangy-spicy Indo-Chinese sauce.' },
      { title: 'Aloo Tikki Chaat', image: alooTikkiChat, price: '$9.99', ingredients: 'Spiced potato patties layered with chutneys, yogurt, and crunchy toppings – sweet, tangy, and spicy in one bite.' },
      { title: 'Gobi Manchurian', image: gobiManchurian, price: '$13.99', ingredients: 'Crisp cauliflower florets coated in a bold Manchurian sauce. (No rice served)' },
      { title: 'Mutton Sukka Fry', image: muttonSukkaFry, price: '$18.99', ingredients: 'Tender mutton sautéed with onions, garlic, aromatic spices, and coconut flakes for a rustic South Indian flavor.' },
      { title: 'Shrimp Sukka Fry', image: shrimpSukkaFry, price: '$19.99', ingredients: 'Juicy shrimp cooked in a fiery masala with garlic, ginger, coconut, and spices – bold and satisfying.' },
      { title: 'Chicken Sukka Fry', image: chickenSukkaFry, price: '$16.99', ingredients: 'Boneless chicken chunks stir-fried with spices, coconut, and caramelized onions in traditional coastal style.' },
      { title: 'Chole Bhature', image: chloeBhature, price: '$14.99', ingredients: 'Spicy Spiced chickpea curry served with puffed deep-fried bhature bread, onions, and pickles.' },
      { title: 'Shrimp 65', image: shrimp65, ingredients: 'Crispy golden fried shrimp tossed in a spicy infused with curry leaves, green chillies and aromatic spices.', price: '$15.99' },
      { title: 'Shrimp Manchurian', image: shrimpManchurian, ingredients: 'Crispy wok-fried shrimp tossed in a rich Manchurian sauce, blended with ginger, garlic, peppers and spring onions', price: '$16.99' },
      { title: 'Chicken Manchurian', image: chickenManchurian, ingredients: 'S/w Boneless Chicken Marinade with Cornstarch, Floor, Egg, Soy Sauce, Ginger, Garlic Paste, Chilli, Tomato Ketchup with Indian Spices and Herb.', price: '$17.99' },
      { title: 'Veg. Manchurian', image: vegMachurian, ingredients: 'S/w Finely Chopped Veg. Cabbage, Carrots Onions, Flour, Cornstarch, Ginger, Garlic with Spices and Herb.', price: '$17.99' }

    ]
  },
  {
    category: 'Tandoori',
    items: [
      { title: 'Chicken Tandoori', image: chickenTandoori, price: '$9.99/$18.99', ingredients: 'Roasted chicken marinated in yogurt and spices' },
      { title: 'Tikka - Paneer', image: tikkaPaneer, price: '$15.99', ingredients: 'Marinated, spiced meat or paneer, skewered and grilled, typically in a tandoor' },
      { title: 'Tikka - Malai', image: tikkaMalai, price: '$16.99', ingredients: 'Marinated, spiced meat or paneer, skewered and grilled, typically in a tandoor' },
      { title: 'Tikka - Chicken', image: tikkaChicken, price: '$16.99', ingredients: 'Marinated, spiced meat or paneer, skewered and grilled, typically in a tandoor' },
      { title: 'Haryali Chicken Tikka', image: haryaliChickenTikka, price: '$16.99', ingredients: 'Chicken is flavoured with fresh green herbs - mint and coriander leaves along with spices' }
    ]
  },
  {
    category: 'Bread',
    items: [
      { title: 'Plain Naan', image: plainNaan, price: '$2.99', ingredients: '' },
      { title: 'Chilli Naan', image: chilliNaan, price: '$4.49', ingredients: '' },
      { title: 'Tandoori Roti', image: TandooriRoti, price: '$2.49', ingredients: '' },
      { title: 'Spinach Naan', image: spinachNaan, price: '$4.99', ingredients: '' },
      { title: 'Assorted Basket of Bread', image: basketOfBread, price: '$8.99', ingredients: '' },
      { title: 'Peshwari Naan Sweet', image: peshawriNaanSweet, price: '$6.49', ingredients: '' },
      { title: 'Garlic Naan', image: garlicNaan, price: '$3.99', ingredients: '' },
      { title: 'Onion Kulcha', image: onionKulcha, price: '$4.99', ingredients: '' }
    ]
  },
  {
    category: 'Rice Section',
    items: [
      { title: 'Plain Rice', image: plainRice, ingredients: '(Boiled Rice)', price: 'Complimentary' },
      { title: 'Lemon Rice', image: lemonRice, ingredients: 'Cooked Rice, Mustard Oil Base with Turmeric, Green Peas, Lemon Pepper', price: '$2.99' },
      { title: 'Punjabi Fusion Special Pulao Rice', image: specialPulao, ingredients: 'Serve with Cooked Rice, Resin, Cashew Cheese, Green Peas.', price: '$4.99' },
      { title: 'Mushroom Rice', image: mushroomRice, ingredients: 'Serve with Cooked Rice, Mushroom, Green Peas, Carrots, Cauliflower', price: '$3.99' },
      { title: 'Chilli Rice', image: chilliRice, ingredients: 'Serve with Cooked Rice, Chilli Peppers, Garlic, Onions', price: '$2.99' },
      { title: 'Tamarind Rice', image: tamarindRice, ingredients: 'S/W Cooked Rice, Tamarind Extract, Spices Mustard Seed, Lentils and Peanut', price: '$2.99' }
    ]
  },
];

const MenuSection = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('Non Veg');

  const currentMenu = menuItems.find(menu => menu.category === activeTab);


  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Menu</h2>
        <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
      </div>

      <div className="container">
        <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          {menuItems.map(menu => (
            <li className="nav-item" key={menu.category}>
              <button
                className={`nav-link ${activeTab === menu.category ? 'active show' : ''}`}
                onClick={() => setActiveTab(menu.category)}
              >
                <h4>{menu.category}</h4>
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          <div className="tab-pane fade active show">
            <div className="tab-header text-center">
              <p>Menu</p>
              <h3>{activeTab}</h3>
            </div>
            <div className="row gy-5">
              {currentMenu.items.map((item, idx) => (
                <div className="col-lg-4 menu-item" key={idx}>
                  <img src={item.image} className="menu-img img-fluid" alt={item.title} />
                  <h4>{item.title}</h4>
                  <p className="ingredients two-lines">{item.ingredients}</p>
                  <p className="price">{item.price}</p>
                  {activeTab === 'Pizza (COMING SOON)' ? (
                    <button className="btn btn-secondary" disabled>
                      Coming Soon
                    </button>
                  ) : item.title === 'Plain Rice' ? (
                    <button className="btn btn-success" disabled>
                      Complimentary
                    </button>
                  ) : (
                    <button className="btn btn-secondary" onClick={() => onAddToCart({
                      title: item.title,
                      price: item.price,
                      ingredients: item.ingredients
                    })}>
                      Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;


export { menuItems };
