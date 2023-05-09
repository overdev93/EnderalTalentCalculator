
const warriorData = [
  {
    "ID": 0,
    "coordx": 307,
    "coordy": 448,
    "name": "Tempest",
    "description": "This memory unlocks all warrior disciplines for you. It also reduces the weight of heavy armor by 10% and grants you the talent 'Rage' which raises your weapon damage for a short time",
    "tierone": "Tier 1: 7 seconds duration",
    "tiertwo": "Tier 2: 11 seconds duration",
    "tierthree": "Tier 3: 15 seconds duration",
    "type": "Talent",
    "unlocklevel": ""
  },
  {
    "ID": 1,
    "coordx": 195,
    "coordy": 417,
    "name": "Barbarian",
    "description": "The memories of the Vandal improve your handling of two-handed weapons.",
    "tierone": "Tier 1: Two-handed weapons do 12% more damage",
    "tiertwo": "Tier 2: Two-handed weapons do another 10% more damage",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "warrior_0"
  },
  {
    "ID": 2,
    "coordx": 203,
    "coordy": 382,
    "name": "Bloodthirst",
    "description": "Raises your attacking speed with two-handed weapons.",
    "tierone": "Tier 1: 13% faster attacking speed",
    "tiertwo": "Tier 2: Another 10% faster attacking speed",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_0"
  },
  {
    "ID": 3,
    "coordx": 187,
    "coordy": 353,
    "name": "Amputator",
    "description": "Attacks with battleaxes do more additional bleed damage.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_1"
  },
  {
    "ID": 4,
    "coordx": 209,
    "coordy": 343,
    "name": "Deep Wounds",
    "description": "Attacks with greatswords have a chance of 10% to do more critical damage.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_1"
  },
  {
    "ID": 5,
    "coordx": 233,
    "coordy": 333,
    "name": "Brachial",
    "description": "Attacks with warhammers ignore 30% of armor rating.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_1"
  },
  {
    "ID": 6,
    "coordx": 187,
    "coordy": 305,
    "name": "Skaraggian Stance",
    "description": "Increases damage and power of your blows and shield bashes, but also the damage you take yourself. Cannot be stacked with other combat stances.",
    "tierone": "Tier 1: 10% more damage, 50% more power, 40% less damage resistance",
    "tiertwo": "Tier 2: 15% more damage, 100% more power, 30% less damage resistance",
    "tierthree": "Tier 3: 20% more damage, 200% more power, 20% less damage resistance",
    "type": "Talent",
    "unlocklevel": "vandal_2"
  },
  {
    "ID": 7,
    "coordx": 138,
    "coordy": 295,
    "name": "Fury-Driven",
    "description": "Grants you a steady Health regeneration while you are fighting with a two-handed weapon.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_3"
  },
  {
    "ID": 8,
    "coordx": 165,
    "coordy": 281,
    "name": "Hawk Thrust",
    "description": "If you are performing a power attack with a two-handed weapon while sprinting, you deal a critical hit which doubles the damage.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_3"
  },
  {
    "ID": 9,
    "coordx": 187,
    "coordy": 266,
    "name": "Unwavering",
    "description": "A backwards power attack has a chance of 10% to paralyze the target.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_3"
  },
  {
    "ID": 10,
    "coordx": 146,
    "coordy": 255,
    "name": "Warrior Stance",
    "description": "Reduces the Stamina cost of power attacks.",
    "tierone": "Tier 1: 18% cost reduction",
    "tiertwo": "Tier 2: Another 15% cost reduction",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_4"
  },
  {
    "ID": 11,
    "coordx": 138,
    "coordy": 221,
    "name": "Precise Blow",
    "description": "Doubles the recoil of a hit on the enemy when your Stamina is above 50%",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_5"
  },
  {
    "ID": 12,
    "coordx": 119,
    "coordy": 179,
    "name": "Sweeping Blow",
    "description": "If you are performing a sideways power attacks with two-handed weapons, you will hit all targets in front of you.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_6"
  },
  {
    "ID": 13,
    "coordx": 135,
    "coordy": 176,
    "name": "Archaic Might",
    "description": "Discharges your power in a shockwave which staggers enemies and does high damage to them. Staggering enemies are taking additional damage.",
    "tierone": "Tier 1: Deals 55 points of damage, staggering enemies take additional 35 points",
    "tiertwo": "Tier 2: Deals 75 points of damage, staggering enemies take additional 55 points",
    "tierthree": "Tier 3: Deals 100 points of damage, staggering enemies take additional 75 points",
    "type": "Talent",
    "unlocklevel": "vandal_6"
  },
  {
    "ID": 14,
    "coordx": 152,
    "coordy": 183,
    "name": "Merciless",
    "description": "Power attacks while standing still do 20% additional damage and can decapitate enemies.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_6"
  },
  {
    "ID": 15,
    "coordx": 150,
    "coordy": 131,
    "name": "Brute Blow",
    "description": "Blocking enemies now take 40% more damage from your attacks.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "vandal_7"
  },
  {
    "ID": 16,
    "coordx": 307,
    "coordy": 414,
    "name": "Juggernaut",
    "description": "The memories of the 'Keeper' improve the effect of the defensive techniques like blocking or heavy armor, as well as anything that raises your resistance in battle.",
    "tierone": "Tier 1: Heavy armor is 15% more effective",
    "tiertwo": "Tier 2: Heavy armor is another 12% more effective",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "warrior_0"
  },
  {
    "ID": 17,
    "coordx": 307,
    "coordy": 387,
    "name": "Shield Wall",
    "description": "",
    "tierone": "Tier 1: Blocking is 15% more effective",
    "tiertwo": "Tier 2: Blocking is another 12% more effective",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_0"
  },
  {
    "ID": 18,
    "coordx": 288,
    "coordy": 357,
    "name": "Arrow Wall",
    "description": "Arrows you intercept with your shield won't do any damage from now on",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_1"
  },
  {
    "ID": 19,
    "coordx": 308,
    "coordy": 362,
    "name": "Firm State",
    "description": "When you are soley wearing heaby armor the chance that your enemies make you stagger with their attacks is lowered.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_1"
  },
  {
    "ID": 20,
    "coordx": 331,
    "coordy": 361,
    "name": "Splinted Limbs",
    "description": "If you are soley wearing heaby armor the falling damage you take is halved.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_1"
  },
  {
    "ID": 21,
    "coordx": 308,
    "coordy": 329,
    "name": "Tower of Strength",
    "description": "Makes you nearly invulnerable to physical damage for a short time.",
    "tierone": "Tier 1: 75% Damage Reduction, 6 Seconds",
    "tiertwo": "Tier 2: 85% Damage Reduction, 6 Seconds",
    "tierthree": "Tier 3: 95% Damage Reduction, 6 Seconds",
    "type": "Talent",
    "unlocklevel": "keeper_2"
  },
  {
    "ID": 22,
    "coordx": 286,
    "coordy": 279,
    "name": "Shield Runner",
    "description": "You can move faster with a shield raised.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_3"
  },
  {
    "ID": 23,
    "coordx": 309,
    "coordy": 288,
    "name": "Shield Stroke",
    "description": "If you are bashing an enemy with your shield there is a 15% chance to disarm them.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_3"
  },
  {
    "ID": 24,
    "coordx": 336,
    "coordy": 280,
    "name": "Conditioning",
    "description": "Heavy Armor now slows you down less and weights only half as much as before.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_3"
  },
  {
    "ID": 25,
    "coordx": 310,
    "coordy": 233,
    "name": "Reververate Attacks",
    "description": "If you are soley wearing heaby armor there is a small chance that you reflect taken melee damage back to your enemies.",
    "tierone": "Tier 1: 5% chance to reflect melee damage",
    "tiertwo": "Tier 2: Another 5% chance to reflect melee damage",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_4"
  },
  {
    "ID": 26,
    "coordx": 309,
    "coordy": 179,
    "name": "Iron Will",
    "description": "When you are soley wearing heavy armor the magic damage dealt to you is reduced by 15%. Also the chance to make you stagger is lowered if you are wearing solely heavy armor and your Stamina bar is at least half-filled.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_5"
  },
  {
    "ID": 27,
    "coordx": 245,
    "coordy": 158,
    "name": "Exhaujtion",
    "description": "Bashing an enemy with a shield absorbs a part of their Stamina.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_6"
  },
  {
    "ID": 28,
    "coordx": 380,
    "coordy": 159,
    "name": "Fast Reflexes",
    "description": "Time slows down if you are blocking during an enemys power attack.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_6"
  },
  {
    "ID": 29,
    "coordx": 308,
    "coordy": 138,
    "name": "Iron Maiden",
    "description": "For a short period of time you throw all taken melee damage back to your enemies.",
    "tierone": "Tier 1: 5 seconds duration",
    "tiertwo": "Tier 2: 7 seconds duration",
    "tierthree": "Tier 3: 9 seconds duration",
    "type": "Talent",
    "unlocklevel": "keeper_6"
  },
  {
    "ID": 30,
    "coordx": 306,
    "coordy": 102,
    "name": "Steadfast",
    "description": "Blocking and heavy armor is 5% more effective when your Stamina is half-filled. Furthermore the time slows down when your Health falls to less than 15%.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "keeper_7"
  },
  {
    "ID": 31,
    "coordx": 422,
    "coordy": 412,
    "name": "Mercenary",
    "description": "The memories of the Blade Dancer improve your skill in using one or two one-handed weapons.",
    "tierone": "Tier 1: Increases one-handed damage by 8%",
    "tiertwo": "Tier 2: Increases one-handed damage by another 7%",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "warrior_0"
  },
  {
    "ID": 32,
    "coordx": 417,
    "coordy": 378,
    "name": "Relentless Strike",
    "description": "Power attacks with one-handed weapons consume 25% less Stamina.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_0"
  },
  {
    "ID": 33,
    "coordx": 394,
    "coordy": 349,
    "name": "Carnage",
    "description": "Attacks with one-handed axes do additional bleeding damage.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_1"
  },
  {
    "ID": 34,
    "coordx": 417,
    "coordy": 346,
    "name": "Bone Breaker",
    "description": "Attacks with maces ignore 40% of the enemy armor rating.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_1"
  },
  {
    "ID": 35,
    "coordx": 441,
    "coordy": 350,
    "name": "Blade Master",
    "description": "Attacks with one-handed swords have a chance of 10% to do additional, critical damage.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_1"
  },
  {
    "ID": 36,
    "coordx": 416,
    "coordy": 314,
    "name": "Qyranian Stance",
    "description": "Increases attacking and moving speed, but lowers your ability to block. Enemies also land critical hits easier. Cannot be stacked with other stances.",
    "tierone": "Tier 1: 10% increased attacking and moving speed, 45% decreased blocking, 30% higher critical hit chance for enemies",
    "tiertwo": "Tier 2: 15% increased attacking and moving speed, 35% decreased blocking, 20% higher critical hit chance for enemies",
    "tierthree": "Tier 3: 20% increased attacking and moving speed, 20% decreased blocking, 10% higher critical hit chance for enemies",
    "type": "Talent",
    "unlocklevel": "bladedancer_2"
  },
  {
    "ID": 37,
    "coordx": 437,
    "coordy": 270,
    "name": "Vortex Blades",
    "description": "Attacks with two one-handed weapons are 15% faster.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_3"
  },
  {
    "ID": 38,
    "coordx": 447,
    "coordy": 292,
    "name": "Bypass Defenses",
    "description": "Increases your chance to land a critical hit on a blocking enemy by 15%",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_3"
  },
  {
    "ID": 39,
    "coordx": 457,
    "coordy": 313,
    "name": "Critical Hit",
    "description": "",
    "tierone": "Tier 1: When attacking with an one-handed weapon your critical hit damage increases by 20%",
    "tiertwo": "Tier 2: When attacking with an one-handed weapon your critical hit damage increases by another 20%",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_3"
  },
  {
    "ID": 40,
    "coordx": 486,
    "coordy": 267,
    "name": "Sprint Thrust",
    "description": "Allows you to perform a powerful attack while sprinting, which does double critical damage",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_4"
  },
  {
    "ID": 41,
    "coordx": 494,
    "coordy": 229,
    "name": "Calm Hand",
    "description": "If your Stamina is higher than 50%, your critical hit chance is increased by 8%.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_5"
  },
  {
    "ID": 42,
    "coordx": 473,
    "coordy": 207,
    "name": "Double Vortices",
    "description": "",
    "tierone": "Tier 1: Power attacks with 2 one-handed weapons do 12% more damage",
    "tiertwo": "Tier 2: Power attacks with 2 one-handed weapons do another 10% more damage",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_6"
  },
  {
    "ID": 43,
    "coordx": 499,
    "coordy": 195,
    "name": "Blade Dance",
    "description": "If you hit an enemy 5 times within 10 seconds after using this talent, the last hit does additional damage and staggers that enemy.",
    "tierone": "Tier 1: Deals 35 points additional damage",
    "tiertwo": "Tier 2: Deals 55 points additional damage",
    "tierthree": "Tier 3: Deals 75 points additional damage",
    "type": "Talent",
    "unlocklevel": "bladedancer_6"
  },
  {
    "ID": 44,
    "coordx": 523,
    "coordy": 219,
    "name": "Savage Blow",
    "description": "Power attacks with one-handed weapons while standing still do 15% more damage and can decapitate your enemies",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_6"
  },
  {
    "ID": 45,
    "coordx": 496,
    "coordy": 150,
    "name": "Stunning Blow",
    "description": "A backwards power-attack with an one-handed sword has a chance of 25% to paralyze the target.",
    "tierone": "",
    "tiertwo": "",
    "tierthree": "",
    "type": "Passive",
    "unlocklevel": "bladedancer_7"
  }
]