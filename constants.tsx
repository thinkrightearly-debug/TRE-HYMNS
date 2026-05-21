import { Hymn } from './types';

export const CATEGORIES = [
  "All", "Morning", "Evening", "Praise", "Worship", "Passion", "Resurrection", "Communion", "Comfort", "Dedication", "Missionary", "Other"
];

export const HYMNS: Hymn[] = [
  {
    id: 1,
    number: 1,
    title: "Holy, Holy, Holy! Lord God Almighty",
    category: "Morning",
    author: "Reginald Heber",
    tune: "NICAEA",
    verses: [
      "Holy, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy, merciful and mighty!\nGod in three Persons, blessed Trinity!",
      "Holy, holy, holy! All the saints adore Thee,\nCasting down their golden crowns around the glassy sea;\nCherubim and seraphim falling down before Thee,\nWho was, and is, and evermore shalt be.",
      "Holy, holy, holy! though the darkness hide Thee,\nThough the eye of sinful man Thy glory may not see;\nOnly Thou art holy; there is none beside Thee,\nPerfect in power, in love, and purity.",
      "Holy, holy, holy! Lord God Almighty!\nAll Thy works shall praise Thy Name, in earth, and sky, and sea;\nHoly, holy, holy; merciful and mighty!\nGod in three Persons, blessed Trinity!"
    ]
  },
  {
    id: 2,
    number: 2,
    title: "Praise to the Lord, the Almighty",
    category: "Praise",
    author: "Joachim Neander",
    tune: "LOBE DEN HERREN",
    verses: [
      "Praise to the Lord, the Almighty, the King of creation!\nO my soul, praise Him, for He is thy health and salvation!\nAll ye who hear, now to His temple draw near;\nPraise Him in glad adoration.",
      "Praise to the Lord, who doth prosper thy work and defend thee;\nSurely His goodness and mercy here daily attend thee.\nPonder anew what the Almighty can do,\nIf with His love He befriend thee.",
      "Praise to the Lord, who hath fearfully, wondrously made thee;\nHealth, hath vouchsafed and, when heedlessly falling, hath stayed thee.\nWhat need or grief ever hath failed of relief?\nWings of His mercy did shade thee.",
      "Praise to the Lord, who doth visible blessing rain down on thee;\nWho from the heavens with love and with mercy doth crown thee.\nPonder anew what the Almighty can do,\nIf with His love He befriend thee.",
      "Praise to the Lord, O let all that is in me adore Him!\nAll that hath life and breath, come now with praises before Him.\nLet the Amen sound from His people again,\nGladly for aye we adore Him."
    ]
  },
  {
    id: 3,
    number: 3,
    title: "The Old Rugged Cross",
    category: "Passion",
    author: "George Bennard",
    tune: "OLD RUGGED CROSS",
    chorus: "So I'll cherish the old rugged cross,\nTill my trophies at last I lay down;\nI will cling to the old rugged cross,\nAnd exchange it some day for a crown.",
    verses: [
      "On a hill far away stood an old rugged cross,\nThe emblem of suffering and shame;\nAnd I love that old cross where the dearest and best\nFor a world of lost sinners was slain.",
      "Oh, that old rugged cross, so despised by the world,\nHas a wondrous attraction for me;\nFor the dear Lamb of God left His glory above,\nTo bear it to dark Calvary.",
      "In that old rugged cross, stained with blood so divine,\nA wondrous beauty I see,\nFor 'twas on that old cross Jesus suffered and died,\nTo pardon and sanctify me.",
      "To the old rugged cross I will ever be true,\nIts shame and reproach gladly bear;\nThen He'll call me some day to my home far away,\nWhere His glory forever I'll share."
    ]
  },
  {
    id: 4,
    number: 4,
    title: "Great Is Thy Faithfulness",
    category: "Morning",
    author: "Thomas Chisholm",
    tune: "FAITHFULNESS",
    chorus: "Great is Thy faithfulness! Great is Thy faithfulness!\nMorning by morning new mercies I see;\nAll I have needed Thy hand hath provided—\nGreat is Thy faithfulness, Lord, unto me!",
    verses: [
      "Great is Thy faithfulness, O God my Father,\nThere is no shadow of turning with Thee;\nThou changest not, Thy compassions, they fail not;\nAs Thou hast been Thou forever wilt be.",
      "Summer and winter, and springtime and harvest,\nSun, moon and stars in their courses above,\nJoin with all nature in manifold witness\nTo Thy great faithfulness, mercy and love.",
      "Pardon for sin and a peace that endureth,\nThine own dear presence to cheer and to guide;\nStrength for today and bright hope for tomorrow,\nBlessings all mine, with ten thousand beside!"
    ]
  },
  {
    id: 5,
    number: 5,
    title: "Abide With Me",
    category: "Evening",
    author: "Henry Francis Lyte",
    tune: "EVENTIDE",
    verses: [
      "Abide with me; fast falls the eventide;\nThe darkness deepens; Lord, with me abide;\nWhen other helpers fail and comforts flee,\nHelp of the helpless, O abide with me.",
      "Swift to its close ebbs out life's little day;\nEarth's joys grow dim, its glories pass away;\nChange and decay in all around I see;\nO Thou who changest not, abide with me.",
      "I need Thy presence every passing hour;\nWhat but Thy grace can foil the tempter's power?\nWho, like Thyself, my guide and stay can be?\nThrough cloud and sunshine, Lord, abide with me.",
      "I fear no foe, with Thee at hand to bless;\nIlls have no weight, and tears no bitterness.\nWhere is death's sting? Where, grave, thy victory?\nI triumph still, if Thou abide with me.",
      "Hold Thou Thy cross before my closing eyes;\nShine through the gloom and point me to the skies.\nHeaven's morning breaks, and earth's vain shadows flee;\nIn life, in death, O Lord, abide with me."
    ]
  },
  {
    id: 6,
    number: 6,
    title: "Amazing Grace",
    category: "Praise",
    author: "John Newton",
    tune: "NEW BRITAIN",
    verses: [
      "Amazing grace! how sweet the sound,\nThat saved a wretch like me!\nI once was lost, but now am found,\nWas blind, but now I see.",
      "'Twas grace that taught my heart to fear,\nAnd grace my fears relieved;\nHow precious did that grace appear\nThe hour I first believed!",
      "Through many dangers, toils and snares,\nI have already come;\n'Tis grace hath brought me safe thus far,\nAnd grace will lead me home.",
      "The Lord has promised good to me,\nHis Word my hope secures;\nHe will my shield and portion be,\nAs long as life endures.",
      "When we've been there ten thousand years,\nBright shining as the sun,\nWe've no less days to sing God's praise\nThan when we'd first begun."
    ]
  },
  {
    id: 7,
    number: 7,
    title: "It Is Well With My Soul",
    category: "Comfort",
    author: "Horatio Spafford",
    tune: "VILLE DU HAVRE",
    chorus: "It is well, with my soul,\nIt is well, it is well, with my soul.",
    verses: [
      "When peace, like a river, attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, Thou hast taught me to say,\nIt is well, it is well, with my soul.",
      "Though Satan should buffet, though trials should come,\nLet this blest assurance control,\nThat Christ has regarded my helpless estate,\nAnd hath shed His own blood for my soul.",
      "My sin, oh, the bliss of this glorious thought!\nMy sin, not in part but the whole,\nIs nailed to the cross, and I bear it no more,\nPraise the Lord, praise the Lord, O my soul!",
      "And Lord, haste the day when my faith shall be sight,\nThe clouds be rolled back as a scroll;\nThe trump shall resound, and the Lord shall descend,\nEven so, it is well with my soul."
    ]
  },
  {
    id: 8,
    number: 8,
    title: "Blessed Assurance",
    category: "Praise",
    author: "Fanny Crosby",
    tune: "ASSURANCE",
    chorus: "This is my story, this is my song,\nPraising my Savior all the day long.",
    verses: [
      "Blessed assurance, Jesus is mine!\nOh, what a foretaste of glory divine!\nHeir of salvation, purchase of God,\nBorn of His Spirit, washed in His blood.",
      "Perfect submission, perfect delight,\nVisions of rapture now burst on my sight;\nAngels, descending, bring from above\nEchoes of mercy, whispers of love.",
      "Perfect submission, all is at rest,\nI in my Savior am happy and blest,\nWatching and waiting, looking above,\nFilled with His goodness, lost in His love."
    ]
  },
  {
    id: 9,
    number: 9,
    title: "Rock of Ages",
    category: "Passion",
    author: "Augustus Toplady",
    tune: "TOPLADY",
    verses: [
      "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy riven side which flowed,\nBe of sin the double cure,\nCleanse me from its guilt and power.",
      "Not the labors of my hands\nCan fulfill Thy law's demands;\nCould my zeal no respite know,\nCould my tears forever flow,\nAll for sin could not atone;\nThou must save, and Thou alone.",
      "Nothing in my hand I bring,\nSimply to Thy cross I cling;\nNaked, come to Thee for dress;\nHelpless, look to Thee for grace;\nFoul, I to the fountain fly;\nWash me, Savior, or I die.",
      "While I draw this fleeting breath,\nWhen mine eyes shall close in death,\nWhen I soar to worlds unknown,\nSee Thee on Thy judgment throne,\nRock of Ages, cleft for me,\nLet me hide myself in Thee."
    ]
  },
  {
    id: 10,
    number: 10,
    title: "When I Survey the Wondrous Cross",
    category: "Passion",
    author: "Isaac Watts",
    tune: "HAMBURG",
    verses: [
      "When I survey the wondrous cross\nOn which the Prince of glory died,\nMy richest gain I count but loss,\nAnd pour contempt on all my pride.",
      "Forbid it, Lord, that I should boast,\nSave in the death of Christ my God!\nAll the vain things that charm me most,\nI sacrifice them to His blood.",
      "See from His head, His hands, His feet,\nSorrow and love flow mingled down!\nDid e'er such love and sorrow meet,\nOr thorns compose so rich a crown?",
      "Were the whole realm of nature mine,\nThat were a present far too small;\nLove so amazing, so divine,\nDemands my soul, my life, my all."
    ]
  },
  {
    id: 11,
    number: 11,
    title: "O God, Our Help in Ages Past",
    category: "Morning",
    author: "Isaac Watts",
    tune: "ST. ANNE",
    verses: [
      "O God, our help in ages past,\nOur hope for years to come,\nOur shelter from the stormy blast,\nAnd our eternal home.",
      "Under the shadow of Thy throne\nThy saints have dwelt secure;\nSufficient is Thine arm alone,\nAnd our defense is sure.",
      "Before the hills in order stood,\nOr earth received her frame,\nFrom everlasting Thou art God,\nTo endless years the same.",
      "A thousand ages in Thy sight\nAre like an evening gone;\nShort as the watch that ends the night\nBefore the rising sun.",
      "Time, like an ever-rolling stream,\nBears all its sons away;\nThey fly forgotten, as a dream\nDies at the opening day.",
      "O God, our help in ages past,\nOur hope for years to come,\nBe Thou our guard while troubles last,\nAnd our eternal home."
    ]
  },
  {
    id: 12,
    number: 12,
    title: "Lead Us, Heavenly Father, Lead Us",
    category: "Morning",
    author: "James Edmeston",
    tune: "MANNHEIM",
    verses: [
      "Lead us, heavenly Father, lead us\nO'er the world's tempestuous sea;\nGuard us, guide us, keep us, feed us,\nFor we have no help but Thee.",
      "Saviour, breathe forgiveness o'er us;\nAll our weakness Thou dost know;\nThou didst tread this earth before us,\nThou didst feel its keenest woe.",
      "Spirit of our God, descending,\nFill our hearts with heavenly joy;\nLove with every passion blending,\nPleasure that can never cloy."
    ]
  },
  {
    id: 13,
    number: 13,
    title: "Nearer, My God, to Thee",
    category: "Comfort",
    author: "Sarah Flower Adams",
    tune: "BETHANY",
    verses: [
      "Nearer, my God, to Thee, nearer to Thee!\nE'en though it be a cross that raiseth me,\nStill all my song shall be, nearer, my God, to Thee.",
      "Though like the wanderer, the sun gone down,\nDarkness be over me, my rest a stone;\nYet in my dreams I'd be nearer, my God, to Thee.",
      "There let the way appear, steps unto heaven;\nAll that Thou sendest me, in mercy given;\nAngels to beckon me nearer, my God, to Thee.",
      "Then, with my waking thoughts bright with Thy praise,\nOut of my stony griefs Bethel I'll raise;\nSo by my woes to be nearer, my God, to Thee.",
      "Or if on joyful wing cleaving the sky,\nSun, moon, and stars forgot, upwards I fly,\nStill all my song shall be, nearer, my God, to Thee."
    ]
  },
  {
    id: 14,
    number: 14,
    title: "Take My Life and Let It Be",
    category: "Dedication",
    author: "Frances Ridley Havergal",
    tune: "NOTTINGHAM",
    verses: [
      "Take my life and let it be\nConsecrated, Lord, to Thee.\nTake my moments and my days,\nLet them flow in endless praise.",
      "Take my hands and let them move\nAt the impulse of Thy love.\nTake my feet and let them be\nSwift and beautiful for Thee.",
      "Take my voice and let me sing\nAlways, only, for my King.\nTake my lips and let them be\nFilled with messages from Thee.",
      "Take my silver and my gold;\nNot a mite would I withhold.\nTake my intellect and use\nEvery power as Thou shalt choose.",
      "Take my will and make it Thine;\nIt shall be no longer mine.\nTake my heart, it is Thine own;\nIt shall be Thy royal throne.",
      "Take my love; my Lord, I pour\nAt Thy feet its treasure store.\nTake myself, and I will be\nEver, only, all for Thee."
    ]
  },
  {
    id: 15,
    number: 15,
    title: "Guide Me, O Thou Great Redeemer",
    category: "Praise",
    author: "William Williams",
    tune: "CWM RHONDDA",
    verses: [
      "Guide me, O Thou great Redeemer,\nPilgrim through this barren land;\nI am weak, but Thou art mighty;\nHold me with Thy powerful hand.",
      "Open now the crystal fountain,\nWhence the healing stream doth flow;\nLet the fire and cloudy pillar\nLead me all my journey through.",
      "When I tread the verge of Jordan,\nBid my anxious fears subside;\nDeath of death, and hell's destruction,\nLand me safe on Canaan's side."
    ]
  },
  {
    id: 16,
    number: 16,
    title: "How Sweet the Name of Jesus Sounds",
    category: "Morning",
    author: "John Newton",
    tune: "ST. PETER",
    verses: [
      "How sweet the name of Jesus sounds\nIn a believer's ear!\nIt soothes his sorrows, heals his wounds,\nAnd drives away his fear.",
      "It makes the wounded spirit whole,\nAnd calms the troubled breast;\n'Tis manna to the hungry soul,\nAnd to the weary, rest.",
      "Dear Name, the Rock on which I build,\nMy Shield and Hiding-place,\nMy never-failing treasury, filled\nWith boundless stores of grace!",
      "Jesus! my Shepherd, Brother, Friend,\nMy Prophet, Priest, and King,\nMy Lord, my Life, my Way, my End,\nAccept the praise I bring."
    ]
  },
  {
    id: 17,
    number: 17,
    title: "Love Divine, All Loves Excelling",
    category: "Worship",
    author: "Charles Wesley",
    tune: "HYFRYDOL",
    verses: [
      "Love divine, all loves excelling,\nJoy of heaven, to earth come down,\nFix in us Thy humble dwelling,\nAll Thy faithful mercies crown.",
      "Jesus, Thou art all compassion,\nPure, unbounded love Thou art;\nVisit us with Thy salvation,\nEnter every trembling heart.",
      "Come, Almighty to deliver,\nLet us all Thy life receive;\nSuddenly return, and never,\nNevermore Thy temples leave.",
      "Finish then Thy new creation,\nPure and spotless let us be;\nLet us see Thy great salvation,\nPerfectly restored in Thee."
    ]
  },
  {
    id: 18,
    number: 18,
    title: "Stand Up, Stand Up for Jesus",
    category: "Dedication",
    author: "George Duffield",
    tune: "MORNING LIGHT",
    verses: [
      "Stand up, stand up for Jesus,\nYe soldiers of the cross;\nLift high His royal banner,\nIt must not suffer loss.",
      "Stand up, stand up for Jesus,\nThe trumpet call obey;\nForth to the mighty conflict,\nIn this His glorious day.",
      "Stand up, stand up for Jesus,\nStand in His strength alone;\nThe arm of flesh will fail you,\nYou dare not trust your own.",
      "Stand up, stand up for Jesus,\nThe strife will not be long;\nThis day the noise of battle,\nThe next the victor's song."
    ]
  },
  {
    id: 19,
    number: 19,
    title: "All Hail the Power of Jesus' Name",
    category: "Worship",
    author: "Edward Perronet",
    tune: "MILES LANE",
    verses: [
      "All hail the power of Jesus' name!\nLet angels prostrate fall;\nBring forth the royal diadem,\nAnd crown Him Lord of all.",
      "Crown Him, ye martyrs of your God,\nWho from His altar call;\nExtol the Stem of Jesse's Rod,\nAnd crown Him Lord of all.",
      "Ye seed of Israel's chosen race,\nYe ransomed from the fall,\nHail Him who saves you by His grace,\nAnd crown Him Lord of all.",
      "Let every kindred, every tribe\nOn this terrestrial ball,\nTo Him all majesty ascribe,\nAnd crown Him Lord of all."
    ]
  },
  {
    id: 20,
    number: 20,
    title: "Just As I Am",
    category: "Communion",
    author: "Charlotte Elliott",
    tune: "SAFFRON WALDEN",
    verses: [
      "Just as I am, without one plea,\nBut that Thy blood was shed for me,\nAnd that Thou bidst me come to Thee,\nO Lamb of God, I come, I come.",
      "Just as I am, and waiting not\nTo rid my soul of one dark blot,\nTo Thee whose blood can cleanse each spot,\nO Lamb of God, I come, I come.",
      "Just as I am, though tossed about\nWith many a conflict, many a doubt,\nFightings and fears within, without,\nO Lamb of God, I come, I come.",
      "Just as I am, poor, wretched, blind;\nSight, riches, healing of the mind,\nYea, all I need in Thee to find,\nO Lamb of God, I come, I come.",
      "Just as I am, Thou wilt receive,\nWilt welcome, pardon, cleanse, relieve;\nBecause Thy promise I believe,\nO Lamb of God, I come, I come."
    ]
  },
  {
    id: 21,
    number: 21,
    title: "Be Thou My Vision",
    category: "Morning",
    author: "Irish Melody",
    tune: "SLANE",
    verses: [
      "Be Thou my Vision, O Lord of my heart;\nNaught be all else to me, save that Thou art.\nThou my best Thought, by day or by night,\nWaking or sleeping, Thy presence my light.",
      "Be Thou my Wisdom, and Thou my true Word;\nI ever with Thee and Thou with me, Lord;\nThou my great Father, I Thy true son;\nThou in me dwelling, and I with Thee one.",
      "Riches I heed not, nor man's empty praise,\nThou mine Inheritance, now and always:\nThou and Thou only, first in my heart,\nHigh King of Heaven, my Treasure Thou art.",
      "High King of Heaven, my victory won,\nMay I reach Heaven's joys, O bright Heaven's Sun!\nHeart of my own heart, whatever befall,\nStill be my Vision, O Ruler of all."
    ]
  },
  {
    id: 22,
    number: 22,
    title: "Crown Him with Many Crowns",
    category: "Worship",
    author: "Matthew Bridges",
    tune: "DIADEMATA",
    verses: [
      "Crown Him with many crowns, the Lamb upon His throne;\nHark! how the heavenly anthem drowns all music but its own.",
      "Awake, my soul, and sing of Him who died for thee,\nAnd hail Him as thy matchless King through all eternity.",
      "Crown Him the Lord of love: behold His hands and side,\nRich wounds, yet visible above, in beauty glorified.",
      "Crown Him the Lord of life, who triumphed o'er the grave,\nAnd rose victorious in the strife for those He came to save.",
      "Crown Him the Lord of years, the Potentate of time,\nCreator of the rolling spheres, ineffably sublime."
    ]
  },
  {
    id: 23,
    number: 23,
    title: "Jesus, Lover of My Soul",
    category: "Comfort",
    author: "Charles Wesley",
    tune: "ABERYSTWYTH",
    verses: [
      "Jesus, lover of my soul, let me to Thy bosom fly,\nWhile the nearer waters roll, while the tempest still is high.",
      "Hide me, O my Savior, hide, till the storm of life is past;\nSafe into the haven guide; O receive my soul at last.",
      "Other refuge have I none; hangs my helpless soul on Thee;\nLeave, ah! leave me not alone, still support and comfort me.",
      "All my trust on Thee is stayed, all my help from Thee I bring;\nCover my defenseless head with the shadow of Thy wing."
    ]
  },
  {
    id: 24,
    number: 24,
    title: "O Worship the King",
    category: "Worship",
    author: "Robert Grant",
    tune: "HANOVER",
    verses: [
      "O worship the King all-glorious above,\nO gratefully sing His power and His love.",
      "Our Shield and Defender, the Ancient of Days,\nPavilion'd in splendour, and girded with praise.",
      "O tell of His might, O sing of His grace,\nWhose robe is the light, whose canopy space.",
      "His chariots of wrath the deep thunder-clouds form,\nAnd dark is His path on the wings of the storm.",
      "Frail children of dust, and feeble as frail,\nIn Thee do we trust, nor find Thee to fail."
    ]
  },
  {
    id: 25,
    number: 25,
    title: "To God Be the Glory",
    category: "Praise",
    author: "Fanny Crosby",
    tune: "TO GOD BE THE GLORY",
    chorus: "Praise the Lord, praise the Lord, let the earth hear His voice!",
    verses: [
      "To God be the glory, great things He hath done;\nSo loved He the world that He gave us His Son.",
      "Who yielded His life an atonement for sin,\nAnd opened the life gate that all may go in.",
      "O perfect redemption, the purchase of blood,\nTo every believer the promise of God.",
      "The vilest offender who truly believes,\nThat moment from Jesus a pardon receives."
    ]
  },
  {
    id: 26,
    number: 26,
    title: "I Surrender All",
    category: "Dedication",
    author: "Judson Van DeVenter",
    tune: "SURRENDER",
    chorus: "I surrender all, I surrender all, all to Thee, my blessed Savior, I surrender all.",
    verses: [
      "All to Jesus I surrender; all to Him I freely give;\nI will ever love and trust Him, in His presence daily live.",
      "All to Jesus I surrender; humbly at His feet I bow,\nWorldly pleasures all forsaken; take me, Jesus, take me now.",
      "All to Jesus I surrender; make me, Savior, wholly Thine;\nLet me feel the Holy Spirit, truly know that Thou art mine.",
      "All to Jesus I surrender; Lord, I give myself to Thee;\nFill me with Thy love and power; let Thy blessing fall on me."
    ]
  },
  {
    id: 27,
    number: 27,
    title: "A Mighty Fortress Is Our God",
    category: "Praise",
    author: "Martin Luther",
    tune: "EIN FESTE BURG",
    verses: [
      "A mighty fortress is our God, a bulwark never failing;\nOur helper He, amid the flood of mortal ills prevailing.",
      "For still our ancient foe doth seek to work us woe;\nHis craft and power are great, and, armed with cruel hate,\nOn earth is not his equal.",
      "Did we in our own strength confide, our striving would be losing;\nWere not the right Man on our side, the Man of God's own choosing.",
      "Dost ask who that may be? Christ Jesus, it is He;\nLord Sabaoth, His name, from age to age the same,\nAnd He must win the battle."
    ]
  },
  {
    id: 28,
    number: 28,
    title: "Come, Thou Fount of Every Blessing",
    category: "Worship",
    author: "Robert Robinson",
    tune: "NETTLETON",
    verses: [
      "Come, Thou Fount of every blessing, tune my heart to sing Thy grace;\nStreams of mercy, never ceasing, call for songs of loudest praise.",
      "Teach me some melodious sonnet, sung by flaming tongues above.\nPraise the mount! I'm fixed upon it, mount of Thy redeeming love.",
      "Here I raise my Ebenezer; hither by Thy help I'm come;\nAnd I hope, by Thy good pleasure, safely to arrive at home.",
      "Jesus sought me when a stranger, wandering from the fold of God;\nHe, to rescue me from danger, interposed His precious blood."
    ]
  },
  {
    id: 29,
    number: 29,
    title: "How Great Thou Art",
    category: "Praise",
    author: "Carl Boberg",
    tune: "O STORE GUD",
    chorus: "Then sings my soul, my Savior God, to Thee,\nHow great Thou art, how great Thou art!",
    verses: [
      "O Lord my God, when I in awesome wonder,\nConsider all the worlds Thy hands have made.",
      "I see the stars, I hear the rolling thunder,\nThy power throughout the universe displayed.",
      "When through the woods, and forest glades I wander,\nAnd hear the birds sing sweetly in the trees.",
      "When I look down, from lofty mountain grandeur\nAnd hear the brook, and feel the gentle breeze."
    ]
  },
  {
    id: 30,
    number: 30,
    title: "Joyful, Joyful, We Adore Thee",
    category: "Worship",
    author: "Henry van Dyke",
    tune: "HYMN TO JOY",
    verses: [
      "Joyful, joyful, we adore Thee, God of glory, Lord of love;\nHearts unfold like flowers before Thee, opening to the sun above.",
      "Melt the clouds of sin and sadness; drive the dark of doubt away;\nGiver of immortal gladness, fill us with the light of day!",
      "All Thy works with joy surround Thee, earth and heaven reflect Thy rays,\nStars and angels sing around Thee, center of unbroken praise.",
      "Field and forest, vale and mountain, flowery meadow, flashing sea,\nChanting bird and flowing fountain call us to rejoice in Thee."
    ]
  },
  {
    id: 31,
    number: 31,
    title: "O for a Thousand Tongues to Sing",
    category: "Praise",
    author: "Charles Wesley",
    tune: "AZMON",
    verses: [
      "O for a thousand tongues to sing my great Redeemer's praise,\nThe glories of my God and King, the triumphs of His grace!",
      "My gracious Master and my God, assist me to proclaim,\nTo spread through all the earth abroad the honors of Thy name.",
      "Jesus! the name that charms our fears, that bids our sorrows cease;\n'Tis music in the sinner's ears, 'tis life, and health, and peace.",
      "He breaks the power of canceled sin, He sets the prisoner free;\nHis blood can make the foulest clean, His blood availed for me."
    ]
  },
  {
    id: 32,
    number: 32,
    title: "What a Friend We Have in Jesus",
    category: "Comfort",
    author: "Joseph Scriven",
    tune: "CONVERSE",
    verses: [
      "What a friend we have in Jesus, all our sins and griefs to bear!\nWhat a privilege to carry everything to God in prayer!",
      "Oh, what peace we often forfeit, oh, what needless pain we bear,\nAll because we do not carry everything to God in prayer!",
      "Have we trials and temptations? Is there trouble anywhere?\nWe should never be discouraged; take it to the Lord in prayer.",
      "Can we find a friend so faithful, who will all our sorrows share?\nJesus knows our every weakness; take it to the Lord in prayer."
    ]
  },
  {
    id: 33,
    number: 33,
    title: "The Church's One Foundation",
    category: "Worship",
    author: "Samuel Stone",
    tune: "AURELIA",
    verses: [
      "The church's one foundation is Jesus Christ her Lord;\nShe is His new creation by water and the Word.",
      "From heaven He came and sought her to be His holy bride;\nWith His own blood He bought her, and for her life He died.",
      "Elect from every nation, yet one o'er all the earth,\nHer charter of salvation one Lord, one faith, one birth.",
      "One holy name she blesses, partakes one holy food,\nAnd to one hope she presses, with every grace endued."
    ]
  },
  {
    id: 34,
    number: 34,
    title: "All Creatures of Our God and King",
    category: "Praise",
    author: "Francis of Assisi",
    tune: "LASST UNS ERFREUEN",
    verses: [
      "All creatures of our God and King, lift up your voice and with us sing,\nAlleluia! Alleluia!",
      "Thou burning sun with golden beam, thou silver moon with softer gleam,\nO praise Him! O praise Him! Alleluia! Alleluia! Alleluia!",
      "Thou rushing wind that art so strong, ye clouds that sail in heaven along,\nO praise Him! Alleluia!",
      "Thou rising morn, in praise rejoice, ye lights of evening, find a voice!\nO praise Him! O praise Him! Alleluia! Alleluia! Alleluia!"
    ]
  },
  {
    id: 35,
    number: 35,
    title: "Fairest Lord Jesus",
    category: "Worship",
    author: "German Hymn",
    tune: "CRUSADERS' HYMN",
    verses: [
      "Fairest Lord Jesus, Ruler of all nature, O Thou of God and man the Son,\nThee will I cherish, Thee will I honor, Thou, my soul's glory, joy, and crown.",
      "Fair are the meadows, fairer still the woodlands, robed in the blooming garb of spring;\nJesus is fairer, Jesus is purer, who makes the woeful heart to sing.",
      "Fair is the sunshine, fairer still the moonlight, and all the twinkling starry host;\nJesus shines brighter, Jesus shines purer than all the angels heaven can boast."
    ]
  },
  {
    id: 36,
    number: 36,
    title: "I Need Thee Every Hour",
    category: "Comfort",
    author: "Annie Hawks",
    tune: "NEED",
    chorus: "I need Thee, oh, I need Thee; every hour I need Thee;\nOh, bless me now, my Savior, I come to Thee.",
    verses: [
      "I need Thee every hour, most gracious Lord;\nNo tender voice like Thine can peace afford.",
      "I need Thee every hour, stay Thou nearby;\nTemptations lose their power when Thou art nigh.",
      "I need Thee every hour, in joy or pain;\nCome quickly and abide, or life is vain.",
      "I need Thee every hour, teach me Thy will;\nAnd Thy rich promises in me fulfill."
    ]
  },
  {
    id: 37,
    number: 37,
    title: "Softly and Tenderly Jesus Is Calling",
    category: "Communion",
    author: "Will Thompson",
    tune: "THOMPSON",
    chorus: "Come home, come home; ye who are weary, come home;\nEarnestly, tenderly, Jesus is calling, calling, O sinner, come home!",
    verses: [
      "Softly and tenderly Jesus is calling, calling for you and for me;\nSee, on the portals He's waiting and watching, watching for you and for me.",
      "Why should we tarry when Jesus is pleading, pleading for you and for me?\nWhy should we linger and heed not His mercies, mercies for you and for me?",
      "Time is now fleeting, the moments are passing, passing from you and from me;\nShadows are gathering, deathbeds are coming, coming for you and for me.",
      "Oh, for the wonderful love He has promised, promised for you and for me!\nThough we have sinned, He has mercy and pardon, pardon for you and for me."
    ]
  },
  {
    id: 38,
    number: 38,
    title: "Turn Your Eyes Upon Jesus",
    category: "Worship",
    author: "Helen Lemmel",
    tune: "LEMMEL",
    chorus: "Turn your eyes upon Jesus, look full in His wonderful face,\nAnd the things of earth will grow strangely dim, in the light of His glory and grace.",
    verses: [
      "O soul, are you weary and troubled? No light in the darkness you see?\nThere's light for a look at the Savior, and life more abundant and free!",
      "Through death into life everlasting He passed, and we follow Him there;\nOver us sin no more hath dominion for more than conqu'rors we are!",
      "His Word shall not fail you, He promised; believe Him and all will be well;\nThen go to a world that is dying, His perfect salvation to tell!"
    ]
  },
  {
    id: 39,
    number: 39,
    title: "When We All Get to Heaven",
    category: "Praise",
    author: "Eliza Hewitt",
    tune: "HEAVEN",
    chorus: "When we all get to heaven, what a day of rejoicing that will be!\nWhen we all see Jesus, we'll sing and shout the victory!",
    verses: [
      "Sing the wondrous love of Jesus, sing His mercy and His grace;\nIn the mansions bright and blessed He'll prepare for us a place.",
      "While we walk the pilgrim pathway, clouds will overspread the sky;\nBut when traveling days are over, not a shadow, not a sigh.",
      "Let us then be true and faithful, trusting, serving every day;\nJust one glimpse of Him in glory will the toils of life repay.",
      "Onward to the prize before us! Soon His beauty we'll behold;\nSoon the pearly gates will open; we shall walk the streets of gold."
    ]
  },
  {
    id: 40,
    number: 40,
    title: "Victory in Jesus",
    category: "Praise",
    author: "E.M. Bartlett",
    tune: "VICTORY",
    chorus: "O victory in Jesus, my Savior, forever!\nHe sought me and bought me with His redeeming blood.",
    verses: [
      "I heard an old, old story, how a Savior came from glory,\nHow He gave His life on Calvary to save a wretch like me.",
      "I heard about His groaning, of His precious blood's atoning,\nThen I repented of my sins and won the victory.",
      "I heard about His healing, of His cleansing power revealing,\nHow He made the lame to walk again and caused the blind to see.",
      "And then I cried, 'Dear Jesus, come and heal my broken spirit,'\nAnd somehow Jesus came and brought to me the victory."
    ]
  },
  {
    id: 41,
    number: 41,
    title: "The Solid Rock",
    category: "Dedication",
    author: "Edward Mote",
    tune: "SOLID ROCK",
    chorus: "On Christ, the solid Rock, I stand; all other ground is sinking sand,\nAll other ground is sinking sand.",
    verses: [
      "My hope is built on nothing less than Jesus' blood and righteousness;\nI dare not trust the sweetest frame, but wholly lean on Jesus' name.",
      "When darkness veils His lovely face, I rest on His unchanging grace;\nIn every high and stormy gale, my anchor holds within the veil.",
      "His oath, His covenant, His blood, support me in the whelming flood;\nWhen all around my soul gives way, He then is all my hope and stay.",
      "When He shall come with trumpet sound, oh, may I then in Him be found;\nDressed in His righteousness alone, faultless to stand before the throne."
    ]
  },
  {
    id: 42,
    number: 42,
    title: "Tis So Sweet to Trust in Jesus",
    category: "Comfort",
    author: "Louisa Stead",
    tune: "TRUST IN JESUS",
    chorus: "Jesus, Jesus, how I trust Him! How I've proved Him o'er and o'er!\nJesus, Jesus, precious Jesus! O for grace to trust Him more!",
    verses: [
      "Tis so sweet to trust in Jesus, just to take Him at His word;\nJust to rest upon His promise, just to know, 'Thus saith the Lord.'",
      "O how sweet to trust in Jesus, just to trust His cleansing blood;\nJust in simple faith to plunge me neath the healing, cleansing flood!",
      "Yes, 'tis sweet to trust in Jesus, just from sin and self to cease;\nJust from Jesus simply taking life and rest, and joy and peace.",
      "I'm so glad I learned to trust Thee, precious Jesus, Savior, Friend;\nAnd I know that Thou art with me, wilt be with me to the end."
    ]
  },
  {
    id: 43,
    number: 43,
    title: "Leaning on the Everlasting Arms",
    category: "Comfort",
    author: "Elisha Hoffman",
    tune: "SHOWALTER",
    chorus: "Leaning, leaning, safe and secure from all alarms;\nLeaning, leaning, leaning on the everlasting arms.",
    verses: [
      "What a fellowship, what a joy divine, leaning on the everlasting arms;\nWhat a blessedness, what a peace is mine, leaning on the everlasting arms.",
      "O how sweet to walk in this pilgrim way, leaning on the everlasting arms;\nO how bright the path grows from day to day, leaning on the everlasting arms.",
      "What have I to dread, what have I to fear, leaning on the everlasting arms?\nI have blessed peace with my Lord so near, leaning on the everlasting arms."
    ]
  },
  {
    id: 44,
    number: 44,
    title: "He Leadeth Me",
    category: "Morning",
    author: "Joseph Gilmore",
    tune: "HE LEADETH ME",
    chorus: "He leadeth me, He leadeth me, by His own hand He leadeth me;\nHis faithful follower I would be, for by His hand He leadeth me.",
    verses: [
      "He leadeth me: O blessed thought! O words with heavenly comfort fraught!\nWhate'er I do, where'er I be, still 'tis God's hand that leadeth me.",
      "Sometimes mid scenes of deepest gloom, sometimes where Eden's bowers bloom,\nBy waters still, o'er troubled sea, still 'tis His hand that leadeth me.",
      "Lord, I would place my hand in Thine, nor ever murmur nor repine;\nContent, whatever lot I see, since 'tis my God that leadeth me.",
      "And when my task on earth is done, when by Thy grace the victory's won,\nE'en death's cold wave I will not flee, since God through Jordan leadeth me."
    ]
  },
  {
    id: 45,
    number: 45,
    title: "Count Your Blessings",
    category: "Praise",
    author: "Johnson Oatman Jr.",
    tune: "BLESSINGS",
    chorus: "Count your blessings, name them one by one, count your blessings, see what God hath done;\nCount your blessings, name them one by one, and it will surprise you what the Lord hath done.",
    verses: [
      "When upon life's billows you are tempest-tossed, when you are discouraged, thinking all is lost,\nCount your many blessings, name them one by one, and it will surprise you what the Lord hath done.",
      "Are you ever burdened with a load of care? Does the cross seem heavy you are called to bear?\nCount your many blessings, every doubt will fly, and you will keep singing as the days go by.",
      "When you look at others with their lands and gold, think that Christ has promised you His wealth untold;\nCount your many blessings. Money cannot buy your reward in heaven, nor your home on high.",
      "So, amid the conflict whether great or small, do not be disheartened, God is over all;\nCount your many blessings, angels will attend, help and comfort give you to your journey's end."
    ]
  },
  {
    id: 46,
    number: 46,
    title: "I Love to Tell the Story",
    category: "Missionary",
    author: "Katherine Hankey",
    tune: "HANKEY",
    chorus: "I love to tell the story, 'twill be my theme in glory,\nTo tell the old, old story of Jesus and His love.",
    verses: [
      "I love to tell the story of unseen things above,\nOf Jesus and His glory, of Jesus and His love.",
      "I love to tell the story; more wonderful it seems\nThan all the golden fancies of all our golden dreams.",
      "I love to tell the story; 'tis pleasant to repeat\nWhat seems, each time I tell it, more wonderfully sweet.",
      "I love to tell the story; for those who know it best\nSeem hungering and thirsting to hear it like the rest."
    ]
  },
  {
    id: 47,
    number: 47,
    title: "Tell Me the Old, Old Story",
    category: "Worship",
    author: "Katherine Hankey",
    tune: "EVANGEL",
    chorus: "Tell me the old, old story, tell me the old, old story,\nTell me the old, old story, of Jesus and His love.",
    verses: [
      "Tell me the old, old story of unseen things above,\nOf Jesus and His glory, of Jesus and His love.",
      "Tell me the story slowly, that I may take it in,\nThat wonderful redemption, God's remedy for sin.",
      "Tell me the story softly, with earnest tones and grave;\nRemember I'm the sinner whom Jesus came to save.",
      "Tell me the story always, if you would really be,\nIn any time of trouble, a comforter to me."
    ]
  },
  {
    id: 48,
    number: 48,
    title: "Pass Me Not, O Gentle Savior",
    category: "Communion",
    author: "Fanny Crosby",
    tune: "PASS ME NOT",
    chorus: "Savior, Savior, hear my humble cry; while on others Thou art calling, do not pass me by.",
    verses: [
      "Pass me not, O gentle Savior, hear my humble cry;\nWhile on others Thou art calling, do not pass me by.",
      "Let me at a throne of mercy find a sweet relief;\nKneeling there in deep contrition, help my unbelief.",
      "Trusting only in Thy merit, would I seek Thy face;\nHeal my wounded, broken spirit, save me by Thy grace.",
      "Thou the Spring of all my comfort, more than life to me,\nWhom have I on earth beside Thee? Whom in heaven but Thee?"
    ]
  },
  {
    id: 49,
    number: 49,
    title: "Sweet Hour of Prayer",
    category: "Morning",
    author: "William Walford",
    tune: "SWEET HOUR",
    verses: [
      "Sweet hour of prayer! sweet hour of prayer! that calls me from a world of care,\nAnd bids me at my Father's throne make all my wants and wishes known.",
      "In seasons of distress and grief, my soul has often found relief,\nAnd oft escaped the tempter's snare by thy return, sweet hour of prayer!",
      "Sweet hour of prayer! sweet hour of prayer! thy wings shall my petition bear\nTo Him whose truth and faithfulness engage the waiting soul to bless.",
      "And since He bids me seek His face, believe His Word, and trust His grace,\nI'll cast on Him my every care, and wait for thee, sweet hour of prayer!"
    ]
  },
  {
    id: 50,
    number: 50,
    title: "Just a Closer Walk with Thee",
    category: "Dedication",
    author: "Anonymous",
    tune: "CLOSER WALK",
    chorus: "Just a closer walk with Thee, grant it, Jesus, is my plea,\nDaily walking close to Thee, let it be, dear Lord, let it be.",
    verses: [
      "I am weak, but Thou art strong; Jesus, keep me from all wrong;\nI'll be satisfied as long as I walk, let me walk close to Thee.",
      "Through this world of toils and snares, if I falter, Lord, who cares?\nWho with me my burden shares? None but Thee, dear Lord, none but Thee.",
      "When my feeble life is o'er, time for me will be no more;\nGuide me gently, safely o'er to Thy kingdom shore, to Thy shore."
    ]
  },
  {
    id: 51,
    number: 51,
    title: "Because He Lives",
    category: "Resurrection",
    author: "Bill Gaither",
    tune: "RESURRECTION",
    chorus: "Because He lives, I can face tomorrow, because He lives, all fear is gone;\nBecause I know He holds the future, and life is worth the living, just because He lives!",
    verses: [
      "God sent His son, they called Him, Jesus; He came to love, heal and forgive;\nHe lived and died to buy my pardon, an empty grave is there to prove my Savior lives!",
      "How sweet to hold a newborn baby, and feel the pride and joy he gives;\nBut greater still the calm assurance: this child can face uncertain days because He lives!",
      "And then one day, I'll cross the river, I'll fight life's final war with pain;\nAnd then, as death gives way to victory, I'll see the lights of glory and I'll know He reigns!"
    ]
  },
  {
    id: 52,
    number: 52,
    title: "In the Garden",
    category: "Morning",
    author: "C. Austin Miles",
    tune: "GARDEN",
    chorus: "And He walks with me, and He talks with me, and He tells me I am His own;\nAnd the joy we share as we tarry there, none other has ever known.",
    verses: [
      "I come to the garden alone while the dew is still on the roses,\nAnd the voice I hear falling on my ear the Son of God discloses.",
      "He speaks, and the sound of His voice is so sweet the birds hush their singing,\nAnd the melody that He gave to me within my heart is ringing.",
      "I'd stay in the garden with Him though the night around me be falling,\nBut He bids me go; through the voice of woe His voice to me is calling."
    ]
  },
  {
    id: 53,
    number: 53,
    title: "The Love of God",
    category: "Praise",
    author: "Frederick Lehman",
    tune: "LOVE OF GOD",
    verses: [
      "The love of God is greater far than tongue or pen can ever tell;\nIt goes beyond the highest star, and reaches to the lowest hell.",
      "The guilty pair, bowed down with care, God gave His Son to win;\nHis erring child He reconciled, and pardoned from his sin.",
      "Could we with ink the ocean fill, and were the skies of parchment made,\nWere every stalk on earth a quill, and every man a scribe by trade,",
      "To write the love of God above would drain the ocean dry;\nNor could the scroll contain the whole, though stretched from sky to sky."
    ]
  },
  {
    id: 54,
    number: 54,
    title: "At the Cross",
    category: "Passion",
    author: "Isaac Watts",
    tune: "HUDSON",
    chorus: "At the cross, at the cross where I first saw the light, and the burden of my heart rolled away,\nIt was there by faith I received my sight, and now I am happy all the day!",
    verses: [
      "Alas! and did my Savior bleed and did my Sovereign die?\nWould He devote that sacred head for such a worm as I?",
      "Was it for crimes that I have done He groaned upon the tree?\nAmazing pity! grace unknown! and love beyond degree!",
      "Well might the sun in darkness hide and shut his glories in,\nWhen Christ, the mighty Maker, died for man the creature's sin.",
      "But drops of grief can ne'er repay the debt of love I owe;\nHere, Lord, I give myself away, 'tis all that I can do."
    ]
  },
  {
    id: 55,
    number: 55,
    title: "Power in the Blood",
    category: "Praise",
    author: "Lewis Jones",
    tune: "POWER IN THE BLOOD",
    chorus: "There is power, power, wonder-working power in the blood of the Lamb;\nThere is power, power, wonder-working power in the precious blood of the Lamb.",
    verses: [
      "Would you be free from the burden of sin? There's power in the blood, power in the blood;\nWould you o'er evil a victory win? There's wonderful power in the blood.",
      "Would you be free from your passion and pride? There's power in the blood, power in the blood;\nCome for a cleansing to Calvary's tide; there's wonderful power in the blood.",
      "Would you be whiter, much whiter than snow? There's power in the blood, power in the blood;\nSin-stains are lost in its life-giving flow; there's wonderful power in the blood.",
      "Would you do service for Jesus your King? There's power in the blood, power in the blood;\nWould you live daily His praises to sing? There's wonderful power in the blood."
    ]
  },
  {
    id: 56,
    number: 56,
    title: "Nothing but the Blood",
    category: "Praise",
    author: "Robert Lowry",
    tune: "PLAINFIELD",
    chorus: "Oh! precious is the flow that makes me white as snow;\nNo other fount I know, nothing but the blood of Jesus.",
    verses: [
      "What can wash away my sin? Nothing but the blood of Jesus;\nWhat can make me whole again? Nothing but the blood of Jesus.",
      "For my pardon, this I see, nothing but the blood of Jesus;\nFor my cleansing this my plea, nothing but the blood of Jesus.",
      "Nothing can for sin atone, nothing but the blood of Jesus;\nNaught of good that I have done, nothing but the blood of Jesus.",
      "This is all my hope and peace, nothing but the blood of Jesus;\nThis is all my righteousness, nothing but the blood of Jesus."
    ]
  },
  {
    id: 57,
    number: 57,
    title: "Are You Washed in the Blood?",
    category: "Communion",
    author: "Elisha Hoffman",
    tune: "WASHED IN THE BLOOD",
    chorus: "Are you washed in the blood, in the soul-cleansing blood of the Lamb?\nAre your garments spotless? Are they white as snow? Are you washed in the blood of the Lamb?",
    verses: [
      "Have you been to Jesus for the cleansing power? Are you washed in the blood of the Lamb?\nAre you fully trusting in His grace this hour? Are you washed in the blood of the Lamb?",
      "Are you walking daily by the Savior's side? Are you washed in the blood of the Lamb?\nDo you rest each moment in the Crucified? Are you washed in the blood of the Lamb?",
      "When the Bridegroom cometh will your robes be white? Are you washed in the blood of the Lamb?\nWill your soul be ready for the mansions bright, and be washed in the blood of the Lamb?",
      "Lay aside the garments that are stained with sin, and be washed in the blood of the Lamb;\nThere's a fountain flowing for the soul unclean, oh, be washed in the blood of the Lamb!"
    ]
  },
  {
    id: 58,
    number: 58,
    title: "There Is a Fountain",
    category: "Passion",
    author: "William Cowper",
    tune: "CLEANSING FOUNTAIN",
    verses: [
      "There is a fountain filled with blood drawn from Emmanuel's veins;\nAnd sinners plunged beneath that flood lose all their guilty stains.",
      "The dying thief rejoiced to see that fountain in his day;\nAnd there may I, though vile as he, wash all my sins away.",
      "Dear dying Lamb, Thy precious blood shall never lose its power,\nTill all the ransomed church of God be saved, to sin no more.",
      "E'er since, by faith, I saw the stream Thy flowing wounds supply,\nRedeeming love has been my theme, and shall be till I die."
    ]
  },
  {
    id: 59,
    number: 59,
    title: "I Have Decided to Follow Jesus",
    category: "Dedication",
    author: "Indian Folk Melody",
    tune: "ASSAM",
    verses: [
      "I have decided to follow Jesus; I have decided to follow Jesus;\nI have decided to follow Jesus; no turning back, no turning back.",
      "The world behind me, the cross before me; the world behind me, the cross before me;\nThe world behind me, the cross before me; no turning back, no turning back.",
      "Though none go with me, still I will follow; though none go with me, still I will follow;\nThough none go with me, still I will follow; no turning back, no turning back.",
      "Will you decide now to follow Jesus? Will you decide now to follow Jesus?\nWill you decide now to follow Jesus? No turning back, no turning back."
    ]
  },
  {
    id: 60,
    number: 60,
    title: "I Saw the Light",
    category: "Praise",
    author: "Hank Williams",
    tune: "SAW THE LIGHT",
    chorus: "I saw the light, I saw the light, no more darkness, no more night;\nNow I'm so happy, no sorrow in sight, praise the Lord, I saw the light.",
    verses: [
      "I wandered so aimless, life filled with sin, I wouldn't let my dear Savior in;\nThen Jesus came like a stranger in the night, praise the Lord, I saw the light.",
      "Just like a blind man I wandered along, worries and fears I claimed for my own;\nThen like the blind man that God gave back his sight, praise the Lord, I saw the light.",
      "I was a fool to wander and stray, for straight is the gate and narrow's the way;\nNow I have traded the wrong for the right, praise the Lord, I saw the light."
    ]
  },
  {
    id: 61,
    number: 61,
    title: "I'll Fly Away",
    category: "Praise",
    author: "Albert Brumley",
    tune: "FLY AWAY",
    chorus: "I'll fly away, O glory, I'll fly away; when I die, Hallelujah, by and by, I'll fly away.",
    verses: [
      "Some glad morning when this life is o'er, I'll fly away;\nTo a home on God's celestial shore, I'll fly away.",
      "When the shadows of this life have grown, I'll fly away;\nLike a bird from prison bars has flown, I'll fly away.",
      "Just a few more weary days and then, I'll fly away;\nTo a land where joy shall never end, I'll fly away."
    ]
  },
  {
    id: 62,
    number: 62,
    title: "Will the Circle Be Unbroken?",
    category: "Burial",
    author: "Ada Habershon",
    tune: "UNBROKEN CIRCLE",
    chorus: "Will the circle be unbroken by and by, by and by?\nIs a better home awaiting in the sky, in the sky?",
    verses: [
      "There are loved ones in the glory whose dear forms you often miss;\nWhen you close your earthly story, will you join them in their bliss?",
      "In the joyous days of childhood oft they told of wondrous love\nPointed to the dying Savior; now they dwell with Him above.",
      "You remember songs of heaven which you sang with childish voice.\nDo you love the hymns they taught you, or are songs of earth your choice?",
      "You can picture happy gatherings round the fireside long ago,\nAnd you think of tearful partings when they left you here below."
    ]
  },
  {
    id: 63,
    number: 63,
    title: "Swing Low, Sweet Chariot",
    category: "Comfort",
    author: "African American Spiritual",
    tune: "SWING LOW",
    chorus: "Swing low, sweet chariot, coming for to carry me home,\nSwing low, sweet chariot, coming for to carry me home.",
    verses: [
      "I looked over Jordan, and what did I see coming for to carry me home?\nA band of angels coming after me, coming for to carry me home.",
      "If you get there before I do, coming for to carry me home,\nTell all my friends I'm coming too, coming for to carry me home.",
      "I'm sometimes up and sometimes down, coming for to carry me home,\nBut still my soul feels heavenly bound, coming for to carry me home."
    ]
  },
  {
    id: 64,
    number: 64,
    title: "This Little Light of Mine",
    category: "Children",
    author: "Harry Dixon Loes",
    tune: "LITTLE LIGHT",
    verses: [
      "This little light of mine, I'm gonna let it shine;\nThis little light of mine, I'm gonna let it shine; let it shine, let it shine, let it shine.",
      "Hide it under a bushel? No! I'm gonna let it shine;\nHide it under a bushel? No! I'm gonna let it shine; let it shine, let it shine, let it shine.",
      "Don't let Satan blow it out! I'm gonna let it shine;\nDon't let Satan blow it out! I'm gonna let it shine; let it shine, let it shine, let it shine.",
      "All around the neighborhood, I'm gonna let it shine;\nAll around the neighborhood, I'm gonna let it shine; let it shine, let it shine, let it shine."
    ]
  },
  {
    id: 65,
    number: 65,
    title: "Jesus Loves Me",
    category: "Children",
    author: "Anna Warner",
    tune: "CHINA",
    chorus: "Yes, Jesus loves me! Yes, Jesus loves me! Yes, Jesus loves me! The Bible tells me so.",
    verses: [
      "Jesus loves me! this I know, for the Bible tells me so;\nLittle ones to Him belong; they are weak, but He is strong.",
      "Jesus loves me! He who died heaven's gate to open wide;\nHe will wash away my sin, let His little child come in.",
      "Jesus loves me! loves me still, though I'm very weak and ill;\nFrom His shining throne on high, comes to watch me where I lie."
    ]
  },
  {
    id: 66,
    number: 66,
    title: "Onward, Christian Soldiers",
    category: "Dedication",
    author: "Sabine Baring-Gould",
    tune: "ST. GERTRUDE",
    chorus: "Onward, Christian soldiers, marching as to war, with the cross of Jesus going on before.",
    verses: [
      "Onward, Christian soldiers, marching as to war, with the cross of Jesus going on before;\nChrist, the royal Master, leads against the foe; forward into battle see His banners go!",
      "At the sign of triumph Satan's host doth flee; on then, Christian soldiers, on to victory!\nHell's foundations quiver at the shout of praise; brothers, lift your voices, loud your anthems raise.",
      "Like a mighty army moves the church of God; brothers, we are treading where the saints have trod.\nWe are not divided, all one body we, one in hope and doctrine, one in charity."
    ]
  },
  {
    id: 67,
    number: 67,
    title: "Battle Hymn of the Republic",
    category: "Praise",
    author: "Julia Ward Howe",
    tune: "BATTLE HYMN",
    chorus: "Glory, glory, hallelujah! Glory, glory, hallelujah! Glory, glory, hallelujah! His truth is marching on.",
    verses: [
      "Mine eyes have seen the glory of the coming of the Lord;\nHe is trampling out the vintage where the grapes of wrath are stored.",
      "He hath loosed the fateful lightning of His terrible swift sword; His truth is marching on.",
      "I have seen Him in the watch-fires of a hundred circling camps, they have builded Him an altar in the evening dews and damps;",
      "I can read His righteous sentence by the dim and flaring lamps; His day is marching on."
    ]
  },
  {
    id: 68,
    number: 68,
    title: "Faith of Our Fathers",
    category: "Dedication",
    author: "Frederick Faber",
    tune: "ST. CATHERINE",
    chorus: "Faith of our fathers, holy faith! We will be true to thee till death.",
    verses: [
      "Faith of our fathers, living still, in spite of dungeon, fire, and sword;\nOh, how our hearts beat high with joy whene'er we hear that glorious Word!",
      "Faith of our fathers, we will strive to win all nations unto thee;\nAnd through the truth that comes from God, mankind shall then indeed be free.",
      "Faith of our fathers, we will love both friend and foe in all our strife;\nAnd preach thee, too, as love knows how, by kindly words and virtuous life."
    ]
  },
  {
    id: 69,
    number: 69,
    title: "For All the Saints",
    category: "Worship",
    author: "William Walsham How",
    tune: "SINE NOMINE",
    verses: [
      "For all the saints, who from their labors rest, who Thee by faith before the world confessed,\nThy name, O Jesus, be forever blessed. Alleluia, Alleluia!",
      "Thou wast their Rock, their Fortress and their Might; Thou, Lord, their Captain in the well-fought fight;\nThou, in the darkness drear, their one true Light. Alleluia, Alleluia!",
      "O may Thy soldiers, faithful, true and bold, fight as the saints who nobly fought of old,\nAnd win with them the victor's crown of gold. Alleluia, Alleluia!",
      "O blest communion, fellowship divine! We feebly struggle, they in glory shine;\nYet all are one in Thee, for all are Thine. Alleluia, Alleluia!"
    ]
  },
  {
    id: 70,
    number: 70,
    title: "Jerusalem",
    category: "Praise",
    author: "William Blake",
    tune: "JERUSALEM",
    verses: [
      "And did those feet in ancient time walk upon England's mountains green?\nAnd was the holy Lamb of God on England's pleasant pastures seen?",
      "And did the Countenance Divine shine forth upon our clouded hills?\nAnd was Jerusalem builded here among these dark Satanic mills?",
      "Bring me my bow of burning gold! Bring me my arrows of desire!\nBring me my spear! O clouds, unfold! Bring me my chariot of fire!",
      "I will not cease from mental fight, nor shall my sword sleep in my hand\nTill we have built Jerusalem in England's green and pleasant land."
    ]
  },
  {
    id: 71,
    number: 71,
    title: "Morning Has Broken",
    category: "Morning",
    author: "Eleanor Farjeon",
    tune: "BUNESSAN",
    verses: [
      "Morning has broken like the first morning, blackbird has spoken like the first bird.\nPraise for the singing! Praise for the morning! Praise for them, springing fresh from the Word!",
      "Sweet the rain's new fall sunlit from heaven, like the first dewfall on the first grass.\nPraise for the sweetness of the wet garden, sprung in completeness where His feet pass.",
      "Mine is the sunlight! Mine is the morning born of the one light Eden saw play!\nPraise with elation, praise every morning, God's recreation of the new day!"
    ]
  },
  {
    id: 72,
    number: 72,
    title: "Simple Gifts",
    category: "Worship",
    author: "Joseph Brackett",
    tune: "SIMPLE GIFTS",
    verses: [
      "Tis the gift to be simple, 'tis the gift to be free, 'tis the gift to come down where we ought to be,\nAnd when we find ourselves in the place just right, 'twill be in the valley of love and delight.",
      "When true simplicity is gained, to bow and to bend we shan't be ashamed,\nTo turn, turn will be our delight, till by turning, turning we come 'round right."
    ]
  },
  {
    id: 73,
    number: 73,
    title: "We Gather Together",
    category: "Worship",
    author: "Dutch Hymn",
    tune: "KREMSER",
    verses: [
      "We gather together to ask the Lord's blessing; He chastens and hastens His will to make known;\nThe wicked oppressing now cease from distressing. Sing praises to His name; He forgets not His own.",
      "Beside us to guide us, our God with us joining, ordaining, maintaining His kingdom divine;\nSo from the beginning the fight we were winning; Thou, Lord, wast at our side, all glory be Thine!",
      "We all do extol Thee, Thou Leader triumphant, and pray that Thou still our Defender wilt be.\nLet Thy congregation escape tribulation; Thy name be ever praised! O Lord, make us free!"
    ]
  },
  {
    id: 74,
    number: 74,
    title: "Come, Ye Thankful People, Come",
    category: "Praise",
    author: "Henry Alford",
    tune: "ST. GEORGE'S WINDSOR",
    verses: [
      "Come, ye thankful people, come, raise the song of harvest home;\nAll is safely gathered in, ere the winter storms begin.",
      "God, our Maker, doth provide for our wants to be supplied;\nCome to God's own temple, come, raise the song of harvest home.",
      "All the world is God's own field, fruit unto His praise to yield;\nWheat and tares together sown, unto joy or sorrow grown.",
      "First the blade, and then the ear, then the full corn shall appear;\nLord of harvest, grant that we wholesome grain and pure may be."
    ]
  },
  {
    id: 75,
    number: 75,
    title: "We Three Kings",
    category: "Worship",
    author: "John Henry Hopkins Jr.",
    tune: "KINGS OF ORIENT",
    chorus: "O star of wonder, star of light, star with royal beauty bright,\nWestward leading, still proceeding, guide us to thy perfect light.",
    verses: [
      "We three kings of Orient are; bearing gifts we traverse afar,\nField and fountain, moor and mountain, following yonder star.",
      "Born a King on Bethlehem's plain, gold I bring to crown Him again,\nKing forever, ceasing never, over us all to reign.",
      "Frankincense to offer have I; incense owns a Deity nigh;\nPrayer and praising, voices raising, worshiping God on high.",
      "Myrrh is mine, its bitter perfume breathes a life of gathering gloom;\nSorrowing, sighing, bleeding, dying, sealed in the stone-cold tomb."
    ]
  },
  {
    id: 76,
    number: 76,
    title: "O Come, All Ye Faithful",
    category: "Worship",
    author: "John Francis Wade",
    tune: "ADESTE FIDELES",
    chorus: "O come, let us adore Him, O come, let us adore Him, O come, let us adore Him, Christ the Lord!",
    verses: [
      "O come, all ye faithful, joyful and triumphant! O come ye, O come ye to Bethlehem;\nCome and behold Him, born the King of angels.",
      "God of God, Light of Light, lo, He abhors not the Virgin's womb;\nVery God, begotten, not created.",
      "Sing, choirs of angels, sing in exultation, sing, all ye citizens of heaven above!\nGlory to God, all glory in the highest!",
      "Yea, Lord, we greet Thee, born this happy morning; Jesus, to Thee be all glory given;\nWord of the Father, now in flesh appearing."
    ]
  },
  {
    id: 77,
    number: 77,
    title: "Silent Night",
    category: "Evening",
    author: "Joseph Mohr",
    tune: "STILLE NACHT",
    verses: [
      "Silent night, holy night, all is calm, all is bright\nRound yon virgin mother and child. Holy infant, so tender and mild,\nSleep in heavenly peace, sleep in heavenly peace.",
      "Silent night, holy night, shepherds quake at the sight;\nGlories stream from heaven afar, heavenly hosts sing Alleluia!\nChrist the Savior is born, Christ the Savior is born!",
      "Silent night, holy night, Son of God, love's pure light;\nRadiant beams from Thy holy face, with the dawn of redeeming grace,\nJesus, Lord, at Thy birth, Jesus, Lord, at Thy birth."
    ]
  },
  {
    id: 78,
    number: 78,
    title: "Hark! The Herald Angels Sing",
    category: "Worship",
    author: "Charles Wesley",
    tune: "MENDELSSOHN",
    chorus: "Hark! the herald angels sing, 'Glory to the newborn King!'",
    verses: [
      "Hark! the herald angels sing, 'Glory to the newborn King;\nPeace on earth, and mercy mild, God and sinners reconciled!'",
      "Joyful, all ye nations, rise, join the triumph of the skies;\nWith th' angelic host proclaim, 'Christ is born in Bethlehem!'",
      "Christ, by highest heaven adored, Christ, the everlasting Lord:\nLate in time behold Him come, offspring of a virgin's womb.",
      "Veiled in flesh the Godhead see, hail th' incarnate Deity!\nPleased as man with man to dwell, Jesus, our Emmanuel."
    ]
  },
  {
    id: 79,
    number: 79,
    title: "Joy to the World",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ANTIOCH",
    verses: [
      "Joy to the world, the Lord is come! Let earth receive her King;\nLet every heart prepare Him room, and heaven and nature sing.",
      "Joy to the earth, the Savior reigns! Let men their songs employ;\nWhile fields and floods, rocks, hills and plains repeat the sounding joy.",
      "No more let sins and sorrows grow, nor thorns infest the ground;\nHe comes to make His blessings flow far as the curse is found.",
      "He rules the world with truth and grace, and makes the nations prove\nThe glories of His righteousness, and wonders of His love."
    ]
  },
  {
    id: 80,
    number: 80,
    title: "O Holy Night",
    category: "Worship",
    author: "Placide Cappeau",
    tune: "CANTIQUE DE NOEL",
    verses: [
      "O holy night! The stars are brightly shining, it is the night of our dear Savior's birth.",
      "Long lay the world in sin and error pining, till He appeared and the soul felt its worth.",
      "A thrill of hope the weary world rejoices, for yonder breaks a new and glorious morn.",
      "Fall on your knees! Oh, hear the angel voices! O night divine, O night when Christ was born!"
    ]
  },
  {
    id: 81,
    number: 81,
    title: "The First Noel",
    category: "Worship",
    author: "Traditional English Carol",
    tune: "THE FIRST NOEL",
    chorus: "Noel, Noel, Noel, Noel, born is the King of Israel.",
    verses: [
      "The first Noel the angel did say was to certain poor shepherds in fields as they lay;\nIn fields where they lay keeping their sheep, on a cold winter's night that was so deep.",
      "They looked up and saw a star shining in the east beyond them far,\nAnd to the earth it gave great light, and so it continued both day and night.",
      "And by the light of that same star three wise men came from country far;\nTo seek for a king was their intent, and to follow the star wherever it went.",
      "This star drew nigh to the northwest, o'er Bethlehem it took its rest;\nAnd there it did both stop and stay right over the place where Jesus lay."
    ]
  },
  {
    id: 82,
    number: 82,
    title: "Away in a Manger",
    category: "Children",
    author: "Anonymous",
    tune: "MUELLER",
    verses: [
      "Away in a manger, no crib for a bed, the little Lord Jesus laid down His sweet head.",
      "The stars in the bright sky looked down where He lay, the little Lord Jesus asleep on the hay.",
      "The cattle are lowing, the Baby awakes, but little Lord Jesus no crying He makes.",
      "I love Thee, Lord Jesus! Look down from the sky, and stay by my cradle till morning is nigh."
    ]
  },
  {
    id: 83,
    number: 83,
    title: "Angels We Have Heard on High",
    category: "Worship",
    author: "Traditional French Carol",
    tune: "GLORIA",
    chorus: "Gloria, in excelsis Deo! Gloria, in excelsis Deo!",
    verses: [
      "Angels we have heard on high sweetly singing o'er the plains,\nAnd the mountains in reply echoing their joyous strains.",
      "Shepherds, why this jubilee? Why your joyous strains prolong?\nWhat the gladsome tidings be which inspire your heavenly song?",
      "Come to Bethlehem and see Him whose birth the angels sing;\nCome, adore on bended knee, Christ the Lord, the newborn King.",
      "See Him in a manger laid, whom the choirs of angels praise;\nMary, Joseph, lend your aid, while our hearts in love we raise."
    ]
  },
  {
    id: 84,
    number: 84,
    title: "God Rest Ye Merry, Gentlemen",
    category: "Worship",
    author: "Traditional English Carol",
    tune: "GOD REST YOU MERRY",
    chorus: "O tidings of comfort and joy, comfort and joy; O tidings of comfort and joy.",
    verses: [
      "God rest ye merry, gentlemen, let nothing you dismay;\nRemember, Christ, our Savior, was born on Christmas day.",
      "To save us all from Satan's power when we were gone astray.",
      "In Bethlehem, in Israel, this blessed Babe was born,\nAnd laid within a manger upon this blessed morn.",
      "The which His mother Mary did nothing take in scorn."
    ]
  },
  {
    id: 85,
    number: 85,
    title: "Good Christian Men, Rejoice",
    category: "Worship",
    author: "Heinrich Seuse",
    tune: "IN DULCI JUBILO",
    verses: [
      "Good Christian men, rejoice with heart and soul and voice;\nGive ye heed to what we say: Jesus Christ is born today!",
      "Ox and ass before Him bow, and He is in the manger now.",
      "Christ is born today! Christ is born today!",
      "Good Christian men, rejoice with heart and soul and voice;\nNow ye hear of endless bliss: Jesus Christ was born for this!"
    ]
  },
  {
    id: 86,
    number: 86,
    title: "It Came Upon the Midnight Clear",
    category: "Worship",
    author: "Edmund Sears",
    tune: "CAROL",
    verses: [
      "It came upon the midnight clear, that glorious song of old,\nFrom angels bending near the earth, to touch their harps of gold.",
      "'Peace on the earth, good will to men, from heaven's all-gracious King.'\nThe world in solemn stillness lay, to hear the angels sing.",
      "Still through the cloven skies they come with peaceful wings unfurled,\nAnd still their heavenly music floats o'er all the weary world.",
      "Above its sad and lowly plains, they bend on hovering wing,\nAnd ever o'er its Babel sounds the blessed angels sing."
    ]
  },
  {
    id: 87,
    number: 87,
    title: "O Little Town of Bethlehem",
    category: "Worship",
    author: "Phillips Brooks",
    tune: "ST. LOUIS",
    verses: [
      "O little town of Bethlehem, how still we see thee lie!\nAbove thy deep and dreamless sleep the silent stars go by.",
      "Yet in thy dark streets shineth the everlasting Light;\nThe hopes and fears of all the years are met in thee tonight.",
      "For Christ is born of Mary, and gathered all above,\nWhile mortals sleep, the angels keep their watch of wondering love.",
      "O morning stars, together proclaim the holy birth,\nAnd praises sing to God the King, and peace to men on earth!"
    ]
  },
  {
    id: 88,
    number: 88,
    title: "What Child Is This?",
    category: "Worship",
    author: "William Chatterton Dix",
    tune: "GREENSLEEVES",
    chorus: "This, this is Christ the King, whom shepherds guard and angels sing;\nHaste, haste to bring Him laud, the Babe, the Son of Mary!",
    verses: [
      "What child is this, who, laid to rest, on Mary's lap is sleeping?\nWhom angels greet with anthems sweet, while shepherds watch are keeping?",
      "Why lies He in such mean estate where ox and ass are feeding?\nGood Christian, fear: for sinners here the silent Word is pleading.",
      "So bring Him incense, gold, and myrrh, come, peasant, king, to own Him.\nThe King of kings salvation brings; let loving hearts enthrone Him."
    ]
  },
  {
    id: 89,
    number: 89,
    title: "Go Tell It on the Mountain",
    category: "Missionary",
    author: "John Wesley Work Jr.",
    tune: "GO TELL IT",
    chorus: "Go, tell it on the mountain, over the hills and everywhere;\nGo, tell it on the mountain, that Jesus Christ is born!",
    verses: [
      "While shepherds kept their watching o'er silent flocks by night,\nBehold throughout the heavens there shone a holy light.",
      "The shepherds feared and trembled, when lo! above the earth,\nRang out the angel chorus that hailed our Savior's birth.",
      "Down in a lowly manger the humble Christ was born,\nAnd God sent us salvation that blessed Christmas morn."
    ]
  },
  {
    id: 90,
    number: 90,
    title: "Christ the Lord Is Risen Today",
    category: "Resurrection",
    author: "Charles Wesley",
    tune: "EASTER HYMN",
    verses: [
      "Christ the Lord is risen today, Alleluia!\nSons of men and angels say, Alleluia!",
      "Raise your joys and triumphs high, Alleluia!\nSing, ye heavens, and earth reply, Alleluia!",
      "Lives again our glorious King, Alleluia!\nWhere, O death, is now thy sting? Alleluia!",
      "Once He died our souls to save, Alleluia!\nWhere thy victory, O grave? Alleluia!"
    ]
  },
  {
    id: 91,
    number: 91,
    title: "Low in the Grave He Lay",
    category: "Resurrection",
    author: "Robert Lowry",
    tune: "CHRIST AROSE",
    chorus: "Up from the grave He arose, with a mighty triumph o'er His foes;\nHe arose a Victor from the dark domain, and He lives forever with His saints to reign.",
    verses: [
      "Low in the grave He lay, Jesus, my Savior, waiting the coming day, Jesus, my Lord!",
      "Vainly they watch His bed, Jesus, my Savior, vainly they seal the dead, Jesus, my Lord!",
      "Death cannot keep its Prey, Jesus, my Savior; He tore the bars away, Jesus, my Lord!"
    ]
  },
  {
    id: 92,
    number: 92,
    title: "Thine Be the Glory",
    category: "Resurrection",
    author: "Edmond Budry",
    tune: "JUDAS MACCABAEUS",
    chorus: "Thine be the glory, risen, conquering Son; endless is the victory Thou o'er death hast won.",
    verses: [
      "Thine be the glory, risen, conquering Son; endless is the victory Thou o'er death hast won;\nAngels in bright raiment rolled the stone away, kept the folded grave clothes where Thy body lay.",
      "Lo! Jesus meets us, risen from the tomb; lovingly He greets us, scatters fear and gloom;",
      "Let the church with gladness, hymns of triumph sing; for her Lord now liveth, death hath lost its sting."
    ]
  },
  {
    id: 93,
    number: 93,
    title: "Were You There?",
    category: "Passion",
    author: "African American Spiritual",
    tune: "WERE YOU THERE",
    verses: [
      "Were you there when they crucified my Lord? Were you there when they crucified my Lord?\nOh, sometimes it causes me to tremble, tremble, tremble. Were you there when they crucified my Lord?",
      "Were you there when they nailed Him to the tree? Were you there when they nailed Him to the tree?\nOh, sometimes it causes me to tremble, tremble, tremble. Were you there when they nailed Him to the tree?",
      "Were you there when they pierced Him in the side? Were you there when they pierced Him in the side?\nOh, sometimes it causes me to tremble, tremble, tremble. Were you there when they pierced Him in the side?",
      "Were you there when they laid Him in the tomb? Were you there when they laid Him in the tomb?\nOh, sometimes it causes me to tremble, tremble, tremble. Were you there when they laid Him in the tomb?"
    ]
  },
  {
    id: 94,
    number: 94,
    title: "Man of Sorrows",
    category: "Passion",
    author: "Philip Bliss",
    tune: "HALLELUJAH! WHAT A SAVIOR",
    verses: [
      "Man of Sorrows! what a name for the Son of God, who came\nRuined sinners to reclaim. Hallelujah! What a Savior!",
      "Bearing shame and scoffing rude, in my place condemned He stood;\nSealed my pardon with His blood. Hallelujah! What a Savior!",
      "Guilty, vile, and helpless we; spotless Lamb of God was He;\n'Full atonement!' can it be? Hallelujah! What a Savior!",
      "Lifted up was He to die; 'It is finished!' was His cry;\nNow in heaven exalted high. Hallelujah! What a Savior!"
    ]
  },
  {
    id: 95,
    number: 95,
    title: "Alas! and Did My Savior Bleed",
    category: "Passion",
    author: "Isaac Watts",
    tune: "MARTYRDOM",
    verses: [
      "Alas! and did my Savior bleed and did my Sovereign die?\nWould He devote that sacred head for such a worm as I?",
      "Was it for crimes that I have done He groaned upon the tree?\nAmazing pity! grace unknown! and love beyond degree!",
      "Well might the sun in darkness hide and shut his glories in,\nWhen Christ, the mighty Maker, died for man the creature's sin.",
      "But drops of grief can ne'er repay the debt of love I owe;\nHere, Lord, I give myself away, 'tis all that I can do."
    ]
  },
  {
    id: 96,
    number: 96,
    title: "Beneath the Cross of Jesus",
    category: "Passion",
    author: "Elizabeth Clephane",
    tune: "ST. CHRISTOPHER",
    verses: [
      "Beneath the cross of Jesus I fain would take my stand,\nThe shadow of a mighty rock within a weary land.",
      "A home within the wilderness, a rest upon the way,\nFrom the burning of the noontide heat, and the burden of the day.",
      "Upon that cross of Jesus mine eye at times can see\nThe very dying form of One who suffered there for me.",
      "And from my stricken heart with tears two wonders I confess:\nThe wonders of redeeming love and my unworthiness."
    ]
  },
  {
    id: 97,
    number: 97,
    title: "Lead, Kindly Light",
    category: "Morning",
    author: "John Henry Newman",
    tune: "LUX BENIGNA",
    verses: [
      "Lead, kindly Light, amid th'encircling gloom, lead Thou me on!\nThe night is dark, and I am far from home; lead Thou me on!",
      "Keep Thou my feet; I do not ask to see the distant scene; one step enough for me.",
      "I was not ever thus, nor prayed that Thou shouldst lead me on;\nI loved to choose and see my path; but now lead Thou me on!",
      "I loved the garish day, and, spite of fears, pride ruled my will. Remember not past years!"
    ]
  },
  {
    id: 98,
    number: 98,
    title: "Dear Lord and Father of Mankind",
    category: "Evening",
    author: "John Greenleaf Whittier",
    tune: "REST",
    verses: [
      "Dear Lord and Father of mankind, forgive our foolish ways;\nReclothe us in our rightful mind, in purer lives Thy service find, in deeper reverence, praise.",
      "In simple trust like theirs who heard, beside the Syrian sea,\nThe gracious calling of the Lord, let us, like them, without a word, rise up and follow Thee.",
      "O Sabbath rest by Galilee! O calm of hills above,\nWhere Jesus knelt to share with Thee the silence of eternity, interpreted by love!",
      "Drop Thy still dews of quietness, till all our strivings cease;\nTake from our souls the strain and stress, and let our ordered lives confess the beauty of Thy peace."
    ]
  },
  {
    id: 99,
    number: 99,
    title: "Immortal, Invisible, God Only Wise",
    category: "Worship",
    author: "Walter Chalmers Smith",
    tune: "ST. DENIO",
    verses: [
      "Immortal, invisible, God only wise, in light inaccessible hid from our eyes,\nMost blessed, most glorious, the Ancient of Days, almighty, victorious, Thy great name we praise.",
      "Unresting, unhasting, and silent as light, nor wanting, nor wasting, Thou rulest in might;\nThy justice, like mountains, high soaring above Thy clouds, which are fountains of goodness and love.",
      "To all, life Thou givest, to both great and small; in all life Thou livest, the true life of all;\nWe blossom and flourish as leaves on the tree, and wither and perish—but naught changeth Thee.",
      "Great Father of glory, pure Father of light, Thine angels adore Thee, all veiling their sight;\nAll praise we would render; O help us to see 'tis only the splendor of light hideth Thee!"
    ]
  },
  {
    id: 100,
    number: 100,
    title: "Praise, My Soul, the King of Heaven",
    category: "Praise",
    author: "Henry Francis Lyte",
    tune: "LAUDA ANIMA",
    verses: [
      "Praise, my soul, the King of heaven; to His feet thy tribute bring;\nRansomed, healed, restored, forgiven, evermore His praises sing.",
      "Alleluia! Alleluia! Praise the everlasting King!",
      "Praise Him for His grace and favor to our fathers in distress;\nPraise Him still the same as ever, slow to chide, and swift to bless.",
      "Alleluia! Alleluia! Glorious in His faithfulness!"
    ]
  },
  {
    id: 101,
    number: 101,
    title: "Glorious Things of Thee Are Spoken",
    category: "Worship",
    author: "John Newton",
    tune: "AUSTRIA",
    verses: [
      "Glorious things of thee are spoken, Zion, city of our God;\nHe whose word cannot be broken formed thee for His own abode.",
      "On the Rock of Ages founded, what can shake thy sure repose?\nWith salvation's walls surrounded, thou may'st smile at all thy foes.",
      "See, the streams of living waters, springing from eternal love,\nWell supply thy sons and daughters, and all fear of want remove.",
      "Who can faint while such a river ever flows their thirst to assuage?\nGrace, which like the Lord, the Giver, never fails from age to age."
    ]
  },
  {
    id: 102,
    number: 102,
    title: "Breathe on Me, Breath of God",
    category: "Worship",
    author: "Edwin Hatch",
    tune: "TRENTHAM",
    verses: [
      "Breathe on me, Breath of God, fill me with life anew,\nThat I may love what Thou dost love, and do what Thou dost do.",
      "Breathe on me, Breath of God, until my heart is pure,\nUntil with Thee I will one will, to do and to endure.",
      "Breathe on me, Breath of God, till I am wholly Thine,\nUntil this earthly part of me glows with Thy fire divine.",
      "Breathe on me, Breath of God, so shall I never die,\nBut live with Thee the perfect life of Thine eternity."
    ]
  },
  {
    id: 103,
    number: 103,
    title: "Spirit of God, Descend Upon My Heart",
    category: "Worship",
    author: "George Croly",
    tune: "MORECAMBE",
    verses: [
      "Spirit of God, descend upon my heart; wean it from earth; through all its pulses move;\nStoop to my weakness, mighty as Thou art, and make me love Thee as I ought to love.",
      "I ask no dream, no prophet ecstasies, no sudden rending of the veil of clay,\nNo angel visitant, no opening skies; but take the dimness of my soul away.",
      "Hast Thou not bid us love Thee, God and King? All, all Thine own, soul, heart and strength and mind;\nI see Thy cross—there teach my heart to cling: O let me seek Thee, and O let me find!",
      "Teach me to feel that Thou art always nigh; teach me the patience of unanswered prayer;\nTeach me to love, as Thine angels love on high, one holy passion filling all my frame."
    ]
  },
  {
    id: 104,
    number: 104,
    title: "O Master, Let Me Walk with Thee",
    category: "Dedication",
    author: "Washington Gladden",
    tune: "MARYTON",
    verses: [
      "O Master, let me walk with Thee in lowly paths of service free;\nTell me Thy secret; help me bear the strain of toil, the fret of care.",
      "Help me the slow of heart to move by some clear, winning word of love;\nTeach me the wayward feet to stay, and guide them in the homeward way.",
      "Teach me Thy patience; still with Thee in closer, dearer company,\nIn work that keeps faith sweet and strong, in trust that triumphs over wrong.",
      "In hope that sends a shining ray far down the future's broadening way,\nIn peace that only Thou canst give, with Thee, O Master, let me live."
    ]
  },
  {
    id: 105,
    number: 105,
    title: "Jesus, the Very Thought of Thee",
    category: "Worship",
    author: "Bernard of Clairvaux",
    tune: "ST. AGNES",
    verses: [
      "Jesus, the very thought of Thee with sweetness fills my breast;\nBut sweeter far Thy face to see, and in Thy presence rest.",
      "Nor voice can sing, nor heart can frame, nor can the memory find\nA sweeter sound than Thy blest name, O Savior of mankind!",
      "O Hope of every contrite heart, O Joy of all the meek,\nTo those who fall, how kind Thou art! How good to those who seek!",
      "But what to those who find? Ah, this nor tongue nor pen can show;\nThe love of Jesus, what it is, none but His loved ones know."
    ]
  },
  {
    id: 106,
    number: 106,
    title: "My Faith Looks Up to Thee",
    category: "Dedication",
    author: "Ray Palmer",
    tune: "OLIVET",
    verses: [
      "My faith looks up to Thee, Thou Lamb of Calvary, Savior divine!\nNow hear me while I pray, take all my guilt away, O let me from this day be wholly Thine!",
      "May Thy rich grace impart strength to my fainting heart, my zeal inspire;\nAs Thou hast died for me, O may my love to Thee pure, warm, and changeless be, a living fire!",
      "While life's dark maze I tread, and griefs around me spread, be Thou my Guide;\nBid darkness turn to day, wipe sorrow's tears away, nor let me ever stray from Thee aside.",
      "When ends life's transient dream, when death's cold, sullen stream shall o'er me roll;\nBlest Savior, then in love, fear and distrust remove; O bear me safe above, a ransomed soul!"
    ]
  },
  {
    id: 107,
    number: 107,
    title: "Near the Cross",
    category: "Passion",
    author: "Fanny Crosby",
    tune: "NEAR THE CROSS",
    chorus: "In the cross, in the cross, be my glory ever; till my raptured soul shall find rest beyond the river.",
    verses: [
      "Jesus, keep me near the cross, there a precious fountain\nFree to all, a healing stream flows from Calvary's mountain.",
      "Near the cross, a trembling soul, love and mercy found me;\nThere the bright and morning star sheds its beams around me.",
      "Near the cross! O Lamb of God, bring its scenes before me;\nHelp me walk from day to day, with its shadows o'er me.",
      "Near the cross I'll watch and wait hoping, trusting ever,\nTill I reach the golden strand, just beyond the river."
    ]
  },
  {
    id: 108,
    number: 108,
    title: "Savior, Like a Shepherd Lead Us",
    category: "Children",
    author: "Dorothy Thrupp",
    tune: "BRADBURY",
    verses: [
      "Savior, like a shepherd lead us, much we need Thy tender care;\nIn Thy pleasant pastures feed us, for our use Thy folds prepare.",
      "Blessed Jesus, blessed Jesus! Thou hast bought us, Thine we are.",
      "We are Thine, Thou dost befriend us, be the Guardian of our way;\nKeep Thy flock, from sin defend us, seek us when we go astray.",
      "Blessed Jesus, blessed Jesus! Hear, O hear us when we pray."
    ]
  },
  {
    id: 109,
    number: 109,
    title: "Close to Thee",
    category: "Dedication",
    author: "Fanny Crosby",
    tune: "CLOSE TO THEE",
    chorus: "Close to Thee, close to Thee, close to Thee, close to Thee;\nAll along my pilgrim journey, Savior, let me walk with Thee.",
    verses: [
      "Thou my everlasting portion, more than friend or life to me,\nAll along my pilgrim journey, Savior, let me walk with Thee.",
      "Not for ease or worldly pleasure, nor for fame my prayer shall be;\nGladly will I toil and suffer, only let me walk with Thee.",
      "Lead me through the vale of shadows, bear me o'er life's fitful sea;\nThen the gate of life eternal may I enter, Lord, with Thee."
    ]
  },
  {
    id: 110,
    number: 110,
    title: "Draw Me Nearer",
    category: "Dedication",
    author: "Fanny Crosby",
    tune: "I AM THINE",
    chorus: "Draw me nearer, nearer, blessed Lord, to the cross where Thou hast died;\nDraw me nearer, nearer, nearer, blessed Lord, to Thy precious, bleeding side.",
    verses: [
      "I am Thine, O Lord, I have heard Thy voice, and it told Thy love to me;\nBut I long to rise in the arms of faith and be closer drawn to Thee.",
      "Consecrate me now to Thy service, Lord, by the power of grace divine;\nLet my soul look up with a steadfast hope, and my will be lost in Thine.",
      "O the pure delight of a single hour that before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God, I commune as friend with friend!",
      "There are depths of love that I cannot know till I cross the narrow sea;\nThere are heights of joy that I may not reach till I rest in peace with Thee."
    ]
  },
  {
    id: 111,
    number: 111,
    title: "I Am Thine, O Lord",
    category: "Dedication",
    author: "Fanny Crosby",
    tune: "I AM THINE",
    chorus: "Draw me nearer, nearer, blessed Lord, to the cross where Thou hast died;\nDraw me nearer, nearer, nearer, blessed Lord, to Thy precious, bleeding side.",
    verses: [
      "I am Thine, O Lord, I have heard Thy voice, and it told Thy love to me;\nBut I long to rise in the arms of faith and be closer drawn to Thee.",
      "Consecrate me now to Thy service, Lord, by the power of grace divine;\nLet my soul look up with a steadfast hope, and my will be lost in Thine.",
      "O the pure delight of a single hour that before Thy throne I spend,\nWhen I kneel in prayer, and with Thee, my God, I commune as friend with friend!",
      "There are depths of love that I cannot know till I cross the narrow sea;\nThere are heights of joy that I may not reach till I rest in peace with Thee."
    ]
  },
  {
    id: 112,
    number: 112,
    title: "More Love to Thee",
    category: "Dedication",
    author: "Elizabeth Prentiss",
    tune: "MORE LOVE TO THEE",
    verses: [
      "More love to Thee, O Christ, more love to Thee! Hear Thou the prayer I make on bended knee;\nThis is my earnest plea: More love, O Christ, to Thee, more love to Thee, more love to Thee!",
      "Once earthly joy I sought, sought peace and rest; now Thee alone I seek, give what is best.",
      "This all my prayer shall be: More love, O Christ, to Thee, more love to Thee, more love to Thee!",
      "Then shall my latest breath whisper Thy praise; this be the parting cry my heart shall raise."
    ]
  },
  {
    id: 113,
    number: 113,
    title: "My Jesus, I Love Thee",
    category: "Dedication",
    author: "William Featherston",
    tune: "GORDON",
    verses: [
      "My Jesus, I love Thee, I know Thou art mine; for Thee all the follies of sin I resign.\nMy gracious Redeemer, my Savior art Thou; if ever I loved Thee, my Jesus, 'tis now.",
      "I love Thee because Thou hast first loved me, and purchased my pardon on Calvary's tree.",
      "I love Thee for wearing the thorns on Thy brow; if ever I loved Thee, my Jesus, 'tis now.",
      "In mansions of glory and endless delight, I'll ever adore Thee in heaven so bright."
    ]
  },
  {
    id: 114,
    number: 114,
    title: "O Love That Wilt Not Let Me Go",
    category: "Worship",
    author: "George Matheson",
    tune: "ST. MARGARET",
    verses: [
      "O Love that wilt not let me go, I rest my weary soul in Thee;\nI give Thee back the life I owe, that in Thine ocean depths its flow may richer, fuller be.",
      "O Light that followest all my way, I yield my flickering torch to Thee;\nMy heart restores its borrowed ray, that in Thy sunshine's blaze its day may brighter, fairer be.",
      "O Joy that seekest me through pain, I cannot close my heart to Thee;\nI trace the rainbow through the rain, and feel the promise is not vain, that morn shall tearless be.",
      "O Cross that liftest up my head, I dare not ask to fly from Thee;\nI lay in dust life's glory dead, and from the ground there blossoms red life that shall endless be."
    ]
  },
  {
    id: 115,
    number: 115,
    title: "Peace, Perfect Peace",
    category: "Comfort",
    author: "Edward Bickersteth",
    tune: "PAX TECUM",
    verses: [
      "Peace, perfect peace, in this dark world of sin? The blood of Jesus whispers peace within.",
      "Peace, perfect peace, by thronging duties pressed? To do the will of Jesus, this is rest.",
      "Peace, perfect peace, with sorrows surging round? On Jesus' bosom naught but calm is found.",
      "Peace, perfect peace, with loved ones far away? In Jesus' keeping we are safe, and they."
    ]
  },
  {
    id: 116,
    number: 116,
    title: "Still, Still with Thee",
    category: "Morning",
    author: "Harriet Beecher Stowe",
    tune: "CONSOLATION",
    verses: [
      "Still, still with Thee, when purple morning breaketh, when the bird waketh, and the shadows flee;\nFairer than morning, lovelier than daylight, dawns the sweet consciousness, I am with Thee.",
      "Alone with Thee, amid the mystic shadows, the solemn hush of nature newly born;\nAlone with Thee in breathless adoration, in the calm dew and freshness of the morn.",
      "As in the dawning, o'er the waveless ocean, the image of the morning star doth rest,\nSo in this stillness, Thou beholdest only Thine image in the waters of my breast.",
      "Still, still with Thee! As to each newborn morning a fresh and solemn splendor still is given,\nSo doth this blessed consciousness awaking, breathe each day nearness unto Thee and heaven."
    ]
  },
  {
    id: 117,
    number: 117,
    title: "Sun of My Soul",
    category: "Evening",
    author: "John Keble",
    tune: "HURSLEY",
    verses: [
      "Sun of my soul, Thou Savior dear, it is not night if Thou be near;\nO may no earthborn cloud arise to hide Thee from Thy servant's eyes.",
      "When the soft dews of kindly sleep my wearied eyelids gently steep,\nBe my last thought, how sweet to rest forever on my Savior's breast.",
      "Abide with me from morn till eve, for without Thee I cannot live;\nAbide with me when night is nigh, for without Thee I dare not die.",
      "If some poor wandering child of Thine has spurned today the voice divine,\nNow, Lord, the gracious work begin; let him no more lie down in sin."
    ]
  },
  {
    id: 118,
    number: 118,
    title: "The King of Love My Shepherd Is",
    category: "Comfort",
    author: "Henry Baker",
    tune: "DOMINUS REGIT ME",
    verses: [
      "The King of love my shepherd is, whose goodness faileth never;\nI nothing lack if I am His and He is mine forever.",
      "Where streams of living water flow my ransomed soul He leadeth,\nAnd where the verdant pastures grow with food celestial feedeth.",
      "Perverse and foolish oft I strayed, but yet in love He sought me,\nAnd on His shoulder gently laid, and home, rejoicing, brought me.",
      "In death's dark vale I fear no ill with Thee, dear Lord, beside me;\nThy rod and staff my comfort still, Thy cross before to guide me."
    ]
  },
  {
    id: 119,
    number: 119,
    title: "There Is a Green Hill Far Away",
    category: "Passion",
    author: "Cecil Frances Alexander",
    tune: "HORSLEY",
    verses: [
      "There is a green hill far away, without a city wall,\nWhere the dear Lord was crucified, who died to save us all.",
      "We may not know, we cannot tell, what pains He had to bear,\nBut we believe it was for us He hung and suffered there.",
      "He died that we might be forgiven, He died to make us good,\nThat we might go at last to heaven, saved by His precious blood.",
      "There was no other good enough to pay the price of sin,\nHe only could unlock the gate of heaven and let us in."
    ]
  },
  {
    id: 120,
    number: 120,
    title: "We Plough the Fields and Scatter",
    category: "Praise",
    author: "Matthias Claudius",
    tune: "WIR PFLÜGEN",
    chorus: "All good gifts around us are sent from heaven above;\nThen thank the Lord, O thank the Lord, for all His love.",
    verses: [
      "We plough the fields and scatter the good seed on the land,\nBut it is fed and watered by God's almighty hand.",
      "He sends the snow in winter, the warmth to swell the grain,\nThe breezes and the sunshine, and soft refreshing rain.",
      "He only is the Maker of all things near and far;\nHe paints the wayside flower, He lights the evening star.",
      "The winds and waves obey Him, by Him the birds are fed;\nMuch more to us, His children, He gives our daily bread."
    ]
  },
  {
    id: 121,
    number: 121,
    title: "All Things Bright and Beautiful",
    category: "Children",
    author: "Cecil Frances Alexander",
    tune: "ROYAL OAK",
    chorus: "All things bright and beautiful, all creatures great and small,\nAll things wise and wonderful, the Lord God made them all.",
    verses: [
      "Each little flower that opens, each little bird that sings,\nHe made their glowing colors, He made their tiny wings.",
      "The purple-headed mountain, the river running by,\nThe sunset, and the morning that brightens up the sky.",
      "The cold wind in the winter, the pleasant summer sun,\nThe ripe fruits in the garden, He made them every one.",
      "The tall trees in the greenwood, the meadows where we play,\nThe rushes by the water, we gather every day."
    ]
  },
  {
    id: 122,
    number: 122,
    title: "For the Beauty of the Earth",
    category: "Praise",
    author: "Folliott Pierpoint",
    tune: "DIX",
    chorus: "Lord of all, to Thee we raise this our hymn of grateful praise.",
    verses: [
      "For the beauty of the earth, for the glory of the skies,\nFor the love which from our birth over and around us lies.",
      "For the beauty of each hour of the day and of the night,\nHill and vale, and tree and flower, sun and moon, and stars of light.",
      "For the joy of human love, brother, sister, parent, child,\nFriends on earth and friends above, for all gentle thoughts and mild.",
      "For Thy church, that evermore lifteth holy hands above,\nOffering up on every shore her pure sacrifice of love."
    ]
  },
  {
    id: 123,
    number: 123,
    title: "Now Thank We All Our God",
    category: "Praise",
    author: "Martin Rinkart",
    tune: "NUN DANKET",
    verses: [
      "Now thank we all our God, with heart and hands and voices,\nWho wondrous things has done, in whom His world rejoices.",
      "Who from our mothers' arms has blessed us on our way\nWith countless gifts of love, and still is ours today.",
      "O may this bounteous God through all our life be near us,\nWith ever joyful hearts and blessed peace to cheer us.",
      "And keep us in His grace, and guide us when perplexed,\nAnd free us from all ills in this world and the next."
    ]
  },
  {
    id: 124,
    number: 124,
    title: "Praise the Lord! Ye Heavens, Adore Him",
    category: "Praise",
    author: "Anonymous",
    tune: "AUSTRIA",
    verses: [
      "Praise the Lord! ye heavens, adore Him; praise Him, angels, in the height;\nSun and moon, rejoice before Him; praise Him, all ye stars and light.",
      "Praise the Lord! for He hath spoken; worlds His mighty voice obeyed;\nLaws which never shall be broken for their guidance hath He made.",
      "Praise the Lord! for He is glorious; never shall His promise fail;\nGod hath made His saints victorious, sin and death shall not prevail.",
      "Praise the God of our salvation; hosts on high, His power proclaim;\nHeaven and earth and all creation, laud and magnify His name."
    ]
  },
  {
    id: 125,
    number: 125,
    title: "Rejoice, the Lord Is King",
    category: "Praise",
    author: "Charles Wesley",
    tune: "DARWALL'S 148TH",
    chorus: "Lift up your heart, lift up your voice! Rejoice, again I say, rejoice!",
    verses: [
      "Rejoice, the Lord is King: Your Lord and King adore!\nMortals, give thanks and sing, and triumph evermore.",
      "Jesus, the Savior, reigns, the God of truth and love;\nWhen He had purged our stains, He took His seat above.",
      "His kingdom cannot fail, He rules o'er earth and heaven;\nThe keys of death and hell are to our Jesus given.",
      "He sits at God's right hand till all His foes submit,\nAnd bow to His command, and fall beneath His feet."
    ]
  },
  {
    id: 126,
    number: 126,
    title: "Ye Servants of God, Your Master Proclaim",
    category: "Praise",
    author: "Charles Wesley",
    tune: "PADERBORN",
    verses: [
      "Ye servants of God, your Master proclaim, and publish abroad His wonderful name;\nThe name all-victorious of Jesus extol; His kingdom is glorious, and rules over all.",
      "God ruleth on high, almighty to save; and still He is nigh, His presence we have.",
      "The great congregation His triumph shall sing, ascribing salvation to Jesus our King.",
      "Salvation to God who sits on the throne! Let all cry aloud and honor the Son."
    ]
  },
  {
    id: 127,
    number: 127,
    title: "All People That on Earth Do Dwell",
    category: "Worship",
    author: "William Kethe",
    tune: "OLD HUNDREDTH",
    verses: [
      "All people that on earth do dwell, sing to the Lord with cheerful voice;\nHim serve with fear, His praise forth tell, come ye before Him and rejoice.",
      "The Lord, ye know, is God indeed; without our aid He did us make;\nWe are His folk, He doth us feed, and for His sheep He doth us take.",
      "O enter then His gates with praise, approach with joy His courts unto;\nPraise, laud, and bless His name always, for it is seemly so to do.",
      "For why? The Lord our God is good; His mercy is forever sure;\nHis truth at all times firmly stood, and shall from age to age endure."
    ]
  },
  {
    id: 128,
    number: 128,
    title: "O God of Bethel, by Whose Hand",
    category: "Morning",
    author: "Philip Doddridge",
    tune: "SALZBURG",
    verses: [
      "O God of Bethel, by whose hand Thy people still are fed;\nWho through this weary pilgrimage hast all our fathers led.",
      "Our vows, our prayers, we now present before Thy throne of grace;\nGod of our fathers, be the God of their succeeding race.",
      "Through each perplexing path of life our wandering footsteps guide;\nGive us each day our daily bread, and raiment fit provide.",
      "O spread Thy covering wings around, till all our wanderings cease,\nAnd at our Father's loved abode our souls arrive in peace."
    ]
  },
  {
    id: 129,
    number: 129,
    title: "Praise to the Holiest in the Height",
    category: "Praise",
    author: "John Henry Newman",
    tune: "GERONTIUS",
    verses: [
      "Praise to the Holiest in the height, and in the depth be praise;\nIn all His words most wonderful, most sure in all His ways.",
      "O loving wisdom of our God! When all was sin and shame,\nA second Adam to the fight and to the rescue came.",
      "O wisest love! that flesh and blood, which did in Adam fail,\nShould strive afresh against the foe, should strive and should prevail.",
      "And that a higher gift than grace should flesh and blood refine,\nGod's presence and His very self, and essence all-divine."
    ]
  },
  {
    id: 130,
    number: 130,
    title: "The Head That Once Was Crowned with Thorns",
    category: "Worship",
    author: "Thomas Kelly",
    tune: "ST. MAGNUS",
    verses: [
      "The head that once was crowned with thorns is crowned with glory now;\nA royal diadem adorns the mighty Victor's brow.",
      "The highest place that heaven affords is His, is His by right,\nThe King of kings and Lord of lords, and heaven's eternal Light.",
      "The Joy of all who dwell above, the Joy of all below,\nTo whom He manifests His love and grants His name to know.",
      "To them the cross with all its shame, with all its grace is given;\nTheir name an everlasting name, their joy the joy of heaven."
    ]
  },
  {
    id: 131,
    number: 131,
    title: "To the Name of Our Salvation",
    category: "Worship",
    author: "John Mason Neale",
    tune: "ORIEL",
    verses: [
      "To the name of our salvation laud and honor let us pay,\nWhich for many a generation hid in God's foreknowledge lay.",
      "Jesus is the name we treasure, name all other names above;\nName of gladness, name of pleasure, name of infinite love.",
      "Name of sweetness, name of blessing, name of power and high degree;\nName all other names surpassing, name of the blest Trinity.",
      "Therefore we in love adoring, this most blessed name revere;\nHoly help for all imploring, who in faith invoke it here."
    ]
  },
  {
    id: 132,
    number: 132,
    title: "At the Name of Jesus",
    category: "Worship",
    author: "Caroline Noel",
    tune: "EVELYNS",
    verses: [
      "At the name of Jesus every knee shall bow, every tongue confess Him King of glory now.",
      "'Tis the Father's pleasure we should call Him Lord, who from the beginning was the mighty Word.",
      "Humbled for a season, to receive a name from the lips of sinners unto whom He came.",
      "Faithfully He bore it spotless to the last, brought it back victorious when from death He passed."
    ]
  },
  {
    id: 133,
    number: 133,
    title: "Hail to the Lord's Anointed",
    category: "Praise",
    author: "James Montgomery",
    tune: "CRÜGER",
    verses: [
      "Hail to the Lord's Anointed, great David's greater Son!\nHail, in the time appointed, His reign on earth begun!",
      "He comes to break oppression, to set the captive free,\nTo take away transgression, and rule in equity.",
      "He comes with succor speedy to those who suffer wrong;\nTo help the poor and needy, and bid the weak be strong.",
      "To give them songs for sighing, their darkness turn to light,\nWhose souls, condemned and dying, were precious in His sight."
    ]
  },
  {
    id: 134,
    number: 134,
    title: "O for a Heart to Praise My God",
    category: "Dedication",
    author: "Charles Wesley",
    tune: "STOCKTON",
    verses: [
      "O for a heart to praise my God, a heart from sin set free;\nA heart that always feels Thy blood so freely shed for me.",
      "A heart resigned, submissive, meek, my great Redeemer's throne;\nWhere only Christ is heard to speak, where Jesus reigns alone.",
      "A humble, lowly, contrite heart, believing, true, and clean;\nWhich neither life nor death can part from Him that dwells within.",
      "A heart in every thought renewed, and full of love divine;\nPerfect, and right, and pure, and good, a copy, Lord, of Thine!"
    ]
  },
  {
    id: 135,
    number: 135,
    title: "Soldiers of Christ, Arise",
    category: "Dedication",
    author: "Charles Wesley",
    tune: "ST. ETHELWALD",
    verses: [
      "Soldiers of Christ, arise, and put your armor on,\nStrong in the strength which God supplies through His eternal Son.",
      "Strong in the Lord of hosts, and in His mighty power;\nWho in the strength of Jesus trusts is more than conqueror.",
      "Stand then in His great might, with all His strength endued;\nAnd take, to arm you for the fight, the panoply of God.",
      "That having all things done, and all your conflicts passed,\nYou may o'ercome through Christ alone, and stand entire at last."
    ]
  },
  {
    id: 136,
    number: 136,
    title: "Fight the Good Fight",
    category: "Dedication",
    author: "John Monsell",
    tune: "DUKE STREET",
    verses: [
      "Fight the good fight with all thy might, Christ is thy strength and Christ thy right;\nLay hold on life, and it shall be thy joy and crown eternally.",
      "Run the straight race through God's good grace, lift up thine eyes and seek His face;\nLife with its way before us lies, Christ is the path and Christ the prize.",
      "Cast care aside, lean on thy Guide; His boundless mercy will provide;\nLean, and the trusting soul shall prove Christ is its life and Christ its love.",
      "Faint not nor fear, His arms are near; He changeth not, and thou art dear;\nOnly believe, and thou shalt see that Christ is all in all to thee."
    ]
  },
  {
    id: 137,
    number: 137,
    title: "O Jesus, I Have Promised",
    category: "Confirmation",
    author: "John Bode",
    tune: "ANGEL'S STORY",
    verses: [
      "O Jesus, I have promised to serve Thee to the end;\nBe Thou forever near me, my Master and my Friend.",
      "I shall not fear the battle if Thou art by my side,\nNor wander from the pathway if Thou wilt be my Guide.",
      "O let me feel Thee near me! The world is ever near;\nI see the sights that dazzle, the tempting sounds I hear.",
      "My foes are ever near me, around me and within;\nBut, Jesus, draw Thou nearer, and shield my soul from sin."
    ]
  },
  {
    id: 138,
    number: 138,
    title: "New Every Morning Is the Love",
    category: "Morning",
    author: "John Keble",
    tune: "MELCOMBE",
    verses: [
      "New every morning is the love our wakening and uprising prove;\nThrough sleep and darkness safely brought, restored to life and power and thought.",
      "New mercies, each returning day, hover around us while we pray;\nNew perils past, new sins forgiven, new thoughts of God, new hopes of heaven.",
      "If on our daily course our mind be set to hallow all we find,\nNew treasures still, of countless price, God will provide for sacrifice.",
      "The trivial round, the common task, will furnish all we ought to ask;\nRoom to deny ourselves, a road to bring us daily nearer God."
    ]
  },
  {
    id: 139,
    number: 139,
    title: "Awake, My Soul, and with the Sun",
    category: "Morning",
    author: "Thomas Ken",
    tune: "MORNING HYMN",
    verses: [
      "Awake, my soul, and with the sun thy daily stage of duty run;\nShake off dull sloth, and joyful rise to pay thy morning sacrifice.",
      "Thy precious time misspent, redeem, each present day thy last esteem;\nImprove thy talent with due care; for the great day thyself prepare.",
      "In conversation be sincere; keep conscience as the noontide clear;\nThink how all-seeing God thy ways and all thy secret thoughts surveys.",
      "By influence of the light divine let thy own light to others shine;\nReflect all heaven's propitious rays in ardent love and cheerful praise."
    ]
  },
  {
    id: 140,
    number: 140,
    title: "Glory to Thee, My God, This Night",
    category: "Evening",
    author: "Thomas Ken",
    tune: "TALLIS' CANON",
    verses: [
      "Glory to Thee, my God, this night, for all the blessings of the light;\nKeep me, O keep me, King of kings, beneath Thine own almighty wings.",
      "Forgive me, Lord, for Thy dear Son, the ill that I this day have done;\nThat with the world, myself, and Thee, I, ere I sleep, at peace may be.",
      "Teach me to live, that I may dread the grave as little as my bed;\nTeach me to die, that so I may rise glorious at the awful day.",
      "O may my soul on Thee repose, and may sweet sleep mine eyelids close;\nSleep that shall me more vigorous make to serve my God when I awake."
    ]
  },
  {
    id: 141,
    number: 141,
    title: "The Day Thou Gavest, Lord, Is Ended",
    category: "Evening",
    author: "John Ellerton",
    tune: "ST. CLEMENT",
    verses: [
      "The day Thou gavest, Lord, is ended, the darkness falls at Thy behest;\nTo Thee our morning hymns ascended, Thy praise shall sanctify our rest.",
      "We thank Thee that Thy church unsleeping, while earth rolls onward into light,\nThrough all the world her watch is keeping, and rests not now by day or night.",
      "As o'er each continent and island the dawn leads on another day,\nThe voice of prayer is never silent, nor dies the strain of praise away.",
      "The sun that bids us rest is waking our brethren 'neath the western sky,\nAnd hour by hour fresh lips are making Thy wondrous doings heard on high."
    ]
  },
  {
    id: 142,
    number: 142,
    title: "God That Madest Earth and Heaven",
    category: "Evening",
    author: "Reginald Heber",
    tune: "AR HYD NOS",
    verses: [
      "God, that madest earth and heaven, darkness and light;\nWho the day for toil hast given, for rest the night.",
      "May Thine angel guards defend us, slumber sweet Thy mercy send us,\nHoly dreams and hopes attend us, this livelong night.",
      "Guard us waking, guard us sleeping, and, when we die,\nMay we in Thy mighty keeping, all peaceful lie.",
      "When the last dread call shall wake us, do not Thou, our God, forsake us,\nBut to reign in glory take us with Thee on high."
    ]
  },
  {
    id: 143,
    number: 143,
    title: "O Strength and Stay Upholding All Creation",
    category: "Evening",
    author: "John Ellerton",
    tune: "STRENGTH AND STAY",
    verses: [
      "O Strength and Stay upholding all creation, who ever dost Thyself unmoved abide.",
      "Yet kindlest all the day in its gradation, and guidest every change of eventide.",
      "Life of all life, Thy creatures' only stay, O grant us light at evening time of day.",
      "Grant to life's day a calm unclouded ending, an eve untouched by shadows of decay."
    ]
  },
  {
    id: 144,
    number: 144,
    title: "The Radiant Morn Hath Passed Away",
    category: "Evening",
    author: "Godfrey Thring",
    tune: "ST. GABRIEL",
    verses: [
      "The radiant morn hath passed away, and spent too soon her golden store;\nThe shadows of departing day are lengthening on her ocean shore.",
      "Our life is but a fading dawn, its glorious noon how quickly past;\nLead us, O Christ, when all is gone, safe home at last.",
      "Where light, and life, and joy, and peace in undivided empire reign,\nAnd thronging angels never cease their deathless strain.",
      "Where saints are clothed in spotless white, and evening shadows never fall,\nWhere Thou, Eternal Light of Light, art Lord of all."
    ]
  },
  {
    id: 145,
    number: 145,
    title: "O Worship the King All-Glorious Above",
    category: "Worship",
    author: "Robert Grant",
    tune: "HANOVER",
    verses: [
      "O worship the King all-glorious above, O gratefully sing His power and His love.",
      "Our Shield and Defender, the Ancient of Days, pavilioned in splendor and girded with praise.",
      "O tell of His might, O sing of His grace, whose robe is the light, whose canopy space.",
      "His chariots of wrath the deep thunderclouds form, and dark is His path on the wings of the storm."
    ]
  },
  {
    id: 146,
    number: 146,
    title: "Come, Thou Long-Expected Jesus",
    category: "Worship",
    author: "Charles Wesley",
    tune: "CROSS OF JESUS",
    verses: [
      "Come, Thou long-expected Jesus, born to set Thy people free.",
      "From our fears and sins release us, let us find our rest in Thee.",
      "Israel's Strength and Consolation, Hope of all the earth Thou art.",
      "Dear Desire of every nation, Joy of every longing heart."
    ]
  },
  {
    id: 147,
    number: 147,
    title: "Lo! He Comes with Clouds Descending",
    category: "Worship",
    author: "Charles Wesley",
    tune: "HELMSLEY",
    verses: [
      "Lo! He comes with clouds descending, once for favored sinners slain.",
      "Thousand thousand saints attending swell the triumph of His train.",
      "Alleluia! Alleluia! God appears on earth to reign.",
      "Every eye shall now behold Him, robed in dreadful majesty."
    ]
  },
  {
    id: 148,
    number: 148,
    title: "O Come, O Come, Emmanuel",
    category: "Worship",
    author: "John Mason Neale",
    tune: "VENI EMMANUEL",
    verses: [
      "O come, O come, Emmanuel, and ransom captive Israel.",
      "That mourns in lonely exile here, until the Son of God appear.",
      "Rejoice! Rejoice! Emmanuel shall come to thee, O Israel.",
      "O come, Thou Dayspring, come and cheer our spirits by Thine advent here."
    ]
  },
  {
    id: 149,
    number: 149,
    title: "Hark! A Thrilling Voice Is Sounding",
    category: "Worship",
    author: "Edward Caswall",
    tune: "MERTON",
    verses: [
      "Hark! a thrilling voice is sounding; 'Christ is nigh,' it seems to say.",
      "'Cast away the works of darkness, O ye children of the day.'",
      "Wakened by the solemn warning, let the earth-bound soul arise.",
      "Christ, her Sun, all sloth expelling, shines upon the morning skies."
    ]
  },
  {
    id: 150,
    number: 150,
    title: "On Jordan's Bank the Baptist's Cry",
    category: "Worship",
    author: "John Chandler",
    tune: "WINCHESTER NEW",
    verses: [
      "On Jordan's bank the Baptist's cry announces that the Lord is nigh.",
      "Awake and hearken, for he brings glad tidings of the King of kings.",
      "Then cleansed be every breast from sin; make straight the way for God within.",
      "Prepare we in our hearts a home, where such a mighty Guest may come."
    ]
  },
  {
    id: 151,
    number: 151,
    title: "The Advent of Our King",
    category: "Worship",
    author: "Charles Coffin",
    tune: "ST. THOMAS",
    verses: [
      "The advent of our King our prayers must now employ.",
      "Then let us meet Him on the road with songs of holy joy.",
      "The everlasting Son incarnate deigns to be.",
      "Himself a servant's form puts on, to set His people free."
    ]
  },
  {
    id: 152,
    number: 152,
    title: "While Shepherds Watched Their Flocks",
    category: "Worship",
    author: "Nahum Tate",
    tune: "WINCHESTER OLD",
    verses: [
      "While shepherds watched their flocks by night, all seated on the ground.",
      "The angel of the Lord came down, and glory shone around.",
      "'Fear not,' said he, for mighty dread had seized their troubled mind.",
      "'Glad tidings of great joy I bring to you and all mankind.'"
    ]
  },
  {
    id: 153,
    number: 153,
    title: "Once in Royal David's City",
    category: "Children",
    author: "Cecil Frances Alexander",
    tune: "IRBY",
    verses: [
      "Once in royal David's city stood a lowly cattle shed.",
      "Where a mother laid her baby in a manger for His bed.",
      "Mary was that mother mild, Jesus Christ her little child.",
      "He came down to earth from heaven who is God and Lord of all."
    ]
  },
  {
    id: 154,
    number: 154,
    title: "Silent Night, Holy Night",
    category: "Evening",
    author: "Joseph Mohr",
    tune: "STILLE NACHT",
    verses: [
      "Silent night, holy night, all is calm, all is bright.",
      "Round yon virgin mother and child, holy infant so tender and mild.",
      "Sleep in heavenly peace, sleep in heavenly peace.",
      "Silent night, holy night, shepherds quake at the sight."
    ]
  },
  {
    id: 155,
    number: 155,
    title: "God Rest You Merry, Gentlemen",
    category: "Worship",
    author: "Traditional English Carol",
    tune: "GOD REST YOU MERRY",
    verses: [
      "God rest you merry, gentlemen, let nothing you dismay.",
      "Remember Christ our Savior was born on Christmas Day.",
      "To save us all from Satan's power when we were gone astray.",
      "O tidings of comfort and joy, comfort and joy, O tidings of comfort and joy."
    ]
  },
  {
    id: 156,
    number: 156,
    title: "Angels from the Realms of Glory",
    category: "Worship",
    author: "James Montgomery",
    tune: "IRIS",
    verses: [
      "Angels from the realms of glory, wing your flight o'er all the earth.",
      "Ye who sang creation's story, now proclaim Messiah's birth.",
      "Come and worship, come and worship, worship Christ, the newborn King!",
      "Shepherds in the fields abiding, watching o'er your flocks by night."
    ]
  },
  {
    id: 157,
    number: 157,
    title: "Christians, Awake! Salute the Happy Morn",
    category: "Worship",
    author: "John Byrom",
    tune: "YORKSHIRE",
    verses: [
      "Christians, awake! salute the happy morn whereon the Savior of the world was born.",
      "Rise to adore the mystery of love, which hosts of angels chanted from above.",
      "With them the joyful tidings first begun of God incarnate and the Virgin's Son.",
      "Then to the watchful shepherds it was told, who heard th' angelic herald's voice: 'Behold!'"
    ]
  },
  {
    id: 158,
    number: 158,
    title: "As with Gladness Men of Old",
    category: "Worship",
    author: "William Chatterton Dix",
    tune: "DIX",
    verses: [
      "As with gladness men of old did the guiding star behold.",
      "As with joy they hailed its light, leading onward, beaming bright.",
      "So, most gracious Lord, may we evermore be led to Thee.",
      "As with joyful steps they sped to that lowly manger bed."
    ]
  },
  {
    id: 159,
    number: 159,
    title: "Brightest and Best of the Sons of the Morning",
    category: "Worship",
    author: "Reginald Heber",
    tune: "EPIPHANY",
    verses: [
      "Brightest and best of the sons of the morning, dawn on our darkness and lend us thine aid.",
      "Star of the East, the horizon adorning, guide where our infant Redeemer is laid.",
      "Cold on His cradle the dewdrops are shining, low lies His head with the beasts of the stall.",
      "Angels adore Him in slumber reclining, Maker and Monarch and Savior of all."
    ]
  },
  {
    id: 160,
    number: 160,
    title: "Earth Has Many a Noble City",
    category: "Worship",
    author: "Aurelius Prudentius",
    tune: "STUTTGART",
    verses: [
      "Earth has many a noble city; Bethlehem, thou dost all excel.",
      "Out of thee the Lord from heaven came to rule His Israel.",
      "Fairer than the sun at morning was the star that beamed on high.",
      "Which confessed the Lord incarnate, and proclaimed their King was nigh."
    ]
  },
  {
    id: 161,
    number: 161,
    title: "Hail, Thou Source of Every Blessing",
    category: "Worship",
    author: "Basil Woodd",
    tune: "STUTTGART",
    verses: [
      "Hail, Thou source of every blessing, sovereign Father of mankind!",
      "Gentiles now, Thy grace possessing, in Thy courts admission find.",
      "Gratefully we bend before Thee, in Thy church obtain a place.",
      "Now by faith behold Thy glory, praise Thy truth, adoring Thy grace."
    ]
  },
  {
    id: 162,
    number: 162,
    title: "Songs of Thankfulness and Praise",
    category: "Praise",
    author: "Christopher Wordsworth",
    tune: "ST. EDMUND",
    verses: [
      "Songs of thankfulness and praise, Jesus, Lord, to Thee we raise.",
      "Manifested by the star to the sages from afar.",
      "Branch of royal David's stem in Thy birth at Bethlehem.",
      "Anthems be to Thee addressed, God in man made manifest."
    ]
  },
  {
    id: 163,
    number: 163,
    title: "Alleluia, Song of Sweetness",
    category: "Praise",
    author: "John Mason Neale",
    tune: "TANTUM ERGO",
    verses: [
      "Alleluia, song of sweetness, voice of joy that cannot die.",
      "Alleluia is the anthem ever dear to choirs on high.",
      "In the house of God abiding thus they sing eternally.",
      "Alleluia, thou resoundest, true Jerusalem and free."
    ]
  },
  {
    id: 164,
    number: 164,
    title: "Forty Days and Forty Nights",
    category: "Passion",
    author: "George Smyttan",
    tune: "HEINLEIN",
    verses: [
      "Forty days and forty nights Thou wast fasting in the wild.",
      "Forty days and forty nights tempted, and yet undefiled.",
      "Sunbeams scorching all the day; chilly dewdrops nightly shed.",
      "Prowling beasts about Thy way; stones Thy pillow, earth Thy bed."
    ]
  },
  {
    id: 165,
    number: 165,
    title: "Lord, in This Thy Mercy's Day",
    category: "Passion",
    author: "Isaac Williams",
    tune: "ST. PHILIP",
    verses: [
      "Lord, in this Thy mercy's day, ere it pass for aye away.",
      "On our knees we fall and pray.",
      "Holy Jesus, grant us tears, fill us with adoring fears.",
      "Ere that awful day appears."
    ]
  },
  {
    id: 166,
    number: 166,
    title: "O Kind Creator, Bow Thine Ear",
    category: "Passion",
    author: "Thomas Lacey",
    tune: "AUDI BENIGNE CONDITOR",
    verses: [
      "O kind Creator, bow Thine ear to marks of sorrow, sighs and prayer.",
      "Which in this holy fast of Lent we pray Thee, Lord, to us present.",
      "Our hearts are open, Lord, to Thee; Thou knowest our infirmity.",
      "Pour out on all who seek Thy face the abundance of Thy pardoning grace."
    ]
  },
  {
    id: 167,
    number: 167,
    title: "The Glory of These Forty Days",
    category: "Passion",
    author: "Maurice Bell",
    tune: "ERHALT UNS, HERR",
    verses: [
      "The glory of these forty days we celebrate with songs of praise.",
      "For Christ, by whom all things were made, Himself has fasted and has prayed.",
      "Alone and fasting Moses saw the loving God who gave the law.",
      "And to Elijah, fasting, came the steeds and chariots of flame."
    ]
  },
  {
    id: 168,
    number: 168,
    title: "All Glory, Laud and Honor",
    category: "Praise",
    author: "Theodulph of Orleans",
    tune: "ST. THEODULPH",
    verses: [
      "All glory, laud and honor to Thee, Redeemer, King!",
      "To whom the lips of children made sweet hosannas ring.",
      "Thou art the King of Israel, Thou David's royal Son.",
      "Who in the Lord's name comest, the King and Blessed One."
    ]
  },
  {
    id: 169,
    number: 169,
    title: "Ride On! Ride On in Majesty!",
    category: "Passion",
    author: "Henry Milman",
    tune: "WINCHESTER NEW",
    verses: [
      "Ride on! ride on in majesty! Hark! all the tribes Hosanna cry.",
      "O Savior meek, pursue Thy road with palms and scattered garments strowed.",
      "Ride on! ride on in majesty! In lowly pomp ride on to die.",
      "O Christ, Thy triumphs now begin o'er captive death and conquered sin."
    ]
  },
  {
    id: 170,
    number: 170,
    title: "My Song Is Love Unknown",
    category: "Passion",
    author: "Samuel Crossman",
    tune: "LOVE UNKNOWN",
    verses: [
      "My song is love unknown, my Savior's love to me.",
      "Love to the loveless shown, that they might lovely be.",
      "O who am I, that for my sake my Lord should take frail flesh and die?",
      "He came from His blest throne salvation to bestow."
    ]
  },
  {
    id: 171,
    number: 171,
    title: "O Sacred Head, Sore Wounded",
    category: "Passion",
    author: "Paul Gerhardt",
    tune: "PASSION CHORALE",
    verses: [
      "O sacred head, sore wounded, with grief and shame weighed down.",
      "Now scornfully surrounded with thorns, Thine only crown.",
      "O sacred head, what glory, what bliss till now was Thine!",
      "Yet, though despised and gory, I joy to call Thee mine."
    ]
  },
  {
    id: 172,
    number: 172,
    title: "Were You There When They Crucified My Lord?",
    category: "Passion",
    author: "African American Spiritual",
    tune: "WERE YOU THERE",
    verses: [
      "Were you there when they crucified my Lord?",
      "Were you there when they crucified my Lord?",
      "O! Sometimes it causes me to tremble, tremble, tremble.",
      "Were you there when they crucified my Lord?"
    ]
  },
  {
    id: 173,
    number: 173,
    title: "Jesus Christ Is Risen Today",
    category: "Resurrection",
    author: "Charles Wesley",
    tune: "EASTER HYMN",
    verses: [
      "Jesus Christ is risen today, Alleluia!",
      "Our triumphant holy day, Alleluia!",
      "Who did once upon the cross, Alleluia!",
      "Suffer to redeem our loss, Alleluia!"
    ]
  },
  {
    id: 174,
    number: 174,
    title: "The Day of Resurrection!",
    category: "Resurrection",
    author: "John Mason Neale",
    tune: "ELLACOMBE",
    verses: [
      "The day of resurrection! Earth, tell it out abroad.",
      "The passover of gladness, the passover of God.",
      "From death to life eternal, from earth unto the sky.",
      "Our Christ hath brought us over with hymns of victory."
    ]
  },
  {
    id: 175,
    number: 175,
    title: "Ye Choirs of New Jerusalem",
    category: "Resurrection",
    author: "Robert Campbell",
    tune: "ST. FULBERT",
    verses: [
      "Ye choirs of new Jerusalem, your sweetest notes employ.",
      "The paschal victory to hymn in strains of holy joy.",
      "For Judah's Lion bursts His chains, crushing the serpent's head.",
      "And cries aloud through death's domains to wake the imprisoned dead."
    ]
  },
  {
    id: 176,
    number: 176,
    title: "Alleluia! Alleluia! Hearts to Heaven and Voices Raise",
    category: "Praise",
    author: "Christopher Wordsworth",
    tune: "LUX EOI",
    verses: [
      "Alleluia! Alleluia! Hearts to heaven and voices raise.",
      "Sing to God a hymn of gladness, sing to God a hymn of praise.",
      "He who on the cross as Savior for the world's salvation bled.",
      "Jesus Christ, the King of Glory, now is risen from the dead."
    ]
  },
  {
    id: 177,
    number: 177,
    title: "The Strife Is O'er, the Battle Done",
    category: "Resurrection",
    author: "Francis Pott",
    tune: "VICTORY",
    verses: [
      "The strife is o'er, the battle done; the victory of life is won.",
      "The song of triumph has begun. Alleluia!",
      "The powers of death have done their worst, but Christ their legions hath dispersed.",
      "Let shout of holy joy outburst. Alleluia!"
    ]
  },
  {
    id: 178,
    number: 178,
    title: "Hail the Day That Sees Him Rise",
    category: "Resurrection",
    author: "Charles Wesley",
    tune: "LLANFAIR",
    verses: [
      "Hail the day that sees Him rise, Alleluia! To His throne above the skies, Alleluia!",
      "Christ, awhile to mortals given, Alleluia! Re-ascends His native heaven, Alleluia!",
      "There the glorious triumph waits, Alleluia! Lift your heads, eternal gates, Alleluia!",
      "Wide unfold the radiant scene, Alleluia! Take the King of Glory in, Alleluia!"
    ]
  },
  {
    id: 179,
    number: 179,
    title: "See the Conqueror Mounts in Triumph",
    category: "Resurrection",
    author: "Christopher Wordsworth",
    tune: "REX GLORIAE",
    verses: [
      "See the Conqueror mounts in triumph; see the King in royal state.",
      "Riding on the clouds His chariot to His heavenly palace gate.",
      "Hark! the choirs of angel voices joyful alleluias sing.",
      "And the portals high are lifted to receive their heavenly King."
    ]
  },
  {
    id: 180,
    number: 180,
    title: "Come, Holy Ghost, Our Souls Inspire",
    category: "Worship",
    author: "John Cosin",
    tune: "VENI CREATOR",
    verses: [
      "Come, Holy Ghost, our souls inspire, and lighten with celestial fire.",
      "Thou the anointing Spirit art, who dost Thy sevenfold gifts impart.",
      "Thy blessed unction from above is comfort, life, and fire of love.",
      "Enable with perpetual light the dullness of our blinded sight."
    ]
  },
  {
    id: 181,
    number: 181,
    title: "Our Blest Redeemer, Ere He Breathed",
    category: "Worship",
    author: "Harriet Auber",
    tune: "ST. CUTHBERT",
    verses: [
      "Our blest Redeemer, ere He breathed His tender last farewell.",
      "A Guide, a Comforter, bequeathed with us to dwell.",
      "He came sweet influence to impart, a gracious, willing Guest.",
      "While He can find one humble heart wherein to rest."
    ]
  },
  {
    id: 182,
    number: 182,
    title: "Spirit of Mercy, Truth and Love",
    category: "Worship",
    author: "Anonymous",
    tune: "MELCOMBE",
    verses: [
      "Spirit of mercy, truth and love, O shed Thine influence from above.",
      "And still from age to age convey the wonders of this sacred day.",
      "In every clime, by every tongue, be God's surpassing glory sung.",
      "Let all the listening earth be taught the acts our great Redeemer wrought."
    ]
  },
  {
    id: 183,
    number: 183,
    title: "Bright the Vision That Delighted",
    category: "Worship",
    author: "Richard Mant",
    tune: "REDHEAD NO. 46",
    verses: [
      "Bright the vision that delighted once the sight of Judah's seer.",
      "Sweet the countless tongues united to entrance the prophet's ear.",
      "Round the Lord in glory seated, cherubim and seraphim.",
      "Filled His temple, and repeated each to each th' alternate hymn."
    ]
  },
  {
    id: 184,
    number: 184,
    title: "Firmly I Believe and Truly",
    category: "Dedication",
    author: "John Henry Newman",
    tune: "HALTON HOLGATE",
    verses: [
      "Firmly I believe and truly God is Three, and God is One.",
      "And I next acknowledge duly manhood taken by the Son.",
      "And I trust and hope most fully in that Manhood crucified.",
      "And each thought and deed unruly do to death, as He has died."
    ]
  },
  {
    id: 185,
    number: 185,
    title: "City of God, How Broad and Far",
    category: "Worship",
    author: "Samuel Johnson",
    tune: "RICHMOND",
    verses: [
      "City of God, how broad and far outspread thy walls sublime!",
      "The gates of hell can never mar thy triumph through all time.",
      "One holy Church, one army strong, one steadfast, high design.",
      "One word of triumph in her song, one Spirit all-divine."
    ]
  },
  {
    id: 186,
    number: 186,
    title: "I Love Thy Kingdom, Lord",
    category: "Worship",
    author: "Timothy Dwight",
    tune: "ST. THOMAS",
    verses: [
      "I love Thy kingdom, Lord, the house of Thine abode.",
      "The church our blest Redeemer saved with His own precious blood.",
      "I love Thy church, O God, her walls before Thee stand.",
      "Dear as the apple of Thine eye, and graven on Thy hand."
    ]
  },
  {
    id: 187,
    number: 187,
    title: "Thy Kingdom Come, O God",
    category: "Worship",
    author: "Lewis Hensley",
    tune: "ST. CECILIA",
    verses: [
      "Thy kingdom come, O God, Thy rule, O Christ, begin.",
      "Break with Thine iron rod the tyrannies of sin.",
      "Where is Thy reign of peace, and purity, and love?",
      "When shall all hatred cease, as in the realms above?"
    ]
  },
  {
    id: 188,
    number: 188,
    title: "Christ Is Our Corner-Stone",
    category: "Worship",
    author: "John Chandler",
    tune: "HAREWOOD",
    verses: [
      "Christ is our corner-stone, on Him alone we build.",
      "With His true saints alone the courts of heaven are filled.",
      "On His great love our hopes we place of present grace and joys above.",
      "O then with hymns of praise these hallowed courts shall ring."
    ]
  },
  {
    id: 189,
    number: 189,
    title: "Christ Is Made the Sure Foundation",
    category: "Worship",
    author: "John Mason Neale",
    tune: "WESTMINSTER ABBEY",
    verses: [
      "Christ is made the sure foundation, Christ the head and corner-stone.",
      "Chosen of the Lord, and precious, binding all the church in one.",
      "Holy Zion's help forever, and her confidence alone.",
      "All that dedicated city, dearly loved of God on high."
    ]
  },
  {
    id: 190,
    number: 190,
    title: "Pleasant Are Thy Courts Above",
    category: "Worship",
    author: "Henry Francis Lyte",
    tune: "MAIDSTONE",
    verses: [
      "Pleasant are Thy courts above in the land of light and love.",
      "Pleasant are Thy courts below in this city of our woe.",
      "O my spirit longs and faints for the converse of Thy saints.",
      "For the brightness of Thy face, for Thy fullness, God of grace."
    ]
  },
  {
    id: 191,
    number: 191,
    title: "We Love the Place, O God",
    category: "Worship",
    author: "William Bullock",
    tune: "QUAM DILECTA",
    verses: [
      "We love the place, O God, wherein Thine honor dwells.",
      "The joy of Thine abode all earthly joy excels.",
      "It is the house of prayer, wherein Thy servants meet.",
      "And Thou, O Lord, art there Thy chosen flock to greet."
    ]
  },
  {
    id: 192,
    number: 192,
    title: "Blessed City, Heavenly Salem",
    category: "Worship",
    author: "John Mason Neale",
    tune: "ORIEL",
    verses: [
      "Blessed city, heavenly Salem, vision dear of peace and love.",
      "Who of living stones art builded in the height of heaven above.",
      "And, with angel hosts encircled, as a bride dost earthward move.",
      "From celestial realms descending, bridal glory round thee shed."
    ]
  },
  {
    id: 193,
    number: 193,
    title: "Jerusalem the Golden",
    category: "Worship",
    author: "John Mason Neale",
    tune: "EWING",
    verses: [
      "Jerusalem the golden, with milk and honey blest.",
      "Beneath thy contemplation sink heart and voice oppressed.",
      "I know not, O I know not what joys await us there.",
      "What radiancy of glory, what bliss beyond compare."
    ]
  },
  {
    id: 194,
    number: 194,
    title: "The Lord's My Shepherd, I'll Not Want",
    category: "Comfort",
    author: "Francis Rous",
    tune: "CRIMOND",
    verses: [
      "The Lord's my shepherd, I'll not want. He makes me down to lie in pastures green.",
      "He leadeth me the quiet waters by.",
      "My soul He doth restore again; and me to walk doth make.",
      "Within the paths of righteousness, e'en for His own name's sake."
    ]
  },
  {
    id: 195,
    number: 195,
    title: "God of Mercy, God of Grace",
    category: "Worship",
    author: "Henry Francis Lyte",
    tune: "HEATHLANDS",
    verses: [
      "God of mercy, God of grace, show the brightness of Thy face.",
      "Shine upon us, Savior, shine, fill Thy church with light divine.",
      "And Thy saving health extend unto earth's remotest end.",
      "Let the people praise Thee, Lord; be by all that live adored."
    ]
  },
  {
    id: 196,
    number: 196,
    title: "O God of Mercy, God of Might",
    category: "Worship",
    author: "Godfrey Thring",
    tune: "ST. HELEN",
    verses: [
      "O God of mercy, God of might, in love and pity infinite.",
      "Teach us, as ever in Thy sight, to live our life to Thee.",
      "And Thou who cam'st from above the pure celestial fire to impart.",
      "Kindle a flame of sacred love on the altar of our heart."
    ]
  },
  {
    id: 197,
    number: 197,
    title: "O Thou Who Camest from Above",
    category: "Worship",
    author: "Charles Wesley",
    tune: "HEREFORD",
    verses: [
      "O Thou who camest from above the pure celestial fire to impart.",
      "Kindle a flame of sacred love on the altar of my heart.",
      "There let it for Thy glory burn with inextinguishable blaze.",
      "And trembling to its source return in humble prayer and fervent praise."
    ]
  },
  {
    id: 198,
    number: 198,
    title: "Thine for Ever! God of Love",
    category: "Confirmation",
    author: "Mary Maude",
    tune: "NEWINGTON",
    verses: [
      "Thine for ever! God of love, hear us from Thy throne above.",
      "Thine for ever may we be, here and in eternity.",
      "Thine for ever! O how blest they who find in Thee their rest!",
      "Savior, Guardian, heavenly Friend, O defend us to the end."
    ]
  },
  {
    id: 199,
    number: 199,
    title: "Just As I Am, Without One Plea",
    category: "Communion",
    author: "Charlotte Elliott",
    tune: "SAFFRON WALDEN",
    verses: [
      "Just as I am, without one plea, but that Thy blood was shed for me.",
      "And that Thou bidd'st me come to Thee, O Lamb of God, I come, I come.",
      "Just as I am, and waiting not to rid my soul of one dark blot.",
      "To Thee whose blood can cleanse each spot, O Lamb of God, I come, I come."
    ]
  },
  {
    id: 200,
    number: 200,
    title: "Rock of Ages, Cleft for Me",
    category: "Passion",
    author: "Augustus Toplady",
    tune: "TOPLADY",
    verses: [
      "Rock of Ages, cleft for me, let me hide myself in Thee.",
      "Let the water and the blood, from Thy riven side which flowed.",
      "Be of sin the double cure, cleanse me from its guilt and power.",
      "Not the labors of my hands can fulfill Thy law's demands."
    ]
  },
  {
    id: 201,
    number: 201,
    title: "Jesu, Lover of My Soul",
    category: "Comfort",
    author: "Charles Wesley",
    tune: "ABERYSTWYTH",
    verses: [
      "Jesu, lover of my soul, let me to Thy bosom fly.",
      "While the nearer waters roll, while the tempest still is high.",
      "Hide me, O my Savior, hide, till the storm of life is past.",
      "Safe into the haven guide; O receive my soul at last."
    ]
  },
  {
    id: 202,
    number: 202,
    title: "Lead, Kindly Light, Amid the Encircling Gloom",
    category: "Morning",
    author: "John Henry Newman",
    tune: "LUX BENIGNA",
    verses: [
      "Lead, kindly Light, amid the encircling gloom, lead Thou me on!",
      "The night is dark, and I am far from home; lead Thou me on!",
      "Keep Thou my feet; I do not ask to see the distant scene.",
      "One step enough for me."
    ]
  },
  {
    id: 203,
    number: 203,
    title: "Peace, Perfect Peace, in This Dark World of Sin?",
    category: "Comfort",
    author: "Edward Bickersteth",
    tune: "PAX TECUM",
    verses: [
      "Peace, perfect peace, in this dark world of sin?",
      "The blood of Jesus whispers peace within.",
      "Peace, perfect peace, by thronging duties pressed?",
      "To do the will of Jesus, this is rest."
    ]
  },
  {
    id: 204,
    number: 204,
    title: "Abide with Me; Fast Falls the Eventide",
    category: "Evening",
    author: "Henry Francis Lyte",
    tune: "EVENTIDE",
    verses: [
      "Abide with me; fast falls the eventide; the darkness deepens; Lord, with me abide.",
      "When other helpers fail and comforts flee, Help of the helpless, O abide with me.",
      "Swift to its close ebbs out life's little day; earth's joys grow dim, its glories pass away.",
      "Change and decay in all around I see; O Thou who changest not, abide with me."
    ]
  },
  {
    id: 205,
    number: 205,
    title: "Sun of My Soul, Thou Savior Dear",
    category: "Evening",
    author: "John Keble",
    tune: "HURSLEY",
    verses: [
      "Sun of my soul, Thou Savior dear, it is not night if Thou be near.",
      "O may no earth-born cloud arise to hide Thee from Thy servant's eyes.",
      "When the soft dews of kindly sleep my weary eyelids gently steep.",
      "Be my last thought, how sweet to rest for ever on my Savior's breast."
    ]
  },
  {
    id: 206,
    number: 206,
    title: "In Christ Alone",
    category: "Worship",
    author: "Keith Getty",
    tune: "IN CHRIST ALONE",
    verses: [
      "In Christ alone my hope is found, He is my light, my strength, my song.",
      "This Cornerstone, this solid Ground, firm through the fiercest drought and storm.",
      "What heights of love, what depths of peace, when fears are stilled, when strivings cease!",
      "My Comforter, my All in All, here in the love of Christ I stand."
    ]
  },
  {
    id: 207,
    number: 207,
    title: "Lord of the Dance",
    category: "Praise",
    author: "Sydney Carter",
    tune: "LORD OF THE DANCE",
    verses: [
      "I danced in the morning when the world was begun.",
      "And I danced in the moon and the stars and the sun.",
      "And I came down from heaven and I danced on the earth.",
      "At Bethlehem I had My birth."
    ]
  },
  {
    id: 208,
    number: 208,
    title: "Make Me a Channel of Your Peace",
    category: "Comfort",
    author: "Sebastian Temple",
    tune: "PRAYER OF ST. FRANCIS",
    verses: [
      "Make me a channel of Your peace. Where there is hatred, let me bring Your love.",
      "Where there is injury, Your pardon, Lord, and where there's doubt, true faith in You.",
      "Make me a channel of Your peace. Where there's despair in life, let me bring hope.",
      "Where there is darkness, only light, and where there's sadness, ever joy."
    ]
  },
  {
    id: 209,
    number: 209,
    title: "O Lord My God (How Great Thou Art)",
    category: "Praise",
    author: "Carl Boberg",
    tune: "O STORE GUD",
    verses: [
      "O Lord my God, when I in awesome wonder consider all the worlds Thy hands have made.",
      "I see the stars, I hear the rolling thunder, Thy power throughout the universe displayed.",
      "Then sings my soul, my Savior God, to Thee: How great Thou art! How great Thou art!",
      "When through the woods and forest glades I wander, and hear the birds sing sweetly in the trees."
    ]
  },
  {
    id: 210,
    number: 210,
    title: "Tell Out, My Soul",
    category: "Praise",
    author: "Timothy Dudley-Smith",
    tune: "WOODLANDS",
    verses: [
      "Tell out, my soul, the greatness of the Lord!",
      "Unnumbered blessings give my spirit voice.",
      "Tender to me the promise of His Word; in God my Savior shall my heart rejoice.",
      "Tell out, my soul, the greatness of His name!"
    ]
  },
  {
    id: 211,
    number: 211,
    title: "The Day Thou Gavest",
    category: "Evening",
    author: "John Ellerton",
    tune: "ST. CLEMENT",
    verses: [
      "The day Thou gavest, Lord, is ended, the darkness falls at Thy behest.",
      "To Thee our morning hymns ascended, Thy praise shall sanctify our rest.",
      "We thank Thee that Thy Church unsleeping, while earth rolls onward into light.",
      "Through all the world her watch is keeping, and rests not now by day or night."
    ]
  },
  {
    id: 212,
    number: 212,
    title: "Eternal Father, Strong to Save",
    category: "Worship",
    author: "William Whiting",
    tune: "MELITA",
    verses: [
      "Eternal Father, strong to save, whose arm hath bound the restless wave.",
      "Who bidd'st the mighty ocean deep its own appointed limits keep.",
      "Oh, hear us when we cry to Thee, for those in peril on the sea!",
      "O Christ! Whose voice the waters heard and hushed their raging at Thy word."
    ]
  },
  {
    id: 213,
    number: 213,
    title: "Holy, Holy, Holy",
    category: "Morning",
    author: "Reginald Heber",
    tune: "NICAEA",
    verses: [
      "Holy, holy, holy! Lord God Almighty! Early in the morning our song shall rise to Thee.",
      "Holy, holy, holy, merciful and mighty! God in three Persons, blessed Trinity!",
      "Holy, holy, holy! All the saints adore Thee, casting down their golden crowns around the glassy sea.",
      "Cherubim and seraphim falling down before Thee, which wert, and art, and evermore shalt be."
    ]
  },
  {
    id: 214,
    number: 214,
    title: "I Heard the Voice of Jesus Say",
    category: "Comfort",
    author: "Horatius Bonar",
    tune: "KINGSFOLD",
    verses: [
      "I heard the voice of Jesus say, 'Come unto Me and rest.'",
      "Lay down, thou weary one, lay down thy head upon My breast.",
      "I came to Jesus as I was, weary and worn and sad.",
      "I found in Him a resting-place, and He has made me glad."
    ]
  },
  {
    id: 215,
    number: 215,
    title: "Immortal, Invisible",
    category: "Worship",
    author: "Walter Chalmers Smith",
    tune: "ST. DENIO",
    verses: [
      "Immortal, invisible, God only wise, in light inaccessible hid from our eyes.",
      "Most blessed, most glorious, the Ancient of Days, almighty, victorious, Thy great name we praise.",
      "Unresting, unhasting, and silent as light, nor wanting, nor wasting, Thou rulest in might.",
      "Thy justice like mountains high soaring above, Thy clouds which are fountains of goodness and love."
    ]
  },
  {
    id: 216,
    number: 216,
    title: "Lead Us, Heavenly Father",
    category: "Morning",
    author: "James Edmeston",
    tune: "MANNHEIM",
    verses: [
      "Lead us, heavenly Father, lead us o'er the world's tempestuous sea.",
      "Guard us, guide us, keep us, feed us, for we have no help but Thee.",
      "Yet possessing every blessing, if our God our Father be.",
      "Savior, breathe forgiveness o'er us; all our weakness Thou dost know."
    ]
  },
  {
    id: 217,
    number: 217,
    title: "Love Divine",
    category: "Worship",
    author: "Charles Wesley",
    tune: "HYFRYDOL",
    verses: [
      "Love divine, all loves excelling, joy of heaven, to earth come down.",
      "Fix in us Thy humble dwelling, all Thy faithful mercies crown.",
      "Jesus, Thou art all compassion, pure unbounded love Thou art.",
      "Visit us with Thy salvation, enter every trembling heart."
    ]
  },
  {
    id: 218,
    number: 218,
    title: "Praise to the Holiest",
    category: "Praise",
    author: "John Henry Newman",
    tune: "GERONTIUS",
    verses: [
      "Praise to the Holiest in the height, and in the depth be praise.",
      "In all His words most wonderful, most sure in all His ways.",
      "O loving wisdom of our God! When all was sin and shame.",
      "A second Adam to the fight and to the rescue came."
    ]
  },
  {
    id: 219,
    number: 219,
    title: "The King of Love",
    category: "Comfort",
    author: "Henry Baker",
    tune: "DOMINUS REGIT ME",
    verses: [
      "The King of love my shepherd is, whose goodness faileth never.",
      "I nothing lack if I am His and He is mine for ever.",
      "Where streams of living water flow my ransomed soul He leadeth.",
      "And where the verdant pastures grow with food celestial feedeth."
    ]
  },
  {
    id: 220,
    number: 220,
    title: "There Is a Redeemer",
    category: "Worship",
    author: "Melody Green",
    tune: "THERE IS A REDEEMER",
    verses: [
      "There is a Redeemer, Jesus, God's own Son.",
      "Precious Lamb of God, Messiah, Holy One.",
      "Thank You, O my Father, for giving us Your Son.",
      "And leaving Your Spirit till the work on earth is done."
    ]
  },
  {
    id: 221,
    number: 221,
    title: "Ye Servants of the Lord",
    category: "Worship",
    author: "Philip Doddridge",
    tune: "NARENZA",
    verses: [
      "Ye servants of the Lord, each in his office wait.",
      "Observant of His heavenly word, and watchful at His gate.",
      "Let all your lamps be bright, and trim the golden flame.",
      "Gird up your loins, as in His sight, for awful is His name."
    ]
  },
  {
    id: 222,
    number: 222,
    title: "Christ Triumphant",
    category: "Resurrection",
    author: "Michael Saward",
    tune: "GUITING POWER",
    verses: [
      "Christ triumphant, ever reigning, Savior, Master, King!",
      "Lord of heaven, our lives sustaining, hear us as we sing.",
      "Yours the glory and the crown, the high renown, the eternal name.",
      "Word incarnate, truth revealing, Son of Man on earth!"
    ]
  },
  {
    id: 223,
    number: 223,
    title: "Come Down, O Love Divine",
    category: "Worship",
    author: "Bianco da Siena",
    tune: "DOWN AMPNEY",
    verses: [
      "Come down, O Love divine, seek Thou this soul of mine.",
      "And visit it with Thine own ardor glowing.",
      "O Comforter, draw near, within my heart appear.",
      "And kindle it, Thy holy flame bestowing."
    ]
  },
  {
    id: 224,
    number: 224,
    title: "Father, Hear the Prayer We Offer",
    category: "Morning",
    author: "Love Maria Willis",
    tune: "SUSSEX",
    verses: [
      "Father, hear the prayer we offer; not for ease that prayer shall be.",
      "But for strength that we may ever live our lives courageously.",
      "Not for ever in green pastures do we ask our way to be.",
      "But the steep and rugged pathway may we tread rejoicingly."
    ]
  },
  {
    id: 225,
    number: 225,
    title: "God Is Love, Let Heaven Adore Him",
    category: "Praise",
    author: "Timothy Rees",
    tune: "ABBOT'S LEIGH",
    verses: [
      "God is love, let heaven adore Him; God is love, let earth rejoice.",
      "Let the universe before Him lift with one united voice.",
      "He who laid the earth's foundation, He who spread the heavens above.",
      "He who breathes through all creation, He is Love, eternal Love."
    ]
  },
  {
    id: 226,
    number: 226,
    title: "He Who Would Valiant Be",
    category: "Dedication",
    author: "John Bunyan",
    tune: "MONKS GATE",
    verses: [
      "He who would valiant be 'gainst all disaster.",
      "Let him in constancy follow the Master.",
      "There's no discouragement shall make him once relent.",
      "His first avowed intent to be a pilgrim."
    ]
  },
  {
    id: 227,
    number: 227,
    title: "I Cannot Tell",
    category: "Worship",
    author: "William Young Fullerton",
    tune: "LONDONDERRY AIR",
    verses: [
      "I cannot tell why He, whom angels worship, should set His love upon the sons of men.",
      "Or why, as Shepherd, He should seek the wanderers, and bring them back, they know not how or when.",
      "But this I know, that He was born of Mary, when Bethlehem's manger was His only home.",
      "And that He lived at Nazareth and labored, and so the Savior, Savior of the world, is come."
    ]
  },
  {
    id: 228,
    number: 228,
    title: "Jesus, Lord, We Look to Thee",
    category: "Worship",
    author: "Charles Wesley",
    tune: "VIENNA",
    verses: [
      "Jesus, Lord, we look to Thee, let us in Thy name agree.",
      "Show Thyself the Prince of Peace; bid our jars and contentions cease.",
      "By Thy reconciling love, every soul to each unite.",
      "Draw us with the cords of love, to the realms of heavenly light."
    ]
  },
  {
    id: 229,
    number: 229,
    title: "King of Glory, King of Peace",
    category: "Praise",
    author: "George Herbert",
    tune: "GWALCHMAI",
    verses: [
      "King of glory, King of peace, I will love Thee.",
      "And that love may never cease, I will move Thee.",
      "Thou hast granted my request, Thou hast heard me.",
      "Thou didst note my working breast, Thou hast spared me."
    ]
  },
  {
    id: 230,
    number: 230,
    title: "Lord, for Tomorrow and Its Needs",
    category: "Morning",
    author: "Ernest Richard Wilberforce",
    tune: "PROVIDENCE",
    verses: [
      "Lord, for tomorrow and its needs I do not pray.",
      "Keep me, my God, from stain of sin just for today.",
      "Let me no wrong or idle word unthinking say.",
      "Set Thou a seal upon my lips just for today."
    ]
  },
  {
    id: 231,
    number: 231,
    title: "My God, How Wonderful Thou Art",
    category: "Praise",
    author: "Frederick William Faber",
    tune: "WESTMINSTER",
    verses: [
      "My God, how wonderful Thou art, Thy majesty how bright!",
      "How beautiful Thy mercy-seat, in depths of burning light!",
      "How dread are Thine eternal years, O everlasting Lord.",
      "By prostrate spirits day and night incessantly adored!"
    ]
  },
  {
    id: 232,
    number: 232,
    title: "O Love Divine",
    category: "Worship",
    author: "Charles Wesley",
    tune: "CORNWALL",
    verses: [
      "O Love divine, how sweet Thou art! When shall I find my willing heart all taken up by Thee?",
      "I thirst, I faint, I die to prove the greatness of redeeming love, the love of Christ to me.",
      "Stronger His love than death or hell; its riches are unsearchable.",
      "The first-born sons of light desire in vain its depths to see."
    ]
  },
  {
    id: 234,
    number: 234,
    title: "The Head That Once Was Crowned",
    category: "Worship",
    author: "Thomas Kelly",
    tune: "ST. MAGNUS",
    verses: [
      "The head that once was crowned with thorns is crowned with glory now.",
      "A royal diadem adorns the mighty Victor's brow.",
      "The highest place that heaven affords is His, is His by right.",
      "The King of kings and Lord of lords, and heaven's eternal Light."
    ]
  },
  {
    id: 235,
    number: 235,
    title: "There is a Higher Throne",
    category: "Worship",
    author: "Keith Getty",
    tune: "HIGHER THRONE",
    verses: [
      "There is a higher throne than all this world has known.",
      "Where faithful ones from every tongue will one day come and bow.",
      "As one we'll worship Him, the Lamb who once was slain.",
      "With songs of praise that never end, we'll magnify His name."
    ]
  },
  {
    id: 236,
    number: 236,
    title: "To Thee, O Lord, Our Hearts We Raise",
    category: "Praise",
    author: "William Chatterton Dix",
    tune: "GOLDEN SHEAVES",
    verses: [
      "To Thee, O Lord, our hearts we raise in hymns of adoration.",
      "To Thee the song of thankfulness, of high and holy station.",
      "For all the blessings of the year, for all the golden harvest.",
      "For all the gifts Thy hand hath given, the least as well as largest."
    ]
  },
  {
    id: 237,
    number: 237,
    title: "We Have a Gospel to Proclaim",
    category: "Worship",
    author: "Edward Joseph Burns",
    tune: "FULDA",
    verses: [
      "We have a gospel to proclaim, good news for men in all the earth.",
      "The gospel of a Savior's name; we sing His glory, tell His worth.",
      "Tell of His birth at Bethlehem, not in a royal house or hall.",
      "But in a stable dark and dim, the Lord and Savior of us all."
    ]
  },
  {
    id: 238,
    number: 238,
    title: "Ye Watchers and Ye Holy Ones",
    category: "Praise",
    author: "Athelstan Riley",
    tune: "LASST UNS ERFREUEN",
    verses: [
      "Ye watchers and ye holy ones, bright seraphs, cherubim, and thrones.",
      "Raise the glad strain, Alleluia!",
      "Cry out, dominions, princedoms, powers, virtues, archangels, angels' choirs.",
      "Alleluia! Alleluia! Alleluia! Alleluia! Alleluia!"
    ]
  },
  {
    id: 239,
    number: 239,
    title: "All Hail the Lamb",
    category: "Worship",
    author: "Dave Bilbrough",
    tune: "ALL HAIL THE LAMB",
    verses: [
      "All hail the Lamb who was slain.",
      "All hail the Lamb who was slain.",
      "For He is Lord of all, and He is King of kings.",
      "And He shall reign for ever and ever."
    ]
  },
  {
    id: 240,
    number: 240,
    title: "Be Still, My Soul",
    category: "Comfort",
    author: "Katharina von Schlegel",
    tune: "FINLANDIA",
    verses: [
      "Be still, my soul: the Lord is on thy side.",
      "Bear patiently the cross of grief or pain.",
      "Leave to thy God to order and provide; in every change He faithful will remain.",
      "Be still, my soul: thy best, thy heavenly Friend through thorny ways leads to a joyful end."
    ]
  },
  {
    id: 241,
    number: 241,
    title: "Christ Is the World's Light",
    category: "Worship",
    author: "Fred Pratt Green",
    tune: "CHRISTE SANCTORUM",
    verses: [
      "Christ is the world's Light, He and none other.",
      "Born in our likeness, Brother and Savior.",
      "In Him the Father's glory and mercy.",
      "Shine on us ever, Brother and Savior."
    ]
  },
  {
    id: 242,
    number: 242,
    title: "Come, Let Us Join Our Cheerful Songs",
    category: "Praise",
    author: "Isaac Watts",
    tune: "NATIVITY",
    verses: [
      "Come, let us join our cheerful songs with angels round the throne.",
      "Ten thousand thousand are their tongues, but all their joys are one.",
      "'Worthy the Lamb that died,' they cry, 'to be exalted thus!'",
      "'Worthy the Lamb,' our lips reply, 'for He was slain for us!'"
    ]
  },
  {
    id: 243,
    number: 243,
    title: "Father, We Love You",
    category: "Worship",
    author: "Donna Adkins",
    tune: "GLORIFY THY NAME",
    verses: [
      "Father, we love You, we worship and adore You.",
      "Glorify Thy name in all the earth.",
      "Glorify Thy name, glorify Thy name, glorify Thy name in all the earth.",
      "Jesus, we love You, we worship and adore You."
    ]
  },
  {
    id: 244,
    number: 244,
    title: "God of Grace and God of Glory",
    category: "Worship",
    author: "Harry Emerson Fosdick",
    tune: "CWM RHONDDA",
    verses: [
      "God of grace and God of glory, on Thy people pour Thy power.",
      "Crown Thine ancient Church's story; bring her bud to glorious flower.",
      "Grant us wisdom, grant us courage, for the facing of this hour.",
      "For the facing of this hour."
    ]
  },
  {
    id: 245,
    number: 245,
    title: "I Will Sing the Wondrous Story",
    category: "Praise",
    author: "Francis Harold Rawley",
    tune: "HYFRYDOL",
    verses: [
      "I will sing the wondrous story of the Christ who died for me.",
      "How He left His home in glory for the cross of Calvary.",
      "Yes, I'll sing the wondrous story of the Christ who died for me.",
      "Sing it with the saints in glory, gathered by the crystal sea."
    ]
  },
  {
    id: 246,
    number: 246,
    title: "Jesus Shall Reign",
    category: "Worship",
    author: "Isaac Watts",
    tune: "TRURO",
    verses: [
      "Jesus shall reign where'er the sun does his successive journeys run.",
      "His kingdom stretch from shore to shore, till moons shall wax and wane no more.",
      "To Him shall endless prayer be made, and praises throng to crown His head.",
      "His name like sweet perfume shall rise with every morning sacrifice."
    ]
  },
  {
    id: 247,
    number: 247,
    title: "Lord, Thy Word Abideth",
    category: "Worship",
    author: "Henry Williams Baker",
    tune: "RAVENSHAW",
    verses: [
      "Lord, Thy word abideth, and our footsteps guideth."
    ]
  },
  {
    id: 248,
    number: 248,
    title: "My Hope Is Built on Nothing Less",
    category: "Worship",
    author: "Edward Mote",
    tune: "SOLID ROCK",
    chorus: "On Christ, the solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand.",
    verses: [
      "My hope is built on nothing less\nThan Jesus' blood and righteousness;\nI dare not trust the sweetest frame,\nBut wholly lean on Jesus' name.",
      "When darkness veils His lovely face,\nI rest on His unchanging grace;\nIn every high and stormy gale,\nMy anchor holds within the veil.",
      "His oath, His covenant, His blood\nSupport me in the whelming flood;\nWhen all around my soul gives way,\nHe then is all my hope and stay.",
      "When He shall come with trumpet sound,\nOh, may I then in Him be found;\nDressed in His righteousness alone,\nFaultless to stand before the throne."
    ]
  },
  {
    id: 249,
    number: 249,
    title: "O Worship the Lord in the Beauty of Holiness",
    category: "Worship",
    author: "John Samuel Bewley Monsell",
    tune: "WAS LEBET",
    verses: [
      "O worship the Lord in the beauty of holiness!\nBow down before Him, His glory proclaim;\nWith gold of obedience, and incense of lowliness,\nKneel and adore Him, the Lord is His name.",
      "Low at His feet lay thy burden of carefulness,\nHigh on His heart He will bear it for thee,\nComfort thy sorrows, and answer thy prayerfulness,\nGuiding thy steps as may best for thee be.",
      "Fear not to enter His courts in the slenderness\nOf the poor wealth thou wouldst reckon as thine;\nTruth in its beauty, and love in its tenderness,\nThese are the offerings to lay on His shrine.",
      "These, though we bring them in trembling and fearfulness,\nHe will accept for the Name that is dear;\nMornings of joy give for evenings of tearfulness,\nTrust for our trembling and hope for our fear."
    ]
  },
  {
    id: 250,
    number: 250,
    title: "The Heavens Declare Your Glory, Lord",
    category: "Praise",
    author: "Isaac Watts",
    tune: "CHURCH TRIUMPHANT",
    verses: [
      "The heavens declare Your glory, Lord;\nIn every star Your wisdom shines;\nBut when our eyes behold Your Word,\nWe read Your Name in fairer lines.",
      "The rolling sun, the changing light,\nAnd nights and days Thy power confess;\nBut the blest volume Thou hast writ\nReveals Thy justice and Thy grace.",
      "Sun, moon, and stars convey Thy praise\nRound the whole earth, and never stand;\nSo when Thy truth began its race,\nIt touched and glanced on every land.",
      "Nor shall Thy spreading gospel rest\nTill through the world Thy truth has run;\nTill Christ has all the nations blest\nThat see the light, or feel the sun."
    ]
  },
  {
    id: 251,
    number: 251,
    title: "There is a Name I Love to Hear",
    category: "Worship",
    author: "Frederick Whitfield",
    tune: "ST. PETER",
    verses: [
      "There is a name I love to hear,\nI love to sing its worth;\nIt sounds like music in mine ear,\nThe sweetest name on earth.",
      "It tells me of a Savior's love,\nWho died to set me free;\nIt tells me of His precious blood,\nThe sinner's perfect plea.",
      "It tells me of a Father's smile\nBeaming upon His child;\nIt cheers me through this little while,\nThrough deserts, waste and wild.",
      "It tells me what my Father hath\nIn store for every day,\nAnd though I tread a darksome path,\nYields sunshine all the way.",
      "Jesus, the name I love so well,\nThe name I love to hear;\nNo saint on earth its worth can tell,\nNo heart conceive how dear."
    ]
  },
  {
    id: 252,
    number: 252,
    title: "Thy Hand, O God, Has Guided",
    category: "Worship",
    author: "Edward Hayes Plumptre",
    tune: "THORNBURY",
    verses: [
      "Thy hand, O God, has guided\nThy flock from age to age;\nThe wondrous tale is written\nOn every-varying page;\nOur fathers owned Thy goodness,\nAnd we their deeds record;\nAnd both of this are mindful,\nOne Church, one Faith, one Lord.",
      "Thy heralds brought glad tidings\nTo greatest as to least;\nThey bade men rise, and hasten\nTo share the great King's feast;\nAnd this was all their teaching,\nIn every deed and word,\nTo all alike proclaiming\nOne Church, one Faith, one Lord.",
      "Through many a day of darkness,\nThrough many a scene of strife,\nThe faithful few held fast by\nThe liberty of life;\nThey knew by whom they believed,\nAnd Lord, they took Thy word,\nAnd we are heirs of their heritage,\nOne Church, one Faith, one Lord.",
      "And we, shall we be faithless?\nShall hearts fail, hands hang down?\nShall we evade the conflict,\nAnd cast away our crown?\nNot so: in God's deep counsels\nSome better thing is stored;\nWe will maintain, unflinching,\nOne Church, one Faith, one Lord."
    ]
  },
  {
    id: 253,
    number: 253,
    title: "We Sing the Praise of Him Who Died",
    category: "Passion",
    author: "Thomas Kelly",
    tune: "BOW BRICKHILL",
    verses: [
      "We sing the praise of Him who died,\nOf Him who died upon the cross;\nThe sinner's hope let men deride,\nFor this we count the world but loss.",
      "Inscribed upon the cross we see\nIn shining letters, 'God is love';\nHe bears our sins upon the tree,\nHe brings us mercy from above.",
      "The cross! it takes our guilt away;\nIt holds the fainting spirit up;\nIt cheers with hope the gloomy day,\nAnd sweetens every bitter cup.",
      "It makes the coward spirit brave,\nAnd nerves the feeble arm for fight;\nIt takes its terror from the grave,\nAnd gilds the bed of death with light.",
      "The balm of life, the cure of woe,\nThe measure and the pledge of love,\nThe sinner's refuge here below,\nThe angels' theme in heaven above."
    ]
  },
  {
    id: 254,
    number: 254,
    title: "Who is on the Lord's Side?",
    category: "Dedication",
    author: "Frances Ridley Havergal",
    tune: "ARMAGEDDON",
    verses: [
      "Who is on the Lord's side?\nWho will serve the King?\nWho will be His helpers,\nOther lives to bring?\nWho will leave the world's side?\nWho will face the foe?\nWho is on the Lord's side?\nWho for Him will go?\nBy Thy call of mercy,\nBy Thy grace divine,\nWe are on the Lord's side,\nSavior, we are Thine.",
      "Not for weight of glory,\nNot for crown and palm,\nEnter we the army,\nRaise the warrior psalm;\nBut for Love that sought us\nIn the darkness drear,\nAnd for Love that bought us,\nSending help so near.\nBy Thy love constraining,\nBy Thy grace divine,\nWe are on the Lord's side,\nSavior, we are Thine.",
      "Jesus, Thou hast bought us,\nNot with gold or gem,\nBut with Thine own life-blood,\nFor Thy diadem;\nWith Thy blessing filling\nEach who comes to Thee,\nThou hast made us willing,\nThou hast set us free.\nBy Thy grand redemption,\nBy Thy grace divine,\nWe are on the Lord's side,\nSavior, we are Thine.",
      "Fierce may be the conflict,\nStrong may be the foe,\nBut the King's own army\nNone can overthrow;\nRound His standard ranging,\nVictory is secure,\nFor His truth unchanging\nMakes the triumph sure.\nJoyfully enlisting,\nBy Thy grace divine,\nWe are on the Lord's side,\nSavior, we are Thine."
    ]
  },
  {
    id: 255,
    number: 255,
    title: "Alleluia! Sing to Jesus",
    category: "Praise",
    author: "William Chatterton Dix",
    tune: "HYFRYDOL",
    verses: [
      "Alleluia! sing to Jesus!\nHis the scepter, His the throne;\nAlleluia! His the triumph,\nHis the victory alone;\nHark! the songs of peaceful Zion\nThunder like a mighty flood;\nJesus out of every nation\nHath redeemed us by His blood.",
      "Alleluia! not as orphans\nAre we left in sorrow now;\nAlleluia! He is near us,\nFaith believes, nor questions how:\nThough the cloud from sight received Him,\nWhen the forty days were o'er,\nShall our hearts forget His promise,\n'I am with you evermore'?",
      "Alleluia! Bread of Heaven,\nThou on earth our Food, our Stay!\nAlleluia! here the sinful\nFlee to Thee from day to day:\nIntercessor, Friend of sinners,\nEarth's Redeemer, plead for me,\nWhere the songs of all the sinless\nSweep across the crystal sea.",
      "Alleluia! King eternal,\nThee the Lord of lords we own;\nAlleluia! born of Mary,\nEarth Thy footstool, heaven Thy throne:\nThou within the veil hast entered,\nRobed in flesh, our great High Priest;\nThou on earth both Priest and Victim\nIn the Eucharistic feast."
    ]
  },
  {
    id: 256,
    number: 256,
    title: "Christ is the World's True Light",
    category: "Worship",
    author: "George Wallace Briggs",
    tune: "NUN DANKET",
    verses: [
      "Christ is the world's true Light,\nIts Captain of salvation,\nThe Day-star clear and bright\nOf every man and nation;\nNew life, new hope awakes,\nWhere'er men own His sway;\nFreedom her bondage breaks,\nAnd night is turned to day.",
      "In Christ all races meet,\nTheir ancient feuds forgetting,\nThe whole round world complete,\nFrom rising sun to setting:\nWhen Christ is throned as Lord,\nAll shall forsake their fear,\nTo ploughshare beat the sword,\nTo pruning-hook the spear.",
      "One Lord, in one great Name\nUnite us all who own Thee;\nCast out our pride and shame\nThat hinder to enthrone Thee;\nThe world has waited long,\nHas travailed long in pain;\nTo heal its ancient wrong,\nCome, Prince of Peace, and reign."
    ]
  },
  {
    id: 257,
    number: 257,
    title: "How Lovely Is Your Dwelling-Place",
    category: "Worship",
    author: "Scottish Psalter",
    tune: "HARRINGTON",
    verses: [
      "How lovely is Your dwelling-place, O Lord of hosts, to me!"
    ]
  },
  {
    id: 258,
    number: 258,
    title: "I Will Sing Your Praises",
    category: "Praise",
    author: "Anonymous",
    tune: "PRAISE",
    verses: [
      "I will sing Your praises, O Lord, my God."
    ]
  },
  {
    id: 259,
    number: 259,
    title: "Jesus, Name Above All Names",
    category: "Worship",
    author: "Naida Hearn",
    tune: "JESUS, NAME ABOVE ALL NAMES",
    verses: [
      "Jesus, name above all names, beautiful Savior, glorious Lord."
    ]
  },
  {
    id: 260,
    number: 260,
    title: "Let All the World in Every Corner Sing",
    category: "Praise",
    author: "George Herbert",
    tune: "LUCKINGTON",
    verses: [
      "Let all the world in every corner sing: My God and King!"
    ]
  },
  {
    id: 261,
    number: 261,
    title: "Lord, You Have My Heart",
    category: "Worship",
    author: "Martin Smith",
    tune: "LORD YOU HAVE MY HEART",
    verses: [
      "Lord, You have my heart, and I will search for Yours."
    ]
  },
  {
    id: 262,
    number: 262,
    title: "My Jesus, My Savior",
    category: "Worship",
    author: "Darlene Zschech",
    tune: "SHOUT TO THE LORD",
    verses: [
      "My Jesus, my Savior, Lord, there is none like You."
    ]
  },
  {
    id: 263,
    number: 263,
    title: "O For a Closer Walk with God",
    category: "Worship",
    author: "William Cowper",
    tune: "CAITHNESS",
    verses: [
      "O for a closer walk with God, a calm and heavenly frame."
    ]
  },
  {
    id: 264,
    number: 264,
    title: "Praise the Lord, His Glories Show",
    category: "Praise",
    author: "Henry Francis Lyte",
    tune: "LLANFAIR",
    verses: [
      "Praise the Lord, His glories show, Alleluia!"
    ]
  },
  {
    id: 265,
    number: 265,
    title: "Shine, Jesus, Shine",
    category: "Worship",
    author: "Graham Kendrick",
    tune: "SHINE JESUS SHINE",
    verses: [
      "Lord, the light of Your love is shining."
    ]
  },
  {
    id: 266,
    number: 266,
    title: "Through All the Changing Scenes of Life",
    category: "Worship",
    author: "Nahum Tate",
    tune: "WILTSHIRE",
    verses: [
      "Through all the changing scenes of life, in trouble and in joy."
    ]
  },
  {
    id: 267,
    number: 267,
    title: "Wake, O Wake! With Tidings Thrilling",
    category: "Worship",
    author: "Philipp Nicolai",
    tune: "WACHET AUF",
    verses: [
      "Wake, O wake! with tidings thrilling the watchmen all the air are filling."
    ]
  },
  {
    id: 268,
    number: 268,
    title: "When Morning Gilds the Skies",
    category: "Morning",
    author: "Edward Caswall",
    tune: "LAUDES DOMINI",
    verses: [
      "When morning gilds the skies, my heart awaking cries: May Jesus Christ be praised!"
    ]
  },
  {
    id: 269,
    number: 269,
    title: "Come, Holy Spirit, Come",
    category: "Worship",
    author: "Joseph Hart",
    tune: "ST. THOMAS",
    verses: [
      "Come, Holy Spirit, come; let Thy bright beams arise."
    ]
  },
  {
    id: 270,
    number: 270,
    title: "My God, and Is Thy Table Spread",
    category: "Communion",
    author: "Philip Doddridge",
    tune: "ROCKINGHAM",
    verses: [
      "My God, and is Thy table spread, and doth Thy cup with love o'erflow?"
    ]
  },
  {
    id: 271,
    number: 271,
    title: "All My Hope on God is Founded",
    category: "Worship",
    author: "Robert Bridges",
    tune: "MICHAEL",
    verses: [
      "All my hope on God is founded; He doth still my trust renew."
    ]
  },
  {
    id: 272,
    number: 272,
    title: "Be Still, for the Presence of the Lord",
    category: "Worship",
    author: "David J. Evans",
    tune: "BE STILL",
    verses: [
      "Be still, for the presence of the Lord, the Holy One, is here."
    ]
  },
  {
    id: 273,
    number: 273,
    title: "Father, Who on Man Dost Shower",
    category: "Worship",
    author: "Percy Dearmer",
    tune: "QUEM PASTORES LAUDAVERE",
    verses: [
      "Father, who on man dost shower gifts of plenty from Thy dower."
    ]
  },
  {
    id: 274,
    number: 274,
    title: "A Charge to Keep I Have",
    category: "Dedication",
    author: "Charles Wesley",
    tune: "LEOMINSTER",
    verses: [
      "A charge to keep I have, A God to glorify,\nA never-dying soul to save, And fit it for the sky.",
      "To serve the present age, My calling to fulfill:\nOh, may it all my powers engage To do my Master's will!",
      "Arm me with jealous care, As in Thy sight to live,\nAnd oh, Thy servant, Lord, prepare A strict account to give!",
      "Help me to watch and pray, And on Thyself rely,\nAssured, if I my trust betray, I shall forever die."
    ]
  },
  {
    id: 275,
    number: 275,
    title: "A Debtor to Mercy Alone",
    category: "Praise",
    author: "Augustus Toplady",
    tune: "TIVERTON",
    verses: [
      "A debtor to mercy alone, Of covenant mercy I sing;\nNor fear, with Thy righteousness on, My person and off'rings to bring.",
      "The terrors of law and of God With me can have nothing to do;\nMy Savior's obedience and blood Hide all my transgressions from view.",
      "The work which His goodness began, The arm of His strength will complete;\nHis promise is Yea and Amen, And never was forfeited yet.",
      "Things future, nor things that are now, Nor all things below or above,\nCan make Him His purpose forego, Or sever my soul from His love."
    ]
  },
  {
    id: 276,
    number: 276,
    title: "A Gladsome Hymn of Praise We Sing",
    category: "Praise",
    author: "Ambrose N. Blatchford",
    tune: "ST. OSWALD",
    verses: [
      "A gladsome hymn of praise we sing, And thankfully we gather,\nTo bless the love of God our King, Our Father and our Brother.",
      "Full of the joy that life should know, And full of hope and gladness,\nWe fear no future, feel no woe, And know no thought of sadness.",
      "For God is love, and God is light, And God is our salvation;\nIn Him we live, in Him we fight, In Him is our foundation.",
      "Then let us sing our hymn of praise, And thankfully we gather,\nTo bless the love of God our King, Our Father and our Brother."
    ]
  },
  {
    id: 277,
    number: 277,
    title: "A New Heart, Lord, Create in Me",
    category: "Dedication",
    author: "Anonymous",
    tune: "ST. COLUMBA",
    verses: [
      "A new heart, Lord, create in me, A heart that's pure and clean;\nA heart that's full of love for Thee, And free from every sin.",
      "A heart that's humble, meek, and mild, A heart that's full of grace;\nA heart that's like a little child, And seeks Thy holy face.",
      "A heart that's full of faith and hope, A heart that's full of joy;\nA heart that's like a telescope, And sees the things on high.",
      "A heart that's full of love for all, A heart that's full of peace;\nA heart that's like a waterfall, And flows with every grace."
    ]
  },
  {
    id: 278,
    number: 278,
    title: "A Pilgrim Through This Lonely World",
    category: "Passion",
    author: "Edward Denny",
    tune: "ST. BERNARD",
    verses: [
      "A pilgrim through this lonely world, The blessed Savior passed;\nA mourner here, He hath upheld Our cause until the last.",
      "No home had He, no resting-place, No friend to call His own;\nBut in His heart was full of grace, And love for us alone.",
      "He bore our sins, He bore our griefs, He bore our every care;\nAnd in His heart was full of peace, And love for us to share.",
      "Then let us follow where He leads, And let us do His will;\nAnd in His heart was full of deeds, And love for us to fill."
    ]
  },
  {
    id: 279,
    number: 279,
    title: "Above the Clear Blue Sky",
    category: "Praise",
    author: "John Chandler",
    tune: "CHILDREN'S VOICES",
    verses: [
      "Above the clear blue sky, In heaven's bright abode,\nThe angel host on high Sing praises to their God: Alleluia!\nThey love to sing To God their King Alleluia!",
      "But God from infant tongues On earth receiveth praise;\nWe then our cheerful songs In sweet accord will raise: Alleluia!\nWe too will sing To God our King Alleluia!",
      "O blessed Lord, Thy truth To us in love impart,\nAnd teach us in our youth To know Thee in our heart: Alleluia!\nThen shall we sing To God our King Alleluia!",
      "Oh, may Thy holy Word Spread all the world around;\nAnd all with one accord Thy glorious Name resound: Alleluia!\nThen all shall sing To God our King Alleluia!"
    ]
  },
  {
    id: 280,
    number: 280,
    title: "According to Thy Gracious Word",
    category: "Communion",
    author: "James Montgomery",
    tune: "BANGOR",
    verses: [
      "According to Thy gracious word, In meek humility,\nThis will I do, my dying Lord, I will remember Thee.",
      "Thy body, broken for my sake, My bread from heaven shall be;\nThy testamental cup I take, And thus remember Thee.",
      "Gethsemane can I forget? Or there Thy conflict see,\nThine agony and bloody sweat, And not remember Thee?",
      "When to the cross I turn mine eyes, And rest on Calvary,\nO Lamb of God, my sacrifice, I must remember Thee."
    ]
  },
  {
    id: 281,
    number: 281,
    title: "All for Jesus, All for Jesus",
    category: "Dedication",
    author: "Mary D. James",
    tune: "ALL FOR JESUS",
    verses: [
      "All for Jesus, all for Jesus! All my being's ransomed powers:\nAll my thoughts and words and doings, All my days and all my hours.",
      "Let my hands perform His bidding, Let my feet run in His ways;\nLet my eyes see Jesus only, Let my lips speak forth His praise.",
      "Since my eyes were fixed on Jesus, I've lost sight of all beside;\nSo enchained my spirit's vision, Looking at the Crucified.",
      "Oh, what wonder! how amazing! Jesus, glorious King of kings,\nDeigns to call me His beloved, Lets me rest beneath His wings."
    ]
  },
  {
    id: 283,
    number: 283,
    title: "All Praise to Thee, for Thou, O King Divine",
    category: "Worship",
    author: "F. Bland Tucker",
    tune: "ENGELBERG",
    verses: [
      "All praise to Thee, for Thou, O King divine,\nDidst yield the glory that of right was Thine,\nThat in our darkened hearts Thy light might shine: Alleluia!",
      "Thou cam'st to us in lowliness of thought;\nBy Thee the outcast and the poor were sought;\nAnd by Thy death was God's salvation wrought: Alleluia!",
      "Let this mind be in us which was in Thee,\nWho wast a servant that we might be free,\nHumbling Thyself to death on Calvary: Alleluia!",
      "Wherefore, by God's eternal purpose, Thou\nArt high exalted o'er all creatures now,\nAnd every knee shall at Thy Name be bow: Alleluia!"
    ]
  },
  {
    id: 284,
    number: 284,
    title: "And Can It Be That I Should Gain",
    category: "Praise",
    author: "Charles Wesley",
    tune: "SAGINA",
    chorus: "Amazing love! How can it be, That Thou, my God, shouldst die for me?",
    verses: [
      "And can it be that I should gain An interest in the Savior's blood?\nDied He for me, who caused His pain— For me, who Him to death pursued?",
      "'Tis mystery all: th' Immortal dies: Who can explore His strange design?\nIn vain the firstborn seraph tries To sound the depths of love divine.",
      "He left His Father's throne above— So free, so infinite His grace—\nEmptied Himself of all but love, And bled for Adam's helpless race.",
      "Long my imprisoned spirit lay, Fast bound in sin and nature's night;\nThine eye diffused a quick'ning ray— I woke, the dungeon flamed with light;\nMy chains fell off, my heart was free, I rose, went forth, and followed Thee."
    ]
  },
  {
    id: 285,
    number: 285,
    title: "At Even, Ere the Sun Was Set",
    category: "Evening",
    author: "Henry Twells",
    tune: "ANGELUS",
    verses: [
      "At even, ere the sun was set, The sick, O Lord, around Thee lay;\nOh, in what divers pains they met! Oh, with what joy they went away!",
      "Once more 'tis eventide, and we Oppressed with various ills draw near;\nWhat if Thy form we cannot see? We know and feel that Thou art here.",
      "O Savior Christ, our woes dispel; For some are sick, and some are sad,\nAnd some have never loved Thee well, And some have lost the love they had.",
      "And some have found the world is vain, Yet from the world they break not free;\nAnd some have friends who give them pain, Yet have not sought a friend in Thee."
    ]
  },
  {
    id: 286,
    number: 286,
    title: "Author of Life Divine",
    category: "Communion",
    author: "Charles Wesley",
    tune: "AUTHOR OF LIFE",
    verses: [
      "Author of life divine, Who hast a table spread,\nFurnished with mystic wine And everlasting bread.",
      "Preserve the life Thyself hast given, And feed and train us up for heaven.",
      "Our needy souls sustain With fresh supplies of love,\nTill all Thy life we gain, And all Thy fullness prove.",
      "And, strengthened by Thy grace, we run The race of glory here begun."
    ]
  },
  {
    id: 287,
    number: 287,
    title: "Behold the Amazing Gift of Love",
    category: "Praise",
    author: "Isaac Watts",
    tune: "ST. STEPHEN",
    verses: [
      "Behold the amazing gift of love The Father hath bestowed\nOn us, the sinful sons of men, To call us sons of God!",
      "Concealed as yet this honor lies, By this dark world unknown,\nA world that knew not when He came, Ev'n God's eternal Son.",
      "High is the rank we now possess, But higher we shall rise;\nThough what we shall hereafter be Is hid from mortal eyes.",
      "Our souls, we know, when He appears, Shall bear His image bright;\nFor all His glory, full disclosed, Shall open to our sight."
    ]
  },
  {
    id: 288,
    number: 288,
    title: "Beyond the Sunset",
    category: "Comfort",
    author: "Virgil P. Brock",
    tune: "BEYOND THE SUNSET",
    verses: [
      "Beyond the sunset, O blissful morning, When with our Savior heaven is begun.\nEarth's toiling ended, O glorious dawning; Beyond the sunset, when day is done.",
      "Beyond the sunset no clouds will gather, No storms will threaten, no fears annoy;\nO day of gladness, O day unending, Beyond the sunset, eternal joy!",
      "Beyond the sunset a hand will guide me To God the Father, whom I adore;\nHis glorious presence, His words of welcome, Beyond the sunset for evermore.",
      "Beyond the sunset, O glad reunion, With our dear loved ones who've gone before;\nIn that fair homeland we'll rest together, Beyond the sunset on heaven's shore."
    ]
  },
  {
    id: 289,
    number: 289,
    title: "Bless the Lord, O My Soul",
    category: "Praise",
    author: "Matt Redman",
    tune: "10,000 REASONS",
    chorus: "Bless the Lord, O my soul, O my soul, Worship His holy name.\nSing like never before, O my soul, I'll worship Your holy name.",
    verses: [
      "The sun comes up, it's a new day dawning; It's time to sing Your song again.\nWhatever may pass, and whatever lies before me, Let me be singing when the evening comes.",
      "You're rich in love, and You're slow to anger. Your name is great, and Your heart is kind.\nFor all Your goodness, I will keep on singing; Ten thousand reasons for my heart to find.",
      "And on that day when my strength is failing, The end draws near, and my time has come;\nStill my soul will sing Your praise unending: Ten thousand years and then for evermore!"
    ]
  },
  {
    id: 290,
    number: 290,
    title: "Blessed Be the Name",
    category: "Praise",
    author: "Charles Wesley",
    tune: "BLESSED BE THE NAME",
    chorus: "Blessed be the name, blessed be the name, Blessed be the name of the Lord!\nBlessed be the name, blessed be the name, Blessed be the name of the Lord!",
    verses: [
      "O for a thousand tongues to sing, Blessed be the name of the Lord!\nThe glories of my God and King, Blessed be the name of the Lord!",
      "Jesus! the name that charms our fears, Blessed be the name of the Lord!\n'Tis music in the sinner's ears, Blessed be the name of the Lord!",
      "He breaks the power of canceled sin, Blessed be the name of the Lord!\nHis blood can make the foulest clean, Blessed be the name of the Lord!",
      "I never shall forget that day, Blessed be the name of the Lord!\nWhen Jesus washed my sins away, Blessed be the name of the Lord!"
    ]
  },
  {
    id: 291,
    number: 291,
    title: "Break Thou the Bread of Life",
    category: "Communion",
    author: "Mary A. Lathbury",
    tune: "BREAD OF LIFE",
    verses: [
      "Break Thou the bread of life, dear Lord, to me, As Thou didst break the loaves beside the sea;\nBeyond the sacred page I seek Thee, Lord; My spirit pants for Thee, O living Word!",
      "Bless Thou the truth, dear Lord, to me, to me, As Thou didst bless the bread by Galilee;\nThen shall all bondage cease, all fetters fall; And I shall find my peace, my All in all.",
      "Thou art the Bread of Life, O Lord, to me, Thy holy Word the truth that saveth me;\nGive me to eat and live with Thee above; Teach me to love Thy truth, for Thou art love.",
      "O send Thy Spirit, Lord, now unto me, That He may touch my eyes, and make me see:\nShow me the truth concealed within Thy Word, And in Thy Book revealed I see Thee, Lord."
    ]
  },
  {
    id: 292,
    number: 292,
    title: "Lord of the Worlds Above",
    category: "Worship",
    author: "Isaac Watts",
    tune: "DARWALL'S 148TH",
    verses: [
      "Lord of the worlds above, How pleasant and how fair\nThe dwellings of Thy love, Thine earthly temples are!\nTo Thine abode My heart aspires With warm desires To see my God.",
      "O happy souls that pray Where God appoints to hear!\nO happy men that pay Their constant service there!\nThey praise Thee still; And happy they That love the way To Zion's hill.",
      "They go from strength to strength Through this dark vale of tears,\nTill each arrives at length, Till each in heaven appears:\nO glorious seat, When God our King Shall thither bring Our willing feet!"
    ]
  },
  {
    id: 293,
    number: 293,
    title: "Lord, as to Thy Dear Cross We Flee",
    category: "Passion",
    author: "John H. Gurney",
    tune: "ST. BERNARD",
    verses: [
      "Lord, as to Thy dear cross we flee, And plead to be forgiven,\nSo let Thy life our pattern be, And form our souls for heaven.",
      "Help us, through good report and ill, Our daily cross to bear;\nLike Thee, to do our Father's will, Our brethren's griefs to share.",
      "Let grace our selfishness expel, Our earthliness refine;\nAnd kindness in our bosoms dwell, As free and true as Thine.",
      "If joy shall at Thy bidding fly, And grief's dark day come on,\nWe in our turn would meekly cry, 'Father, Thy will be done.'"
    ]
  },
  {
    id: 294,
    number: 294,
    title: "Lord, Dismiss Us with Thy Blessing",
    category: "Worship",
    author: "John Fawcett",
    tune: "SICILIAN MARINERS",
    verses: [
      "Lord, dismiss us with Thy blessing; Fill our hearts with joy and peace;\nLet us each, Thy love possessing, Triumph in redeeming grace.\nOh, refresh us, Oh, refresh us, Traveling through this wilderness.",
      "Thanks we give and adoration For Thy gospel's joyful sound;\nMay the fruits of Thy salvation In our hearts and lives abound.\nEver faithful, Ever faithful To the truth may we be found.",
      "So that when Thy love shall call us, Savior, from the world away,\nFear of death shall not enthrall us, Glad Thy summons to obey.\nMay we ever, May we ever Reign with Thee in endless day."
    ]
  },
  {
    id: 295,
    number: 295,
    title: "Lord, Enthroned in Heavenly Splendor",
    category: "Communion",
    author: "G. H. Bourne",
    tune: "ST. HELEN",
    verses: [
      "Lord, enthroned in heavenly splendor, First-begotten from the dead,\nThou alone, our strong Defender, Liftest up Thy people's head.\nAlleluia, Alleluia, Jesus, true and living Bread!",
      "Here our humblest homage paying, We Thy gracious presence hail;\nThine own word, ev'n now obeying, All them that in Thee prevail.\nAlleluia, Alleluia, Thou art here within the veil.",
      "Though the lowliest form doth veil Thee As of old in Bethlehem,\nHere as there Thine angels hail Thee, Branch and Flower of Jesse's stem.\nAlleluia, Alleluia, We too join the rank of them.",
      "Paschal Lamb, Thine offering, finished Once for all when Thou wast slain,\nIn its fullness undiminished Shall for evermore remain.\nAlleluia, Alleluia, Cleansing us from every stain."
    ]
  },
  {
    id: 296,
    number: 296,
    title: "Lord, Her Watch Thy Church Is Keeping",
    category: "Missionary",
    author: "Henry Downton",
    tune: "EVERTON",
    verses: [
      "Lord, her watch Thy church is keeping; When shall earth Thy rule obey?\nWhen shall end the night of weeping? When shall break the promised day?",
      "See the whitening harvest languish, Waiting still the laborers' toil;\nWas it for this Thy spirit's anguish? Was it for this Thy blood did boil?",
      "Tidings, sent to every creature, Millions yet have never heard;\nCan they hear without a preacher? Lord Almighty, give the word!",
      "Give the word! in every nation Let the gospel trumpet sound,\nWitnessing a free salvation To the earth's remotest bound."
    ]
  },
  {
    id: 297,
    number: 297,
    title: "Lord, I Have Made Thy Word My Choice",
    category: "Dedication",
    author: "Isaac Watts",
    tune: "ST. STEPHEN",
    verses: [
      "Lord, I have made Thy word my choice, My lasting heritage;\nThere shall my noblest powers rejoice, My warmest thoughts engage.",
      "I'll read the histories of Thy love, And keep Thy laws in sight,\nWhile through the promises I rove, With ever fresh delight.",
      "'Tis a broad land of wealth unknown, Where springs of life arise;\nSeeds of immortal bliss are sown, And hidden glory lies.",
      "The best relief that mourners have, It makes our sorrows blest;\nOur fairest hope beyond the grave, And our eternal rest."
    ]
  },
  {
    id: 298,
    number: 298,
    title: "Lord, in the Morning Thou Shalt Hear",
    category: "Morning",
    author: "Isaac Watts",
    tune: "WARWICK",
    verses: [
      "Lord, in the morning Thou shalt hear My voice ascending high;\nTo Thee will I direct my prayer, To Thee lift up mine eye.",
      "Up to the hills where Christ is gone To plead for all His saints,\nPresenting at His Father's throne Our songs and our complaints.",
      "Thou art a God before whose sight The wicked shall not stand;\nSinners shall ne'er be Thy delight, Nor dwell at Thy right hand.",
      "But to Thy house will I resort, To taste Thy mercies there;\nI will frequent Thy holy court, And worship in Thy fear."
    ]
  },
  {
    id: 299,
    number: 299,
    title: "Lord, It Is Good for Us to Be",
    category: "Worship",
    author: "Arthur P. Stanley",
    tune: "ST. BARTHOLOMEW",
    verses: [
      "Lord, it is good for us to be High on the mountain-top with Thee;\nWhere stand revealed to mortal gaze The great old saints of other days.",
      "And forth from out the distant past, Before Thine eyes of life are cast,\nAnd Elias and Moses, who of old The glory of Thy kingdom told.",
      "Lord, it is good for us to be Entranced, enwrapt, alone with Thee;\nAnd watch Thy glistering raiment glow Whiter than any earthly snow.",
      "Before we taste of death, we see Thy kingdom come with power to be;\nAnd in the light of Thy dear face, We find our rest and dwelling-place."
    ]
  },
  {
    id: 300,
    number: 300,
    title: "Lord, Speak to Me, That I May Speak",
    category: "Missionary",
    author: "Frances R. Havergal",
    tune: "CANONBURY",
    verses: [
      "Lord, speak to me, that I may speak In living echoes of Thy tone;\nAs Thou hast sought, so let me seek Thy erring children lost and lone.",
      "Oh, lead me, Lord, that I may lead The wandering and the wavering feet;\nOh, feed me, Lord, that I may feed Thy hungering ones with manna sweet.",
      "Oh, strengthen me, that while I stand I may stretch out a loving hand\nTo wrestlers with the troubled sea, And help them, Lord, to come to Thee.",
      "Oh, teach me, Lord, that I may teach The precious things Thou dost impart;\nAnd wing my words, that they may reach The hidden depths of many a heart."
    ]
  },
  {
    id: 301,
    number: 301,
    title: "Lord, Teach Us How to Pray Aright",
    category: "Worship",
    author: "James Montgomery",
    tune: "ST. HUGH",
    verses: [
      "Lord, teach us how to pray aright, With reverence and with fear;\nThough dust and ashes in Thy sight, We may, we must draw near.",
      "We perish if we cease from prayer; Oh, grant us power to pray;\nAnd when to meet Thee we prepare, Lord, meet us by the way.",
      "God of all grace, we come to Thee, With broken, contrite hearts;\nGive what Thine eye delights to see, Truth in the inward parts.",
      "Faith in the only sacrifice That can for sin atone;\nTo cast our hopes, to fix our eyes On Christ, on Christ alone."
    ]
  },
  {
    id: 302,
    number: 302,
    title: "O Day of Rest and Gladness",
    category: "Worship",
    author: "Christopher Wordsworth",
    tune: "AURELIA",
    verses: [
      "O day of rest and gladness, O day of joy and light,\nO balm of care and sadness, Most beautiful, most bright;\nOn thee the high and lowly, Before th' eternal throne,\nSing Holy, Holy, Holy, To the great Three in One.",
      "On thee, at the creation, The light first had its birth;\nOn thee for our salvation Christ rose from depths of earth;\nOn thee our Lord victorious The Spirit sent from heaven;\nAnd thus on thee most glorious A triple light was given.",
      "Thou art a cooling fountain In life's dry, parched gully;\nFrom thee, like Pisgah's mountain, We view our promised land;\nA day of sweet refection, A day of holy love,\nA day of resurrection From earth to things above."
    ]
  },
  {
    id: 303,
    number: 303,
    title: "O Father, All Creating",
    category: "Worship",
    author: "John Ellerton",
    tune: "AURELIA",
    verses: [
      "O Father, all creating, Whose guidance they adore,\nKneel now before Thee, waiting Thy blessing evermore.",
      "To Thee, O Lord, we render Our thanks for all Thy love;\nThy mercies, deep and tender, Are showered from above.",
      "Oh, grant them Thy protection, And lead them in Thy way;\nThat in Thy love's reflection They walk from day to day.",
      "And when their life is ended, And all their work is done,\nMay they, by Thee befriended, Be gathered to Thy throne."
    ]
  },
  {
    id: 304,
    number: 304,
    title: "O Food to Pilgrims Given",
    category: "Communion",
    author: "Latin, 17th Century",
    tune: "INNSBRUCK",
    verses: [
      "O Food to pilgrims given, O Bread of life from heaven,\nO Manna from on high! We hunger for Thy blessing,\nThy love and grace possessing, Our spirits satisfy.",
      "O Fountain, ever flowing, Thy life and peace bestowing,\nFrom out the Savior's side! We drink the living water,\nAnd find in Thee our shelter, In Thee we now abide.",
      "O Jesus, by Thee hidden, From out the world's dark prison,\nWe seek Thy face to see; And in Thy love's reflection,\nWe find our soul's perfection, And rest alone in Thee."
    ]
  },
  {
    id: 305,
    number: 305,
    title: "O Gladsome Light, O Grace",
    category: "Evening",
    author: "Greek, 3rd Century",
    tune: "NUNC DIMITTIS",
    verses: [
      "O gladsome light, O grace Of God the Father's face,\nTh' eternal splendor wearing; In Thee, O Christ, we see\nThe Father's majesty, Thy love and grace declaring.",
      "Now that the sun is set, And evening shadows met,\nWe sing our hymn of praise; To Father, Son, and Spirit,\nWhose love and grace we merit, Our cheerful songs we raise.",
      "Worthy art Thou at all times To be praised with holy rhymes,\nO Son of God, Life-giver; Therefore the world doth glorify\nThy Name, O Lord, on high, For ever and for ever."
    ]
  },
  {
    id: 306,
    number: 306,
    title: "O God of Earth and Altar",
    category: "Worship",
    author: "G. K. Chesterton",
    tune: "KING'S LYNN",
    verses: [
      "O God of earth and altar, Bow down and hear our cry,\nOur earthly rulers falter, Our people drift and die;\nThe walls of gold entomb us, The swords of scorn divide,\nTake not Thy thunder from us, But take away our pride.",
      "From all that terror teaches, From lies of tongue and pen,\nFrom all the easy speeches That comfort cruel men,\nFrom sale and profanation Of honor and the sword,\nFrom sleep and from damnation, Deliver us, good Lord!",
      "Tie in a living tether The prince and priest and thrall,\nBind all our lives together, Smite us and save us all;\nIn ire and exultation Aflame with faith, and free,\nLift up a living nation, A single sword to Thee."
    ]
  },
  {
    id: 307,
    number: 307,
    title: "O God of Truth, Whose Living Word",
    category: "Worship",
    author: "Thomas Hughes",
    tune: "ST. STEPHEN",
    verses: [
      "O God of truth, whose living word Upholds whate'er hath breath,\nLook down on Thy creation, Lord, Enslaved by sin and death.",
      "Set up Thy standard, Lord, that we, Who claim a heavenly birth,\nMay march with Thee to liberty, And teach Thy truth on earth.",
      "Then shall the world's dark night be past, And morning's light appear;\nAnd all shall find their rest at last, In Thee, O Lord, most dear.",
      "To Thee, O Father, Son, and Spirit, Be praise and glory given;\nBy all who Thy dear love inherit, In earth and high in heaven."
    ]
  },
  {
    id: 308,
    number: 308,
    title: "O Holy Spirit, Lord of Grace",
    category: "Worship",
    author: "Charles Coffin",
    tune: "TALLIS' ORDINAL",
    verses: [
      "O Holy Spirit, Lord of grace, Eternal fount of love,\nInflame, we pray, our inmost hearts With fire from heaven above.",
      "As Thou in bond of love dost join The Father and the Son,\nSo fill us all with charity, That we may all be one.",
      "To God the Father, God the Son, And God the Holy Ghost,\nAll glory be from saints on earth, And from the angel host."
    ]
  },
  {
    id: 309,
    number: 309,
    title: "O Jesus, King Most Wonderful",
    category: "Praise",
    author: "Bernard of Clairvaux",
    tune: "METZLER'S REDHEAD",
    verses: [
      "O Jesus, King most wonderful, Thou Conqueror renowned,\nThou Sweetness ineffable, In whom all joys are found!",
      "When once Thou visitest the heart, Then truth begins to shine,\nThen earthly vanities depart, Then kindles love divine.",
      "O Jesus, Light of all below, Thou Fount of life and fire,\nSurpassing all the joys we know, And all we can desire.",
      "May every heart confess Thy Name, And ever Thee adore;\nAnd seeking Thee, itself inflame To seek Thee more and more."
    ]
  },
  {
    id: 310,
    number: 310,
    title: "O King Enthroned on High",
    category: "Praise",
    author: "Greek, 8th Century",
    tune: "TEMPLE",
    verses: [
      "O King enthroned on high, Thou Comforter divine,\nBlest Spirit of all truth, be nigh And make our spirits Thine.",
      "Thou art the Fount of life, Thou art the Fire of love;\nOh, come and dwell within our hearts, With power from heaven above.",
      "To Thee, O Father, Son, And Spirit, glory be;\nAs was, and is, and shall be still, To all eternity."
    ]
  },
  {
    id: 311,
    number: 311,
    title: "O Light of Light, by Love Revealed",
    category: "Worship",
    author: "Laurence Housman",
    tune: "ST. BARTHOLOMEW",
    verses: [
      "O Light of Light, by love revealed, To whom the angel host on high\nIn adoration low have kneeled, And sing Thy praises in the sky.",
      "Thou cam'st to us in lowliness, To seek and save the lost and lone;\nAnd in Thy love's great holiness, Thou mad'st our every grief Thine own.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our hearts to Thee may give."
    ]
  },
  {
    id: 312,
    number: 312,
    title: "O Lord of Heaven and Earth and Sea",
    category: "Praise",
    author: "Christopher Wordsworth",
    tune: "ES IST KEIN TAG",
    verses: [
      "O Lord of heaven and earth and sea, To Thee all praise and glory be;\nHow shall we show our love to Thee, Who givest all?",
      "The golden sunshine, vernal air, Sweet flowers and fruits Thy love declare;\nWhere harvests ripen, Thou art there, Who givest all.",
      "For peaceful homes and healthful days, For all the blessings earth displays,\nWe owe Thee thankfulness and praise, Who givest all.",
      "Thou didst not spare Thine only Son, But gav'st Him for a world undone,\nAnd freely with that Blessed One Thou givest all."
    ]
  },
  {
    id: 313,
    number: 313,
    title: "O Lord, How Happy Should We Be",
    category: "Comfort",
    author: "Joseph Anstice",
    tune: "ST. MATTHIAS",
    verses: [
      "O Lord, how happy should we be If we could cast our care on Thee,\nIf we from self could rest; And feel at heart that One above,\nIn perfect wisdom, perfect love, Is working for the best.",
      "How far from this our daily life, Ever disturbed by anxious strife,\nBy sudden wild alarms; Oh, could we but relinquish all\nOur earthly props, and simply fall On Thine almighty arms!",
      "Could we but kneel and cast our load, E'en while we bless the guiding God,\nOn His almighty breast; And feel at heart that One above,\nIn perfect wisdom, perfect love, Is working for the best."
    ]
  },
  {
    id: 314,
    number: 314,
    title: "O Lord, in Thee Is All My Trust",
    category: "Worship",
    author: "Anonymous, 16th Century",
    tune: "ST. MARY",
    verses: [
      "O Lord, in Thee is all my trust, Give ear unto my cry;\nRefuse me not that am but dust, And at Thy feet do lie.",
      "Behold, O Lord, my heavy heart, My sorrows and my grief;\nAnd in Thy mercy, Lord, impart Thy comfort and relief.",
      "To Thee, O Lord, I make my prayer, To Thee I lift mine eye;\nOh, save me from the world's dark snare, And help me when I die."
    ]
  },
  {
    id: 315,
    number: 315,
    title: "O Lord, Increase My Faith",
    category: "Worship",
    author: "Orlando Gibbons",
    tune: "ST. ANNE",
    verses: [
      "O Lord, increase my faith, strengthen me and deliver me from my sins,\nAnd let me live in Thy fear and love, and serve Thee all my days.",
      "Oh, grant me, Lord, Thy grace to see, And in Thy love's reflection live;\nThat I may follow only Thee, And all my heart to Thee may give."
    ]
  },
  {
    id: 316,
    number: 316,
    title: "O Lord, It Is a Blessed Thing",
    category: "Worship",
    author: "W. Walsham How",
    tune: "ST. FLAVIAN",
    verses: [
      "O Lord, it is a blessed thing To Thee our cheerful songs to bring,\nAnd thankfully we gather; To bless the love of God our King,\nOur Father and our Brother.",
      "Full of the joy that life should know, And full of hope and gladness,\nWe fear no future, feel no woe, And know no thought of sadness.",
      "For God is love, and God is light, And God is our salvation;\nIn Him we live, in Him we fight, In Him is our foundation."
    ]
  },
  {
    id: 317,
    number: 317,
    title: "O Lord, My God, I Will Give Thanks to Thee",
    category: "Praise",
    author: "Anonymous",
    tune: "ST. STEPHEN",
    verses: [
      "O Lord, my God, I will give thanks to Thee for evermore;\nFor all Thy love and grace to me, Thy Name I will adore.",
      "Thou art my strength, Thou art my song, Thou art my hope and stay;\nTo Thee all praise and thanks belong, From day to day, alway."
    ]
  },
  {
    id: 318,
    number: 318,
    title: "O Lord, Turn Not Thy Face Away",
    category: "Passion",
    author: "John Marckant",
    tune: "ST. MARY",
    verses: [
      "O Lord, turn not Thy face away From them that lowly lie,\nLamenting sore their sinful life With tears and bitter cry.",
      "Thy mercy-gates are open wide To them that mourn their sin;\nOh, shut them not against us, Lord, But let us enter in.",
      "We come, O Lord, to Thy dear feet, With broken, contrite hearts;\nGive what Thine eye delights to see, Truth in the inward parts."
    ]
  },
  {
    id: 319,
    number: 319,
    title: "O Love Divine, What Hast Thou Done",
    category: "Passion",
    author: "Charles Wesley",
    tune: "SELINA",
    verses: [
      "O Love divine, what hast Thou done! Th' immortal God hath died for me!\nThe Father's co-eternal Son Bore all my sins upon the tree.\nTh' immortal God for me hath died: My Lord, my Love is crucified.",
      "Behold Him, all ye that pass by, The bleeding Prince of life and peace!\nCome, sinners, see your Savior die, And say, was ever grief like His?\nCome, feel with me His blood applied: My Lord, my Love is crucified.",
      "Is crucified for me and you, To bring us rebels back to God:\nBelieve, believe the record true, Ye all are bought with Jesus' blood.\nPardon for all flows from His side: My Lord, my Love is crucified."
    ]
  },
  {
    id: 320,
    number: 320,
    title: "O Splendor of God's Glory Bright",
    category: "Morning",
    author: "Ambrose of Milan",
    tune: "PUER NOBIS",
    verses: [
      "O splendor of God's glory bright, From light eternal bringing light;\nThou Light of life, Light's living Spring, True Day, all days illumining.",
      "Come, very Sun of heaven's love, In lasting radiance from above;\nAnd pour the Holy Spirit's ray On all we think or do today.",
      "To God the Father glory be, And to His Son, who sets us free;\nWith God the Spirit, Three in One, While endless ages onward run."
    ]
  },
  {
    id: 321,
    number: 321,
    title: "O Merciful Creator, Hear",
    category: "Passion",
    author: "Gregory the Great",
    tune: "ST. GREGORY",
    verses: [
      "O merciful Creator, hear! To us in pity bow Thine ear;\nAccept the tearful prayers we raise In this our fast of forty days.",
      "Our hearts are open, Lord, to Thee; Thou knowest our infirmity;\nPour out on all who seek Thy face Abundance of Thy pardoning grace.",
      "Our sins are many, this we know; Spare us, good Lord, Thy mercy show;\nAnd for the honor of Thy Name, Our fainting souls to life reclaim."
    ]
  },
  {
    id: 322,
    number: 322,
    title: "O My Savior, Lifted",
    category: "Passion",
    author: "W. Walsham How",
    tune: "NORTH COATES",
    verses: [
      "O my Savior, lifted From the earth for me,\nDraw me, in Thy mercy, Nearer unto Thee.",
      "Lift my earth-bound spirit, Free my soul from sin;\nLet Thy love's reflection Shine my heart within.",
      "In Thy cross's shadow, Let me find my rest;\nIn Thy love's great holiness, Let my soul be blest."
    ]
  },
  {
    id: 323,
    number: 323,
    title: "O Praise Ye the Lord! Praise Him in the Height",
    category: "Praise",
    author: "H. W. Baker",
    tune: "LAUDATE DOMINUM",
    verses: [
      "O praise ye the Lord! Praise Him in the height;\nRejoice in His Word, Ye angels of light;\nYe heavens, adore Him By whom ye were made,\nAnd worship before Him In brightness arrayed.",
      "O praise ye the Lord! Praise Him upon earth,\nIn tuneful accord, Ye sons of new birth;\nPraise Him who hath brought you His grace from above,\nPraise Him who hath taught you To sing of His love.",
      "O praise ye the Lord, All things that give sound;\nEach jubilant chord Re-echo around;\nLoud organs, His glory Forth tell in deep tone,\nAnd sweet harp, the story Of what He hath done."
    ]
  },
  {
    id: 324,
    number: 324,
    title: "O Quickly Come, Dread Judge of All",
    category: "Worship",
    author: "Lawrence Tuttiett",
    tune: "VENI EMMANUEL",
    verses: [
      "O quickly come, dread Judge of all; For, awful though Thine advent be,\nAll shadows from the truth will fall, And falsehood die, in sight of Thee.",
      "O quickly come: for grief and pain Can never more Thy presence share;\nAnd all Thy saints shall rise again, To find their rest and dwelling-place there.",
      "O quickly come: for Thou art Light; And in Thy light we all shall see;\nThe world's dark night shall take its flight, And all shall find their rest in Thee."
    ]
  },
  {
    id: 325,
    number: 325,
    title: "O Sacred Head, Surrounded",
    category: "Passion",
    author: "Bernard of Clairvaux",
    tune: "PASSION CHORALE",
    verses: [
      "O sacred head, surrounded By crown of piercing thorn!\nO bleeding head, so wounded, Reviled and put to scorn!",
      "Death's pallid hue comes o'er Thee, The glow of life decays,\nYet angel hosts adore Thee, And tremble as they gaze.",
      "I see Thy strength and vigor All fading in the strife,\nAnd death with cruel rigor Bereaving Thee of life.",
      "O agony and dying! O love to sinners free!\nJesus, all grace supplying, Oh, turn Thy face on me."
    ]
  },
  {
    id: 326,
    number: 326,
    title: "O Savior, Precious Savior",
    category: "Praise",
    author: "Frances R. Havergal",
    tune: "ANGEL VOICES",
    verses: [
      "O Savior, precious Savior, Whom yet unseen we love!\nO Name of might and favor, All other names above!",
      "We worship Thee, we bless Thee, To Thee, O Christ, we sing;\nWe praise Thee, and confess Thee Our holy Lord and King.",
      "O Bringer of salvation, Who wondrously hast wrought,\nAs of Thine own creation, The love that Thou hast sought.",
      "In Thee all fullness dwelleth, All grace and power divine;\nThe glory that excelleth, O Son of God, is Thine."
    ]
  },
  {
    id: 327,
    number: 327,
    title: "O Savior, Where Shall Guilty Man",
    category: "Passion",
    author: "C. E. May",
    tune: "ST. BERNARD",
    verses: [
      "O Savior, where shall guilty man Find rest and peace but in Thy blood?\nNo other hope, no other plan, Can bring us back to God.",
      "We come, O Lord, to Thy dear feet, With broken, contrite hearts;\nGive what Thine eye delights to see, Truth in the inward parts.",
      "Oh, grant us, Lord, Thy grace to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 328,
    number: 328,
    title: "O Son of God, Our Captain of Salvation",
    category: "Worship",
    author: "John Ellerton",
    tune: "ENGELBERG",
    verses: [
      "O Son of God, our Captain of salvation, Thyself by suffering perfected in love,\nLook down in pity on Thy congregation, And lead us to Thy heavenly home above.",
      "Thou cam'st to us in lowliness of thought; By Thee the outcast and the poor were sought;\nAnd by Thy death was God's salvation wrought: Alleluia!",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 329,
    number: 329,
    title: "O Spirit of the Living God",
    category: "Missionary",
    author: "James Montgomery",
    tune: "MAINZER",
    verses: [
      "O Spirit of the living God, In all Thy plenitude of grace,\nWhere'er the foot of man hath trod, Descend on our apostate race.",
      "Give tongues of fire and hearts of love To preach the reconciling word;\nGive power and unction from above, Whene'er the joyful sound is heard.",
      "Be darkness at Thy coming light, Confusion order in Thy path;\nSouls without strength inspire with might, Bid mercy triumph over wrath."
    ]
  },
  {
    id: 331,
    number: 331,
    title: "O Thou in All Thy Might So Far",
    category: "Worship",
    author: "Frederick L. Hosmer",
    tune: "ST. STEPHEN",
    verses: [
      "O Thou in all Thy might so far, In all Thy love so near,\nBeyond the range of sun and star, And yet within the ear.",
      "What if Thy form we cannot see? We know and feel that Thou art here;\nAnd in Thy love's great holiness, We find our rest and dwelling-place.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 333,
    number: 333,
    title: "O Thou, Who Dost to Man Accord",
    category: "Worship",
    author: "Latin, 6th Century",
    tune: "INNSBRUCK",
    verses: [
      "O Thou, who dost to man accord The highest prize and best reward,\nThou only Source of all our good, By whom we live and move and are.",
      "Look down in pity on our race, And grant us Thy sustaining grace;\nThat we may walk in Thy dear light, And serve Thee with our every might.",
      "To Thee, O Father, Son, and Spirit, Be praise and glory given;\nBy all who Thy dear love inherit, In earth and high in heaven."
    ]
  },
  {
    id: 334,
    number: 334,
    title: "O Thou, Who Makest Souls to Shine",
    category: "Worship",
    author: "John Armstrong",
    tune: "ST. LAWRENCE",
    verses: [
      "O Thou who makest souls to shine With light from brighter worlds above,\nAnd droppest dew of grace divine On all who seek a Savior's love.",
      "Do Thou Thy benediction give On all who teach, on all who learn,\nThat so Thy Church may holier live, And every lamp more brightly burn.",
      "Give those who teach pure hearts and wise, Faith, hope, and love, all warmed by prayer;\nAnd those who learn, that heavenly prize Which all who follow Thee shall share."
    ]
  },
  {
    id: 335,
    number: 335,
    title: "O Thou, Whose All-Redeeming Might",
    category: "Worship",
    author: "Latin, 8th Century",
    tune: "ST. AMBROSE",
    verses: [
      "O Thou, whose all-redeeming might Crowns every saint in realms of light,\nAccept the humble prayers we raise In this our song of holy praise.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 336,
    number: 336,
    title: "O Trinity, Most Blessed Light",
    category: "Evening",
    author: "Ambrose of Milan",
    tune: "O LUX BEATA TRINITAS",
    verses: [
      "O Trinity, most blessed light, O Unity of sovereign might,\nAs now the fiery sun departs, Shed Thou Thy beams within our hearts.",
      "To Thee our morning song of praise, To Thee our evening prayer we raise;\nThy glory suppliant we adore For ever and for evermore.",
      "To God the Father, glory be, And to His Son, who sets us free;\nWith God the Spirit, Three in One, While endless ages onward run."
    ]
  },
  {
    id: 337,
    number: 337,
    title: "O Very God of Very God",
    category: "Praise",
    author: "John Mason Neale",
    tune: "BANGOR",
    verses: [
      "O very God of very God, And very Light of Light,\nWhose feet this earth's dark valley trod, That we might walk in white.",
      "Our hope is in Thy holy Name, Our trust is in Thy Word;\nOh, save us from the world's dark shame, And help us, gracious Lord.",
      "To Thee, O Father, Son, and Spirit, Be praise and glory given;\nBy all who Thy dear love inherit, In earth and high in heaven."
    ]
  },
  {
    id: 338,
    number: 338,
    title: "O What Their Joy and Their Glory Must Be",
    category: "Praise",
    author: "Peter Abelard",
    tune: "O QUANTA QUALIA",
    verses: [
      "O what their joy and their glory must be, Those endless Sabbaths the blessed ones see!\nCrown for the valiant, to weary ones rest; God shall be all, and in all ever blest.",
      "What are the Monarch, His court, and His throne? What are the peace and the joy that they own?\nTell us, ye blest ones, that in it adore, If ye have words like the glory ye store.",
      "Truly Jerusalem name we that shore, Vision of peace, that brings joy evermore;\nWish and fulfillment can severed be ne'er, Nor the thing prayed for come short of the prayer."
    ]
  },
  {
    id: 339,
    number: 339,
    title: "O Word of God Incarnate",
    category: "Worship",
    author: "W. Walsham How",
    tune: "AURELIA",
    verses: [
      "O Word of God incarnate, O Wisdom from on high,\nO Truth unchanged, unchanging, O Light of our dark sky;\nWe praise Thee for the radiance That from the hallowed page,\nA lantern to our footsteps, Shines on from age to age.",
      "The Church from her dear Master Received the gift divine,\nAnd still that light she lifteth O'er all the earth to shine.\nIt is the golden casket Where gems of truth are stored;\nIt is the heaven-drawn picture Of Christ, the living Word.",
      "It floateth like a banner Before God's host unfurled;\nIt shineth like a beacon Above the darkling world;\nIt is the chart and compass That o'er life's surging sea,\n'Mid mists and rocks and quicksands, Still guides, O Christ, to Thee."
    ]
  },
  {
    id: 340,
    number: 340,
    title: "O Zion, Haste, Thy Mission High Fulfilling",
    category: "Missionary",
    author: "Mary A. Thomson",
    tune: "TIDINGS",
    verses: [
      "O Zion, haste, thy mission high fulfilling, To tell to all the world that God is Light;\nThat He who made all nations is not willing One soul should perish, lost in shades of night.",
      "Publish glad tidings, tidings of peace; Tidings of Jesus, redemption and release.",
      "Behold how many thousands still are lying Bound in the darksome prison-house of sin,\nWith none to tell them of the Savior's dying, Or of the life He died for them to win.",
      "Proclaim to every people, tongue, and nation That God, in whom they live and move, is Love;\nTell how He stooped to save His lost creation, And died on earth that man might live above."
    ]
  },
  {
    id: 341,
    number: 341,
    title: "Of the Father's Love Begotten",
    category: "Praise",
    author: "Prudentius",
    tune: "DIVINUM MYSTERIUM",
    verses: [
      "Of the Father's love begotten, Ere the worlds began to be,\nHe is Alpha and Omega, He the source, the ending He,\nOf the things that are, that have been, And that future years shall see,\nEvermore and evermore!",
      "At His Word the worlds were framed; He commanded; it was done:\nHeaven and earth and depths of ocean In their threefold order one;\nAll that grows beneath the shining Of the moon and burning sun,\nEvermore and evermore!",
      "O that birth for ever blessed, When the Virgin, full of grace,\nBy the Holy Ghost conceiving, Bore the Savior of our race;\nAnd the Babe, the world's Redeemer, First revealed His sacred face,\nEvermore and evermore!"
    ]
  },
  {
    id: 342,
    number: 342,
    title: "Oft in Danger, Oft in Woe",
    category: "Worship",
    author: "Henry Kirke White",
    tune: "UNIVERSITY COLLEGE",
    verses: [
      "Oft in danger, oft in woe, Onward, Christians, onward go;\nBear the toil, maintain the strife, Strengthened with the Bread of Life.",
      "Let your drooping hearts be glad; March in heavenly armor clad;\nFight, nor think the battle long, Soon shall victory tune your song.",
      "Let not sorrow dim your eye, Soon shall every tear be dry;\nLet not fears your course impede, Great your strength, if great your need."
    ]
  },
  {
    id: 343,
    number: 343,
    title: "On Our Way Rejoicing",
    category: "Praise",
    author: "J. S. B. Monsell",
    tune: "HERMAS",
    verses: [
      "On our way rejoicing, As we homeward move,\nHarken to our praises, O Thou God of love!",
      "Is there grief or sadness? Thine it cannot be!\nIs there holy gladness? It is all from Thee!",
      "On our way rejoicing, Gladly let us go;\nConquering all our sorrows, Triumphing o'er the foe."
    ]
  },
  {
    id: 344,
    number: 344,
    title: "On This Day, the First of Days",
    category: "Morning",
    author: "Latin, 18th Century",
    tune: "LUBECK",
    verses: [
      "On this day, the first of days, God the Father's Name we praise;\nWho, creation's Lord and Spring, Did the world from darkness bring.",
      "On this day th' eternal Son Over death His triumph won;\nOn this day the Spirit came With His gifts of living flame.",
      "Father, who didst fashion man Godlike in Thy loving plan,\nFill us with Thy light and love, Lead us to Thy home above."
    ]
  },
  {
    id: 345,
    number: 345,
    title: "Once, Only Once, and Once for All",
    category: "Communion",
    author: "William Bright",
    tune: "ALBANO",
    verses: [
      "Once, only once, and once for all, His precious life He gave;\nBefore the cross our spirits fall, And find Him strong to save.",
      "One offering, single and complete, With love and grace is stored;\nAnd here we find His mercy-seat, And bless our living Lord.",
      "To Thee, O Father, Son, and Spirit, Be praise and glory given;\nBy all who Thy dear love inherit, In earth and high in heaven."
    ]
  },
  {
    id: 346,
    number: 346,
    title: "Our Day of Praise Is Done",
    category: "Evening",
    author: "John Ellerton",
    tune: "GARDINER",
    verses: [
      "Our day of praise is done, The evening shadows fall;\nBut pass not from us with the sun, True Light that lightenest all.",
      "Around the throne on high, Where night can never be,\nThe white-robed harpers of the sky Bring ceaseless hymns to Thee.",
      "Too faint our anthems here, Too soon of praise we tire;\nBut oh, the strains how full and clear Of that eternal choir!"
    ]
  },
  {
    id: 347,
    number: 347,
    title: "Our Father, by Whose Name",
    category: "Worship",
    author: "F. Bland Tucker",
    tune: "RHOSYMEDRE",
    verses: [
      "Our Father, by whose Name All fatherhood is known,\nWho dost in love proclaim Each family Thine own.",
      "Bless Thou the parents, Lord, With wisdom and with grace;\nThat they may walk in Thy dear Word, And seek Thy holy face.",
      "Bless Thou the children, too, And keep them in Thy way;\nThat they may find Thy promise true, And serve Thee day by day."
    ]
  },
  {
    id: 348,
    number: 348,
    title: "Our Lord, His Passion Ended",
    category: "Praise",
    author: "F. C. Burkitt",
    tune: "NUN DANKET ALL",
    verses: [
      "Our Lord, His passion ended, Hath passed beyond the sky;\nAnd to His throne ascended, In glorious majesty.",
      "But still His love is near us, To guide us in His way;\nAnd still His Word shall cheer us, Through every darkling day.",
      "To Thee, O Father, Son, and Spirit, Be praise and glory given;\nBy all who Thy dear love inherit, In earth and high in heaven."
    ]
  },
  {
    id: 349,
    number: 349,
    title: "Out of the Deep I Cry",
    category: "Passion",
    author: "H. W. Baker",
    tune: "SOUTHWELL",
    verses: [
      "Out of the deep I cry, O Lord, to Thee on high;\nIn this my hour of misery, Oh, harken to my cry.",
      "My sins are many, Lord, This I with grief record;\nBut in Thy mercy, Lord, impart Thy comfort and relief.",
      "To Thee, O Lord, I make my prayer, To Thee I lift mine eye;\nOh, save me from the world's dark snare, And help me when I die."
    ]
  },
  {
    id: 350,
    number: 350,
    title: "Palms of Glory, Raiment Bright",
    category: "Praise",
    author: "James Montgomery",
    tune: "PALMS OF GLORY",
    verses: [
      "Palms of glory, raiment bright, Crowns that never fade away,\nGird and deck the saints in light, Priests and kings and conquerors they.",
      "Yet the conquerors bring their palms To the Lamb amidst the throne,\nAnd proclaim in joyful psalms Victory through His cross alone.",
      "Kings for harps their crowns resign, Crying, as they strike the chords,\n'Take the kingdom, it is Thine, King of kings, and Lord of lords!'"
    ]
  },
  {
    id: 351,
    number: 351,
    title: "Pray That Jerusalem May Have",
    category: "Worship",
    author: "Scottish Psalter",
    tune: "YORK",
    verses: [
      "Pray that Jerusalem may have Peace and felicity;\nLet them that love thee and thy peace Have still prosperity.",
      "Therefore I wish that peace may still Within thy walls remain,\nAnd ever may thy palaces Prosperity retain.",
      "Now, for my friends' and brethren's sakes, 'Peace be in thee,' I'll say;\nAnd for the house of God our Lord, I'll seek thy good alway."
    ]
  },
  {
    id: 353,
    number: 353,
    title: "Saviour, Again to Thy Dear Name We Raise",
    category: "Evening",
    author: "John Ellerton",
    tune: "ELLERS",
    verses: [
      "Saviour, again to Thy dear Name we raise With one accord our parting hymn of praise;\nWe stand to bless Thee ere our worship cease, Then, lowly kneeling, wait Thy word of peace.",
      "Grant us Thy peace upon our homeward way; With Thee began, with Thee shall end the day;\nGuard Thou the lips from sin, the hearts from shame, That in this house have called upon Thy Name.",
      "Grant us Thy peace throughout our earthly life, Our balm in sorrow, and our stay in strife;\nThen, when Thy voice shall bid our conflict cease, Call us, O Lord, to Thine eternal peace."
    ]
  },
  {
    id: 354,
    number: 354,
    title: "See, Father, Thy Beloved Son",
    category: "Communion",
    author: "W. H. H. Jervois",
    tune: "ST. OSWALD",
    verses: [
      "See, Father, Thy beloved Son, Whom Thou hast given for our sake;\nAnd in His love's great holiness, We find our rest and dwelling-place.",
      "We come, O Lord, to Thy dear feet, With broken, contrite hearts;\nGive what Thine eye delights to see, Truth in the inward parts.",
      "Oh, grant us, Lord, Thy grace to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 355,
    number: 355,
    title: "Shepherd of Souls, Refresh and Bless",
    category: "Communion",
    author: "James Montgomery",
    tune: "ST. AGNES",
    verses: [
      "Shepherd of souls, refresh and bless Thy chosen pilgrim flock\nWith manna in the wilderness, With water from the rock.",
      "We would not live by bread alone, But by Thy Word of grace,\nIn strength of which we travel on To our abiding-place.",
      "Be known to us in breaking bread, But do not then depart;\nSavior, abide with us, and spread Thy table in our heart."
    ]
  },
  {
    id: 356,
    number: 356,
    title: "Sing Alleluia Forth in Duteous Praise",
    category: "Praise",
    author: "Latin, 5th Century",
    tune: "MARTINS",
    verses: [
      "Sing Alleluia forth in duteous praise, Ye citizens of heaven, O sweetly raise\nAn endless Alleluia!",
      "Ye powers, who stand before th' eternal throne, In joyful songs His mighty power make known,\nAn endless Alleluia!",
      "The holy city shall take up the strain, And with glad songs make echo back again,\nAn endless Alleluia!"
    ]
  },
  {
    id: 357,
    number: 357,
    title: "Sing Praise to God Who Reigns Above",
    category: "Praise",
    author: "Johann J. Schutz",
    tune: "MIT FREUDEN ZART",
    verses: [
      "Sing praise to God who reigns above, The God of all creation,\nThe God of power, the God of love, The God of our salvation;\nWith healing balm my soul He fills, And every faithless murmur stills:\nTo God all praise and glory!",
      "The angel host, O King of kings, Thy praise for ever telling,\nIn earth and sky all living things Beneath Thy shadow dwelling,\nAdore the wisdom which could span, And keep the world which He began:\nTo God all praise and glory!",
      "What God's almighty power hath made, His gracious mercy keepeth;\nBy morning glow or evening shade His watchful eye ne'er sleepeth;\nWithin the kingdom of His might, Lo! all is just and all is right:\nTo God all praise and glory!"
    ]
  },
  {
    id: 358,
    number: 358,
    title: "Sing, My Tongue, the Glorious Battle",
    category: "Passion",
    author: "Venantius Fortunatus",
    tune: "PANGE LINGUA",
    verses: [
      "Sing, my tongue, the glorious battle, Sing the ending of the fray;\nNow above the cross, the trophy, Sound the loud triumphant lay;\nTell how Christ, the world's Redeemer, As a victim won the day.",
      "Thirty years among us dwelling, His appointed time fulfilled,\nBorn for this, He meets His passion, For that this He freely willed;\nOn the cross the Lamb is lifted, Where His life-blood shall be spilled.",
      "Bend thy boughs, O tree of glory! Thy relaxing sinews bend;\nFor a while the ancient rigor That thy birth bestowed, suspend;\nAnd the King of heavenly beauty Gently on thine arms extend."
    ]
  },
  {
    id: 359,
    number: 359,
    title: "Soldiers of the Cross, Arise",
    category: "Worship",
    author: "W. Walsham How",
    tune: "ORIENTIS PARTIBUS",
    verses: [
      "Soldiers of the cross, arise! Gird you with your armor bright;\nMighty are your enemies, Hard the battle ye must fight.",
      "O'er a faithless fallen world Raise your banner in the sky;\nLet it float there wide unfurled; Bear it onward till ye die.",
      "To the weary and the worn Tell of realms where sorrows cease;\nTo the wretched and forlorn Speak of blessing and of peace."
    ]
  },
  {
    id: 360,
    number: 360,
    title: "Soul of My Saviour, Sanctify My Breast",
    category: "Communion",
    author: "Latin, 14th Century",
    tune: "ANIMA CHRISTI",
    verses: [
      "Soul of my Saviour, sanctify my breast; Body of Christ, be Thou my saving guest;\nBlood of my Saviour, bathe me in Thy tide, Wash me with water flowing from Thy side.",
      "Strength and protection may Thy passion be; O blessed Jesus, hear and answer me;\nDeep in Thy wounds, Lord, hide and shelter me; So shall I never, never part from Thee.",
      "Guard and defend me from the foe malign; In death's last moments make me only Thine;\nCall me and bid me come to Thee on high, Where I may praise Thee with Thy saints for aye."
    ]
  },
  {
    id: 361,
    number: 361,
    title: "Stand Up, and Bless the Lord",
    category: "Praise",
    author: "James Montgomery",
    tune: "ST. MICHAEL",
    verses: [
      "Stand up, and bless the Lord, Ye people of His choice;\nStand up, and bless the Lord your God With heart and soul and voice.",
      "Though high above all praise, Above all blessing high,\nWho would not fear His holy Name, And laud and magnify?",
      "Oh, for the living flame From His own altar brought,\nTo touch our lips, our minds inspire, And wing to heaven our thought!"
    ]
  },
  {
    id: 362,
    number: 362,
    title: "Strengthen for Service, Lord, the Hands",
    category: "Communion",
    author: "Liturgy of Malabar",
    tune: "ACH GOTT UND HERR",
    verses: [
      "Strengthen for service, Lord, the hands That holy things have taken;\nLet not the ears that heard Thy Word By fears and doubts be shaken.",
      "The tongues that 'Holy' sang aloud, Keep free from all deception;\nThe eyes that saw Thy love revealed, Be bright with Thy reflection.",
      "The feet that tread Thy holy courts, From light to light still leading;\nThe hearts that in Thy love abide, Be filled with Thy dear pleading."
    ]
  },
  {
    id: 363,
    number: 363,
    title: "Sweet Is the Work, My God, My King",
    category: "Worship",
    author: "Isaac Watts",
    tune: "DEEPING",
    verses: [
      "Sweet is the work, my God, my King, To praise Thy Name, give thanks and sing;\nTo show Thy love by morning light, And talk of all Thy truth at night.",
      "Sweet is the day of sacred rest; No mortal cares shall seize my breast;\nOh, may my heart in tune be found, Like David's harp of solemn sound!",
      "My heart shall triumph in my Lord, And bless His works, and bless His Word;\nThy works of grace, how bright they shine! How deep Thy counsels, how divine!"
    ]
  },
  {
    id: 364,
    number: 364,
    title: "Sweet Saviour, Bless Us Ere We Go",
    category: "Evening",
    author: "F. W. Faber",
    tune: "ST. MATTHIAS",
    verses: [
      "Sweet Saviour, bless us ere we go; Thy Word into our minds instill;\nAnd make our lukewarm hearts to glow With lowly love and fervent will.",
      "Through life's long day and death's dark night, O gentle Jesus, be our Light.",
      "The day is gone, its hours have run, And Thou hast taken count of all,\nThe scanty triumphs grace hath won, The broken vow, the frequent fall.",
      "Grant us, dear Lord, from evil ways True absolution and release;\nAnd bless us, more than in past days, With purity and inward peace."
    ]
  },
  {
    id: 365,
    number: 365,
    title: "Sweet the Moments, Rich in Blessing",
    category: "Passion",
    author: "Walter Shirley",
    tune: "BATTY",
    verses: [
      "Sweet the moments, rich in blessing, Which before the cross I spend,\nLife and health and peace possessing From the sinner's dying Friend.",
      "Here I'll sit for ever viewing Mercy's streams, in streams of blood;\nPrecious drops, my soul bedewing, Plead and claim my peace with God.",
      "Truly blessed is this station, Low before His cross to lie;\nWhile I see divine compassion Beaming from His languid eye."
    ]
  },
  {
    id: 366,
    number: 366,
    title: "Teach Me, My God and King",
    category: "Worship",
    author: "George Herbert",
    tune: "SANDYS",
    verses: [
      "Teach me, my God and King, In all things Thee to see;\nAnd what I do in anything, To do it as for Thee.",
      "A man that looks on glass, On it may stay his eye;\nOr if he pleaseth, through it pass, And then the heaven espy.",
      "All may of Thee partake; Nothing can be so mean,\nWhich with this tincture, 'for Thy sake,' Will not grow bright and clean."
    ]
  },
  {
    id: 367,
    number: 367,
    title: "The God of Love My Shepherd Is",
    category: "Comfort",
    author: "George Herbert",
    tune: "UNIVERSITY",
    verses: [
      "The God of love my Shepherd is, And He that doth me feed;\nWhile He is mine and I am His, What can I want or need?",
      "He leads me to the tender grass, Where I both feed and rest;\nThen to the streams that gently pass: In Him I have the best.",
      "Or if I stray, He doth convert, And bring my mind in frame;\nAnd all this not for my desert, But for His holy Name."
    ]
  },
  {
    id: 368,
    number: 368,
    title: "The Heavens Declare Thy Glory, Lord",
    category: "Worship",
    author: "Isaac Watts",
    tune: "CHURCH TRIUMPHANT",
    verses: [
      "The heavens declare Thy glory, Lord, In every star Thy wisdom shines;\nBut when our eyes behold Thy Word, We read Thy Name in fairer lines.",
      "The rolling sun, the changing light, And nights and days Thy power confess;\nBut the blest volume Thou hast writ Reveals Thy justice and Thy grace.",
      "Sun, moon, and stars convey Thy praise Round the whole earth, and never stand;\nSo when Thy truth began its race, It touched and glanced on every land."
    ]
  },
  {
    id: 369,
    number: 369,
    title: "The Lord Is King! Lift Up Thy Voice",
    category: "Praise",
    author: "Josiah Conder",
    tune: "CHURCH TRIUMPHANT",
    verses: [
      "The Lord is King! lift up thy voice, O earth, and all ye heavens, rejoice!\nFrom world to world the joy shall ring, 'The Lord omnipotent is King!'",
      "The Lord is King! who then shall dare Resist His will at strife with prayer?\nHe sits on no precarious throne, Nor borrows leave to be His own.",
      "The Lord is King! Child of the dust, In Him be humble, and in Him be trust;\nHe sits on no precarious throne, Nor borrows leave to be His own."
    ]
  },
  {
    id: 370,
    number: 370,
    title: "The Lord Is Come! On Syrian Soil",
    category: "Praise",
    author: "A. P. Stanley",
    tune: "ST. STEPHEN",
    verses: [
      "The Lord is come! On Syrian soil, The child of poverty and toil;\nThe Son of God, the Son of Man, In whom the world's new life began.",
      "The Lord is come! In love's great might, To bring the world His holy light;\nTo seek and save the lost and lone, And make our every grief His own.",
      "The Lord is come! Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 371,
    number: 371,
    title: "The Lord My Pasture Shall Prepare",
    category: "Comfort",
    author: "Joseph Addison",
    tune: "SURREY",
    verses: [
      "The Lord my pasture shall prepare, And lead me with a shepherd's care;\nHis presence shall my wants supply, And guard me with a watchful eye.",
      "My noonday walks He shall attend, And all my midnight hours defend;\nWhen in the sultry glebe I faint, Or on the thirsty mountain pant.",
      "To fertile vales and dewy meads My weary, wandering steps He leads;\nWhere peaceful rivers, soft and slow, Amid the verdant landscape flow."
    ]
  },
  {
    id: 372,
    number: 372,
    title: "The Lord Will Come and Not Be Slow",
    category: "Worship",
    author: "John Milton",
    tune: "ST. STEPHEN",
    verses: [
      "The Lord will come and not be slow, His footsteps cannot err;\nBefore Him righteousness shall go, His royal harbinger.",
      "Truth from the earth, like to a flower, Shall bud and blossom then;\nAnd justice, from her heavenly bower, Look down on mortal men.",
      "Rise, God, judge Thou the earth in might, This wicked earth redress;\nFor Thou art He who shall by right The nations all possess."
    ]
  },
  {
    id: 373,
    number: 373,
    title: "The Maker of the Sun and Moon",
    category: "Praise",
    author: "Laurence Housman",
    tune: "ST. BARTHOLOMEW",
    verses: [
      "The Maker of the sun and moon, The Maker of our earth,\nLo! late in time, a fairer boon, Receives a human birth.",
      "He who the world's foundation laid, Is now a child of thought;\nBy Him the outcast and the poor Were in His mercy sought.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 374,
    number: 374,
    title: "The Morning Light Is Breaking",
    category: "Missionary",
    author: "Samuel F. Smith",
    tune: "WEBB",
    verses: [
      "The morning light is breaking, The darkness disappears;\nThe sons of earth are waking To penitential tears;\nEach breeze that sweeps the ocean Brings tidings from afar,\nOf nations in commotion, Prepared for Zion's war.",
      "See heathen nations bending Before the God we love,\nAnd thousand hearts ascending In gratitude above;\nWhile sinners, now confessing, The gospel call obey,\nAnd seek the Savior's blessing, A nation in a day.",
      "Blest river of salvation, Pursue thine onward way;\nFlow thou to every nation, Nor in thy richness stay;\nStay not till all the lowly Triumphant reach their home;\nStay not till all the holy Proclaim, 'The Lord is come!'"
    ]
  },
  {
    id: 375,
    number: 375,
    title: "The Roseate Hues of Early Dawn",
    category: "Morning",
    author: "Cecil Frances Alexander",
    tune: "ROSEATE HUES",
    verses: [
      "The roseate hues of early dawn, The brightness of the day,\nThe crimson of the sunset sky, How fast they fade away!",
      "Oh, for the pearly gates of heaven! Oh, for the golden floor!\nOh, for the Sun of Righteousness That setteth nevermore!",
      "The highest hopes we cherish here, How fast they tire and faint;\nHow many a spot of earthly soil Our purest visions taint!"
    ]
  },
  {
    id: 376,
    number: 376,
    title: "The Royal Banners Forward Go",
    category: "Passion",
    author: "Venantius Fortunatus",
    tune: "VEXILLA REGIS",
    verses: [
      "The royal banners forward go, The cross shines forth in mystic glow;\nWhere He in flesh, our flesh who made, Our sentence bore, our ransom paid.",
      "Where deep for us the spear was dyed, Life's torrent rushing from His side,\nTo wash us in that precious flood Where mingled water flowed, and blood.",
      "Fulfilled is all that David told In true prophetic song of old;\nAmidst the nations, God, saith he, Hath reigned and triumphed from the tree."
    ]
  },
  {
    id: 377,
    number: 377,
    title: "The Saints of God! Their Conflict Past",
    category: "Praise",
    author: "W. D. Maclagan",
    tune: "SAINTS OF GOD",
    verses: [
      "The saints of God! their conflict past, And life's long battle won at last,\nNo more they need the shield or sword, They cast them down before their Lord:\nO happy saints! for ever blest, At Jesus' feet how safe your rest!",
      "The saints of God! their wanderings done, No more their weary course they run,\nNo more they faint, no more they fall, No foes invade, no fears enthrall:\nO happy saints! for ever blest, In that dear home how safe your rest!",
      "The saints of God! life's voyage o'er, Safe landed on that blissful shore,\nNo stormy tempests now they dread, No roaring billows lift their head:\nO happy saints! for ever blest, In that calm port how safe your rest!"
    ]
  },
  {
    id: 378,
    number: 378,
    title: "The Shadows of the Evening Hours",
    category: "Evening",
    author: "Adelaide A. Procter",
    tune: "ST. LEONARD",
    verses: [
      "The shadows of the evening hours Fall from the darkening sky;\nUpon the fragrance of the flowers The dews of evening lie.",
      "Before Thy throne, O Lord of heaven, We kneel at close of day;\nLook on Thy children from on high, And hear us while we pray.",
      "The sorrows of Thy servants, Lord, Oh, do not Thou despise;\nBut let the incense of our prayers Before Thy mercy rise."
    ]
  },
  {
    id: 379,
    number: 379,
    title: "The Son of Consolation",
    category: "Worship",
    author: "Maud E. Coote",
    tune: "AURELIA",
    verses: [
      "The Son of Consolation! Of Levi's priestly line,\nFilled with the Holy Spirit And with a love divine.",
      "He gave his all to Jesus, His lands, his life, his heart;\nAnd in the Church's service He bore a noble part.",
      "Oh, grant us, Lord, Thy Spirit, That we may follow too;\nAnd in Thy love's reflection, Thy holy work may do."
    ]
  },
  {
    id: 380,
    number: 380,
    title: "The Son of God Goes Forth to War",
    category: "Worship",
    author: "Reginald Heber",
    tune: "OLD 81ST",
    verses: [
      "The Son of God goes forth to war, A kingly crown to gain;\nHis blood-red banner streams afar: Who follows in His train?",
      "Who best can drink his cup of woe, Triumphant over pain,\nWho patient bears his cross below, He follows in His train.",
      "The martyr first, whose eagle eye Could pierce beyond the grave,\nWho saw his Master in the sky, And called on Him to save."
    ]
  },
  {
    id: 381,
    number: 381,
    title: "The Spirit Breathes upon the Word",
    category: "Worship",
    author: "William Cowper",
    tune: "LONDON NEW",
    verses: [
      "The Spirit breathes upon the Word, And brings the truth to sight;\nPrecepts and promises afford A sanctifying light.",
      "A glory gilds the sacred page, Majestic like the sun;\nIt gives a light to every age, It gives, but borrows none.",
      "The hand that gave it still supplies The gracious light and heat;\nHis truths upon the nations rise, They rise, but never set."
    ]
  },
  {
    id: 382,
    number: 382,
    title: "The Strain Upraise of Joy and Praise",
    category: "Praise",
    author: "Godescalcus",
    tune: "THE STRAIN UPRAISE",
    verses: [
      "The strain upraise of joy and praise, Alleluia!\nTo the glory of their King Shall the ransomed people sing, Alleluia!",
      "And the choirs that dwell on high Shall re-echo through the sky, Alleluia!\nThey through the fields of Paradise who roam, The blessed ones, repeat through that bright home, Alleluia!",
      "The planets glittering on their heavenly way, The shining constellations, join and say, Alleluia!"
    ]
  },
  {
    id: 383,
    number: 383,
    title: "The Sun Is Sinking Fast",
    category: "Evening",
    author: "Latin, 18th Century",
    tune: "ST. COLUMBA",
    verses: [
      "The sun is sinking fast, The daylight dies;\nLet love awake, and pay Her evening sacrifice.",
      "As Christ upon the cross His head inclined,\nAnd to His Father's hands His parting soul resigned.",
      "So now herself my soul Would wholly give\nInto His sacred charge, In whom all spirits live."
    ]
  },
  {
    id: 384,
    number: 384,
    title: "The Voice That Breathed o'er Eden",
    category: "Worship",
    author: "John Keble",
    tune: "ST. ALPHEGE",
    verses: [
      "The voice that breathed o'er Eden, That earliest wedding day,\nThe primal marriage blessing, It hath not passed away.",
      "Still in the pure espousal Of Christian man and maid,\nThe holy Three are with us, The threefold grace is said.",
      "Be present, awful Father, To give away this bride,\nAs Eve Thou gav'st to Adam Out of his own pierced side."
    ]
  },
  {
    id: 385,
    number: 385,
    title: "The World Is Very Evil",
    category: "Worship",
    author: "Bernard of Cluny",
    tune: "PEARSALL",
    verses: [
      "The world is very evil, The times are waxing late,\nBe sober and keep vigil, The Judge is at the gate;",
      "The Judge who comes in mercy, The Judge who comes with might,\nTo terminate the evil, To diadem the right.",
      "Arise, arise, good Christian, Let right to wrong succeed;\nLet penitential sorrow To heavenly gladness lead."
    ]
  },
  {
    id: 386,
    number: 386,
    title: "The Year Is Gone, Beyond Recall",
    category: "Evening",
    author: "Latin, 18th Century",
    tune: "TALLIS' ORDINAL",
    verses: [
      "The year is gone, beyond recall, With all its hopes and fears,\nWith all its bright and gladdening smiles, With all its adieu and tears.",
      "Thy thankful people praise Thee, Lord, For countless benefits;\nAnd for the love that never fails, And for the grace that fits.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 387,
    number: 387,
    title: "Thee We Adore, O Hidden Saviour, Thee",
    category: "Communion",
    author: "Thomas Aquinas",
    tune: "ADORO TE DEVOTE",
    verses: [
      "Thee we adore, O hidden Saviour, Thee, Who in Thy feast with us vouchsaf'st to be;\nBoth flesh and spirit at Thy presence fail, Yet here Thy presence we devoutly hail.",
      "O blest Memorial of our dying Lord, Who living Bread to men doth here afford!\nOh, may our souls for ever feed on Thee, And Thou, O Christ, our life for ever be.",
      "Fountain of goodness, Jesus, Lord and God, Cleanse us, unclean, with Thy most cleansing blood;\nIncrease our faith and love, that we may see The glory of Thy face eternally."
    ]
  },
  {
    id: 388,
    number: 388,
    title: "There Is a Blessed Home",
    category: "Comfort",
    author: "H. W. Baker",
    tune: "ANNUE CHRISTE",
    verses: [
      "There is a blessed home Beyond this land of woe,\nWhere trials never come, Nor tears of sorrow flow;",
      "Where faith is lost in sight, And patient hope is crowned,\nAnd everlasting light Its glory throws around.",
      "There is a land of peace, Good angels know it well;\nGlad songs that never cease Within its portals swell."
    ]
  },
  {
    id: 389,
    number: 389,
    title: "There Is a Book, Who Runs May Read",
    category: "Worship",
    author: "John Keble",
    tune: "ST. FLAVIAN",
    verses: [
      "There is a book, who runs may read, Which heavenly truth imparts,\nAnd all the lore its scholars need, Pure eyes and Christian hearts.",
      "The works of God, above, below, Within us and around,\nAre pages in that book to show How God Himself is found.",
      "The glorious sky, embracing all, Is like the Maker's love;\nWherewith encompassed, great and small In peace and order move."
    ]
  },
  {
    id: 390,
    number: 390,
    title: "There Is a Happy Land, Far, Far Away",
    category: "Children",
    author: "Andrew Young",
    tune: "HAPPY LAND",
    verses: [
      "There is a happy land, far, far away, Where saints in glory stand, bright, bright as day;\nOh, how they sweetly sing, worthy is our Savior King,\nLoud let His praises ring, praise, praise for aye.",
      "Come to this happy land, come, come away; Why will ye doubting stand, why still delay?\nOh, we shall happy be, when, from sin and sorrow free,\nLord, we shall live with Thee, blest, blest for aye.",
      "Bright, in that happy land, beams every eye; Kept by a Father's hand, love cannot die;\nOh, then to glory run; be a crown and kingdom won;\nAnd, bright, above the sun, we reign for aye."
    ]
  },
  {
    id: 391,
    number: 391,
    title: "There Is a Land of Pure Delight",
    category: "Comfort",
    author: "Isaac Watts",
    tune: "BEULAH",
    verses: [
      "There is a land of pure delight, Where saints immortal reign;\nInfinite day excludes the night, And pleasures banish pain.",
      "There everlasting spring abides, And never-withering flowers;\nDeath, like a narrow sea, divides This heavenly land from ours.",
      "Sweet fields beyond the swelling flood Stand dressed in living green;\nSo to the Jews old Canaan stood, While Jordan rolled between."
    ]
  },
  {
    id: 392,
    number: 392,
    title: "There's a Friend for Little Children",
    category: "Children",
    author: "Albert Midlane",
    tune: "IN MEMORIAM",
    verses: [
      "There's a Friend for little children Above the bright blue sky,\nA Friend who never changes, Whose love will never die;",
      "Unlike our friends by nature, Who change with changing years,\nThis Friend is always worthy The confidence He bears.",
      "There's a rest for little children Above the bright blue sky,\nWho love the blessed Savior, And to the Father cry."
    ]
  },
  {
    id: 393,
    number: 393,
    title: "They Come, God's Messengers of Love",
    category: "Worship",
    author: "Robert Campbell",
    tune: "ST. GREGORY",
    verses: [
      "They come, God's messengers of love, They come from realms of peace above,\nFrom homes of never-fading light, From blissful mansions ever bright.",
      "They come to watch around us here, To soothe our sorrow, calm our fear;\nBut chiefly at our journey's end, They come our spirits to befriend.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 394,
    number: 394,
    title: "Thine Arm, O Lord, in Days of Old",
    category: "Worship",
    author: "E. H. Plumptre",
    tune: "ST. MATTHEW",
    verses: [
      "Thine arm, O Lord, in days of old Was strong to heal and save;\nIt triumphed o'er the disease and cold, And snatched from out the grave.",
      "To Thee they went, the blind, the dumb, The palsied and the lame,\nThe leper with his tainted life, The sick with fevered frame.",
      "And lo! Thy touch brought life and health, Gave speech and strength and sight;\nAnd youth renewed and frenzy calmed Owned Thee, the Lord of light."
    ]
  },
  {
    id: 395,
    number: 395,
    title: "This Is the Day of Light",
    category: "Morning",
    author: "John Ellerton",
    tune: "DOMENICA",
    verses: [
      "This is the day of light: Let there be light today;\nO Dayspring, rise upon our night, And chase its gloom away.",
      "This is the day of rest: Our failing strength renew;\nOn weary brain and troubled breast Shed Thou Thy freshening dew.",
      "This is the day of peace: Thy peace our spirits fill;\nBid Thou the blasts of discord cease, The waves of strife be still."
    ]
  },
  {
    id: 396,
    number: 396,
    title: "Thou Art Coming, O My Saviour",
    category: "Worship",
    author: "Frances R. Havergal",
    tune: "BEVERLEY",
    verses: [
      "Thou art coming, O my Saviour, Thou art coming, O my King,\nIn Thy beauty all-resplendent, In Thy glory all-transcendent;\nWell may we Thy praises sing!",
      "Thou art coming, Thou art coming! We shall meet Thee on Thy way,\nWe shall see Thee, we shall know Thee, We shall bless Thee, we shall show Thee\nAll our hearts can never say.",
      "Thou art coming! we are waiting With a hope that cannot fail,\nAsking not the day or hour, Resting on Thy Word of power,\nAnchored safe within the veil."
    ]
  },
  {
    id: 397,
    number: 397,
    title: "Thou Art Gone Up on High",
    category: "Praise",
    author: "Emma Toke",
    tune: "OLD 120TH",
    verses: [
      "Thou art gone up on high To mansions in the skies;\nAnd round Thy throne unceasingly The songs of praise arise.",
      "But we are lingering here, With sin and care oppressed;\nLord, send Thy promised Comforter, And lead us to Thy rest.",
      "Thou art gone up on high; But Thou didst first come down,\nThrough earth's most bitter misery To pass unto Thy crown."
    ]
  },
  {
    id: 398,
    number: 398,
    title: "Thou Didst Leave Thy Throne and Thy Kingly Crown",
    category: "Christmas",
    author: "Emily E. S. Elliott",
    tune: "MARGARET",
    verses: [
      "Thou didst leave Thy throne and Thy kingly crown When Thou camest to earth for me;\nBut in Bethlehem's home was there found no room For Thy holy nativity.",
      "Oh, come to my heart, Lord Jesus! There is room in my heart for Thee.",
      "Heaven's arches rang when the angels sang, Proclaiming Thy royal degree;\nBut in lowly birth didst Thou come to earth, And in great humility.",
      "The foxes found rest, and the birds their nest In the shade of the forest tree;\nBut Thy couch was the sod, O Thou Son of God, In the deserts of Galilee."
    ]
  },
  {
    id: 399,
    number: 399,
    title: "Thou Hidden Love of God, Whose Height",
    category: "Worship",
    author: "Gerhard Tersteegen",
    tune: "ST. MATTHIAS",
    verses: [
      "Thou hidden love of God, whose height, Whose depth unfathomed, no man knows;\nI see from far Thy beauteous light, Inly I sigh for Thy repose;\nMy heart is pained, nor can it be At rest, till it finds rest in Thee.",
      "Is there a thing beneath the sun That strives with Thee my heart to share?\nAh, tear it thence, and reign alone, The Lord of every motion there!\nThen shall my heart from earth be free, When it hath found repose in Thee.",
      "Oh, hide this self from me, that I No more, but Christ in me, may live;\nMy vile affections crucify, Nor let one darling lust survive!\nIn all things nothing may I see, Nothing desire or seek, but Thee."
    ]
  },
  {
    id: 400,
    number: 400,
    title: "Thou Judge of Quick and Dead",
    category: "Worship",
    author: "Charles Wesley",
    tune: "SOUTHWELL",
    verses: [
      "Thou Judge of quick and dead, Before whose bar severe,\nWith holy joy or guilty dread, We all must soon appear.",
      "Our cautioned souls prepare For that tremendous day;\nAnd fill us now with watchful care, And stir us up to pray.",
      "To pray, and wait the hour, That awful hour unknown,\nWhen, robed in majesty and power, Thou shalt from heaven come down."
    ]
  },
  {
    id: 401,
    number: 401,
    title: "Thou to Whom the Sick and Dying",
    category: "Worship",
    author: "Godfrey Thring",
    tune: "WALTHAM",
    verses: [
      "Thou to whom the sick and dying Ever came, nor came in vain,\nStill with healing words replying To the weary cry of pain.",
      "Hear us, Jesus, as we harken To the world's dark cry of woe;\nAnd when evening shadows darken, Let Thy light within us glow.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 402,
    number: 402,
    title: "Thou, Whose Almighty Word",
    category: "Missionary",
    author: "John Marriott",
    tune: "MOSCOW",
    verses: [
      "Thou, whose almighty word Chaos and darkness heard,\nAnd took their flight; Hear us, we humbly pray,\nAnd where the gospel day Sheds not its glorious ray,\nLet there be light!",
      "Thou, who didst come to bring On Thy redeeming wing\nHealing and sight, Health to the sick in mind,\nSight to the inly blind, Oh, now to all mankind\nLet there be light!",
      "Spirit of truth and love, Life-giving, holy Dove,\nSpeed forth Thy flight; Move on the waters' face,\nBearing the lamp of grace, And in earth's darkest place\nLet there be light!"
    ]
  },
  {
    id: 403,
    number: 403,
    title: "Three in One, and One in Three",
    category: "Worship",
    author: "G. Rorison",
    tune: "CAPETOWN",
    verses: [
      "Three in One, and One in Three, Ruler of the earth and sea,\nHear us, while we lift to Thee Holy chant and psalm.",
      "Light of lights! with morning shine, Lift on us Thy light divine;\nAnd let charity benign Breathe on us her balm.",
      "Light of lights! when falls the even, Let it close on sin forgiven;\nFold us in the peace of heaven, Shed a holy calm."
    ]
  },
  {
    id: 404,
    number: 404,
    title: "Through the Day Thy Love Has Spared Us",
    category: "Evening",
    author: "Thomas Kelly",
    tune: "DRESDEN",
    verses: [
      "Through the day Thy love has spared us, Now we lay us down to rest;\nThrough the silent watches guard us, Let no foe our peace molest;\nJesus, Thou our Guardian be; Sweet it is to trust in Thee.",
      "Pilgrims here on earth, and strangers, Dwelling in the midst of foes;\nUs and ours preserve from dangers, In Thine arms may we repose;\nAnd, when life's short day is past, Rest with Thee in heaven at last."
    ]
  },
  {
    id: 405,
    number: 405,
    title: "Through the Night of Doubt and Sorrow",
    category: "Worship",
    author: "B. S. Ingemann",
    tune: "MARCHING",
    verses: [
      "Through the night of doubt and sorrow Onward goes the pilgrim band,\nSinging songs of expectation, Marching to the promised land.",
      "Clear before us through the darkness Gleams and burns the guiding light;\nBrother clasps the hand of brother, Stepping fearless through the night.",
      "One the light of God's own presence O'er His ransomed people shed,\nChasing far the gloom and terror, Brightening all the path we tread."
    ]
  },
  {
    id: 406,
    number: 406,
    title: "Thy Kingdom Come! On Bended Knee",
    category: "Worship",
    author: "Frederick L. Hosmer",
    tune: "IRISH",
    verses: [
      "Thy kingdom come! on bended knee The passing ages pray;\nAnd faithful souls have yearned to see On earth that kingdom's day.",
      "But the slow watches of the night Not less to God belong;\nAnd for the coming of the light Wait's His eternal song.",
      "And lo! already on the hills The flags of dawn appear;\nGird up your loins, ye prophet souls, For lo! the Lord is near."
    ]
  },
  {
    id: 407,
    number: 407,
    title: "Thy Life Was Given for Me",
    category: "Passion",
    author: "Frances R. Havergal",
    tune: "THY LIFE WAS GIVEN",
    verses: [
      "Thy life was given for me, Thy blood, O Lord, was shed,\nThat I might ransomed be, And quickened from the dead;\nThy life was given for me: What have I given for Thee?",
      "Long years were spent for me In weariness and woe,\nThat through eternity Thy glory I might know;\nLong years were spent for me: Have I spent one for Thee?",
      "And Thou hast brought to me Down from Thy home above\nSalvation full and free, Thy pardon and Thy love;\nGreat gifts Thou broughtest me: What have I brought to Thee?"
    ]
  },
  {
    id: 408,
    number: 408,
    title: "Thy Way, Not Mine, O Lord",
    category: "Comfort",
    author: "Horatius Bonar",
    tune: "IBROX",
    verses: [
      "Thy way, not mine, O Lord, However dark it be;\nLead me by Thine own hand, Choose out the path for me.",
      "Smooth let it be or rough, It will be still the best;\nWinding or straight, it leads Right onward to Thy rest.",
      "I dare not choose my lot; I would not, if I might;\nChoose Thou for me, my God, So shall I walk aright."
    ]
  },
  {
    id: 409,
    number: 409,
    title: "To Thee, O Comforter Divine",
    category: "Worship",
    author: "Frances R. Havergal",
    tune: "ST. SILAS",
    verses: [
      "To Thee, O Comforter divine, For all Thy grace and power benign,\nSing we Alleluia!",
      "To Thee, whose faithful love had place In God's great plan of saving grace,\nSing we Alleluia!",
      "To Thee, whose unction from above Is life and light and fire and love,\nSing we Alleluia!"
    ]
  },
  {
    id: 410,
    number: 410,
    title: "To Thee, Our God, We Fly",
    category: "Worship",
    author: "W. Walsham How",
    tune: "BEVAN",
    verses: [
      "To Thee, our God, we fly For mercy and for grace;\nOh, hear our lowly cry, And hide not Thou Thy face.",
      "O Lord, stretch forth Thy mighty hand, And guard and bless our fatherland.",
      "Thy best gifts from on high In rich abundance pour,\nThat we may live to Thee, And serve Thee evermore."
    ]
  },
  {
    id: 411,
    number: 411,
    title: "Up to the Hills I Lift Mine Eyes",
    category: "Comfort",
    author: "Isaac Watts",
    tune: "WARRINGTON",
    verses: [
      "Up to the hills I lift mine eyes, Th' eternal hills beyond the skies;\nThence all my help and strength derive, From Him who keeps my soul alive.",
      "He guides my feet, He guards my way, His morning smiles bless all the day;\nHe spreads the evening veil, and keeps The silent hours while Israel sleeps.",
      "Israel, a name divinely blest, May rise secure, securely rest;\nThy holy Guardian's wakeful eyes Admit no slumber nor surprise."
    ]
  },
  {
    id: 412,
    number: 412,
    title: "Wake, Awake, for Night Is Flying",
    category: "Worship",
    author: "Philipp Nicolai",
    tune: "WACHET AUF",
    verses: [
      "Wake, awake, for night is flying; The watchmen on the heights are crying:\nAwake, Jerusalem, at last!",
      "Midnight hears the welcome voices, And at the thrilling cry rejoices:\nCome forth, ye virgins, night is past!",
      "The Bridegroom comes, awake; Your lamps with gladness take;\nAlleluia! And for His marriage-feast prepare, For ye must go to meet Him there."
    ]
  },
  {
    id: 413,
    number: 413,
    title: "We Give Thee But Thine Own",
    category: "Worship",
    author: "W. Walsham How",
    tune: "ST. ANDREW",
    verses: [
      "We give Thee but Thine own, Whate'er the gift may be;\nAll that we have is Thine alone, A trust, O Lord, from Thee.",
      "May we Thy bounties share, And use them for Thy praise;\nThat we may walk in Thy dear care, And serve Thee all our days.",
      "To comfort and to bless, To find a balm for woe,\nTo tend the lone and fatherless Is angels' work below."
    ]
  },
  {
    id: 414,
    number: 414,
    title: "We Pray Thee, Heavenly Father",
    category: "Worship",
    author: "V. S. S. Coles",
    tune: "MEINAU",
    verses: [
      "We pray Thee, heavenly Father, To hear us in Thy love;\nAnd shower Thy blessings on us From out Thy home above.",
      "Oh, grant us Thy protection, And lead us in Thy way;\nThat in Thy love's reflection We walk from day to day.",
      "To Thee, O Father, Son, and Spirit, Be praise and glory given;\nBy all who Thy dear love inherit, In earth and high in heaven."
    ]
  },
  {
    id: 415,
    number: 415,
    title: "We Saw Thee Not When Thou Didst Come",
    category: "Praise",
    author: "J. H. Gurney",
    tune: "ST. MATTHIAS",
    verses: [
      "We saw Thee not when Thou didst come To this poor world of sin and death;\nNor e'er beheld Thy cottage home In that despised Nazareth.",
      "But we believe Thy footsteps trod Its streets and plains in love's great might;\nAnd that Thou art the Son of God, The world's true Day, the world's true Light.",
      "We did not see Thee lifted high Amid that wild and savage crew;\nNor heard Thy meek, imploring cry, 'Forgive, they know not what they do!'"
    ]
  },
  {
    id: 416,
    number: 416,
    title: "We Sing the Glorious Conquest",
    category: "Worship",
    author: "John Ellerton",
    tune: "ELLACOMBE",
    verses: [
      "We sing the glorious conquest Before Damascus' gate,\nWhen Saul, the Church's foeman, Was bowed in royal state.",
      "The light of God's own presence O'er His ransomed people shed,\nChasing far the gloom and terror, Brightening all the path we tread.",
      "Oh, grant us, Lord, Thy Spirit, That we may follow too;\nAnd in Thy love's reflection, Thy holy work may do."
    ]
  },
  {
    id: 417,
    number: 417,
    title: "Weary of Earth and Laden with My Sin",
    category: "Passion",
    author: "S. J. Stone",
    tune: "DORKING",
    verses: [
      "Weary of earth and laden with my sin, I look at heaven and long to enter in;\nBut there no evil thing may find a home, And yet I hear a voice that bids me 'Come.'",
      "It is the voice of Jesus that I hear, His are the arms stretched out to draw me near;\nAnd His the blood that can for sin atone, And fix my hopes on Him, and Him alone.",
      "O Jesus, Light of all below, Thou Fount of life and fire,\nSurpassing all the joys we know, And all we can desire."
    ]
  },
  {
    id: 418,
    number: 418,
    title: "Welcome, Happy Morning! Age to Age Shall Say",
    category: "Praise",
    author: "Venantius Fortunatus",
    tune: "FORTUNATUS",
    verses: [
      "'Welcome, happy morning!' age to age shall say;\nHell today is vanquished, heaven is won today!",
      "Lo! the Dead is living, God for evermore!\nHim, their true Creator, all His works adore!",
      "Earth with joy confesses, clothing her for spring,\nAll good gifts returned with her returning King."
    ]
  },
  {
    id: 419,
    number: 419,
    title: "What Star Is This, with Beams So Bright",
    category: "Christmas",
    author: "Charles Coffin",
    tune: "PUER NOBIS",
    verses: [
      "What star is this, with beams so bright, More beauteous than the noonday light?\nIt shines to herald forth the King, And Gentiles to His cradle bring.",
      "True spake the prophet from afar, From Jacob shall arise a star;\nAnd lo! the eastern sages stand, To read in heaven the Lord's command.",
      "While outward signs the star displays, An inward light the Lord conveys;\nAnd urges them, with force benign, To seek the Giver of the sign."
    ]
  },
  {
    id: 420,
    number: 420,
    title: "What Various Hindrances We Meet",
    category: "Worship",
    author: "William Cowper",
    tune: "BRESLAU",
    verses: [
      "What various hindrances we meet In coming to a mercy-seat!\nYet who that knows the worth of prayer, But wishes to be often there?",
      "Prayer makes the darkened cloud withdraw, Prayer climbs the ladder Jacob saw,\nGives exercise to faith and love, Brings every blessing from above.",
      "Restraining prayer, we cease to fight; Prayer makes the Christian's armor bright;\nAnd Satan trembles when he sees The weakest saint upon his knees."
    ]
  },
  {
    id: 421,
    number: 421,
    title: "When Came in Flesh the Incarnate Word",
    category: "Worship",
    author: "Joseph Anstice",
    tune: "ST. FLAVIAN",
    verses: [
      "When came in flesh the incarnate Word, The sun was darkened in the sky;\nAnd all creation owned its Lord, In that His hour of misery.",
      "But now He reigns in realms of light, The King of kings and Lord of lords;\nAnd round His throne, in glory bright, The angel host His praise records.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 422,
    number: 422,
    title: "When Our Heads Are Bowed with Woe",
    category: "Comfort",
    author: "H. H. Milman",
    tune: "REDHEAD NO. 47",
    verses: [
      "When our heads are bowed with woe, When our bitter tears o'erflow,\nWhen we mourn the lost, the dear, Gracious Son of Mary, hear.",
      "Thou hast shed the human tear; Thou hast bowed with mortal fear;\nThou hast felt the bitterest woe; Gracious Son of Mary, hear.",
      "When the heart is sad within With the thought of all its sin,\nWhen the spirit shrinks with fear, Gracious Son of Mary, hear."
    ]
  },
  {
    id: 423,
    number: 423,
    title: "When Shades of Night Around Us Close",
    category: "Evening",
    author: "Charles Coffin",
    tune: "ST. FLAVIAN",
    verses: [
      "When shades of night around us close, And weary limbs in sleep repose,\nThe heart that loves Thee, Lord, shall be From every care and sorrow free.",
      "Thy presence, Lord, our spirits fill, And keep us from the power of ill;\nThat in Thy love's reflection we May walk from day to day with Thee.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 424,
    number: 424,
    title: "When Wounded Sore the Stricken Soul",
    category: "Comfort",
    author: "C. F. Alexander",
    tune: "ST. BERNARD",
    verses: [
      "When wounded sore the stricken soul Lies bleeding and unbound,\nOne only hand, a pierced hand, Can salve the sinner's wound.",
      "When penitence has wept in vain Over some foul dark spot,\nOne only stream, a purple stream, Can wash away the blot.",
      "'Tis Jesus' blood that washes white, His hand that brings relief,\nHis heart that's touched with all our joys, And feeleth for our grief."
    ]
  },
  {
    id: 425,
    number: 425,
    title: "Where High the Heavenly Temple Stands",
    category: "Worship",
    author: "Michael Bruce",
    tune: "WAREHAM",
    verses: [
      "Where high the heavenly temple stands, The house of God not made with hands,\nA great High Priest our nature wears, The Guardian of mankind appears.",
      "He who for men their Surety stood, And poured on earth His precious blood,\nPursues in heaven His mighty plan, The Saviour and the Friend of man.",
      "Though now ascended up on high, He bends on earth a brother's eye;\nPartaker of the human name, He knows the frailty of our frame."
    ]
  },
  {
    id: 426,
    number: 426,
    title: "Who Are These Like Stars Appearing",
    category: "Worship",
    author: "H. T. Schenk",
    tune: "ALL SAINTS",
    verses: [
      "Who are these like stars appearing, Standing before God's throne,\nEach a golden crown is wearing; Who are all this glorious band?",
      "Alleluia! hark, they sing, Praising their eternal King.",
      "Who are these in dazzling brightness, Clothed in God's own righteousness,\nThese whose robes of purest whiteness Shall their luster still possess?",
      "These are they who have contended For their Saviour's honor here;\nSaints who have with joy ascended To their home in glory there."
    ]
  },
  {
    id: 427,
    number: 427,
    title: "Who Is This So Weak and Helpless",
    category: "Passion",
    author: "W. Walsham How",
    tune: "EBENEZER",
    verses: [
      "Who is this so weak and helpless, Child of lowly Hebrew maid,\nRudely wrapped in swaddling clothes, In a wretched manger laid?",
      "Tis the Lord of all creation, Who this wondrous maze hath trod;\nHe is God from everlasting, And to everlasting God.",
      "Who is this, a Man of Sorrows, Walking sadly life's hard way,\nHomeless, weary, sighing, weeping Over sin and Satan's sway?"
    ]
  },
  {
    id: 428,
    number: 428,
    title: "With Broken Heart and Contrite Sigh",
    category: "Passion",
    author: "Cornelius Elven",
    tune: "BABYLON'S STREAMS",
    verses: [
      "With broken heart and contrite sigh, A trembling sinner, Lord, I cry;\nThy pardoning grace is rich and free: O God, be merciful to me!",
      "I smite upon my troubled breast, With deep and conscious guilt oppressed;\nChrist and His cross my only plea: O God, be merciful to me!",
      "Far off I stand with hopeless eyes, Nor dare lift them to the skies;\nBut Thou dost all my anguish see: O God, be merciful to me!"
    ]
  },
  {
    id: 429,
    number: 429,
    title: "With Golden Splendour Bright",
    category: "Worship",
    author: "Latin, 18th Century",
    tune: "AETERNA CHRISTI MUNERA",
    verses: [
      "With golden splendour bright, The morning star is seen;\nAnd through the fields of light, The sun is shining keen.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 430,
    number: 430,
    title: "With Joy We Meditate the Grace",
    category: "Comfort",
    author: "Isaac Watts",
    tune: "ST. STEPHEN",
    verses: [
      "With joy we meditate the grace Of our High Priest above;\nHis heart is made of tenderness, His bowels melt with love.",
      "Touched with a sympathy within, He knows our feeble frame;\nHe knows what sore temptations mean, For He has felt the same.",
      "But spotless, innocent, and pure, The great Redeemer stood,\nWhile Satan's fiery darts He bore, And did resist to blood."
    ]
  },
  {
    id: 431,
    number: 431,
    title: "Word of God, Across the Ages",
    category: "Worship",
    author: "Ferdinand Q. Blanchard",
    tune: "AUSTRIAN HYMN",
    verses: [
      "Word of God, across the ages Comes the message to our day,\nFrom the prophets and the sages, Pointing out the living way.",
      "Still it speaks to every nation, Still it tells of love and grace;\nBringing hope and great salvation To the whole of human race.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 432,
    number: 432,
    title: "Ye Holy Angels Bright",
    category: "Worship",
    author: "Richard Baxter",
    tune: "DARWALL'S 148TH",
    verses: [
      "Ye holy angels bright, Who wait at God's right hand,\nOr through the realms of light Fly at your Lord's command,\nAssist our song, Or else the theme Too high doth seem For mortal tongue.",
      "Ye blessed souls at rest, Who ran this earthly race,\nAnd now, from sin released, Behold the Saviour's face,\nGod's praises sound, As in His sight With sweet delight Ye do abound.",
      "Ye saints, who toil below, Adore your heavenly King,\nAnd onward as ye go Some joyful anthem sing;\nTake what He gives And praise Him still, Through good and ill, Who ever lives."
    ]
  },
  {
    id: 433,
    number: 433,
    title: "Yesterday, with Worship Blest",
    category: "Morning",
    author: "John Keble",
    tune: "ST. FLAVIAN",
    verses: [
      "Yesterday, with worship blest, We laid our cares to rest;\nAnd in Thy love's reflection, We found our soul's protection.",
      "Now the morning light is breaking, And our hearts to Thee are waking;\nOh, grant us Thy direction, And lead us to perfection.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 434,
    number: 434,
    title: "Your Harps, Ye Trembling Saints",
    category: "Comfort",
    author: "A. M. Toplady",
    tune: "ST. ETHELWALD",
    verses: [
      "Your harps, ye trembling saints, Down from the willows take;\nLoud to the praise of love divine Bid every string awake.",
      "Though in a foreign land, We are not far from home;\nAnd nearer to our house above We every moment come.",
      "His grace will to the end Stronger and brighter shine;\nNor present things, nor things to come, Shall quench the spark divine."
    ]
  },
  {
    id: 435,
    number: 435,
    title: "Zion's King Shall Reign Victorious",
    category: "Missionary",
    author: "Thomas Kelly",
    tune: "REJOICE",
    verses: [
      "Zion's King shall reign victorious; All the earth shall own His sway;\nHe will make His kingdom glorious; He will reign through endless day.",
      "Nations, now from God estranged, Then shall see a glorious light;\nAnd their night to day be changed, By His love's all-conquering might.",
      "Mighty King, Thine arm revealing, Now Thy glorious cause maintain;\nBring the nations help and healing, Make them subject to Thy reign."
    ]
  },
  {
    id: 436,
    number: 436,
    title: "Across the Sky the Shades of Night",
    category: "Evening",
    author: "James Hamilton",
    tune: "ST. COLUMBA",
    verses: [
      "Across the sky the shades of night This winter's eve are fleeting;\nWe come to Thee, the Light of light, Thy grace and love entreating.",
      "The year is gone, beyond recall, With all its hopes and fears;\nWith all its bright and gladdening smiles, With all its adieu and tears.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 438,
    number: 438,
    title: "Alleluia, Song of Gladness",
    category: "Worship",
    author: "Latin, 11th Century",
    tune: "DULCE CARMEN",
    verses: [
      "Alleluia, song of gladness, Voice of joy that cannot die;\nAlleluia is the anthem Ever dear to choirs on high.",
      "Alleluia, which the blessed Shall for ever sing on high;\nAlleluia, joyful mother Of the bright celestial sky.",
      "But by Babylon's sad waters Mourning exiles now are we;\nAlleluia cannot always Be our song of jubilee."
    ]
  },
  {
    id: 439,
    number: 439,
    title: "Almighty Father, Unoriginate",
    category: "Worship",
    author: "E. E. Dugmore",
    tune: "ST. MATTHIAS",
    verses: [
      "Almighty Father, unoriginate, From whom all things their life and being take;\nWe praise Thee, Lord, for all Thy works so great, And for the love that never will forsake.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 440,
    number: 440,
    title: "Angel-Voices, Ever Singing",
    category: "Worship",
    author: "Francis Pott",
    tune: "ANGEL VOICES",
    verses: [
      "Angel-voices, ever singing Round Thy throne of light,\nAngel-harps, for ever ringing, Rest not day nor night;\nThousands only live to bless Thee, And confess Thee Lord of might.",
      "Thou who art beyond the farthest Mortal eye can scan,\nCan it be that Thou regardest Songs of sinful man?\nCan we feel that Thou art near us, And wilt hear us? Yea, we can.",
      "Yea, we know Thy love rejoices O'er each wandering child;\nThou wilt hear our feeble voices, Through the tempest wild;\nThou wilt lead us, Thou wilt feed us, By Thy grace all-undefiled."
    ]
  },
  {
    id: 441,
    number: 441,
    title: "Angels, Roll the Rock Away",
    category: "Easter",
    author: "Thomas Scott",
    tune: "EASTER HYMN",
    verses: [
      "Angels, roll the rock away; Death, yield up thy mighty prey;\nSee! He rises from the tomb, Glowing with immortal bloom.",
      "Alleluia! Alleluia! Christ the Lord is risen today.",
      "Tis the Saviour! Angels, raise Your triumphant song of praise;\nLet the earth's remotest bound Hear the joy-inspiring sound.",
      "Heaven displays her portals wide, Glorious Victor, through them ride;\nKing of glory, mount Thy throne, Thy great Father's and Thine own."
    ]
  },
  {
    id: 442,
    number: 442,
    title: "Around the Throne of God a Band",
    category: "Worship",
    author: "John Mason Neale",
    tune: "SOLOTHURN",
    verses: [
      "Around the throne of God a band Of glorious angels ever stand;\nBright things they see, sweet harps they hold, And on their heads are crowns of gold.",
      "Some wait around Him, ready still To sing His praise and do His will;\nAnd some, when He commands them, go To guard His servants here below.",
      "Lord, give Thy angels every day Command to guide us on our way;\nAnd bid them every evening keep Their watch around us while we sleep."
    ]
  },
  {
    id: 443,
    number: 443,
    title: "Art Thou Weary, Art Thou Languid",
    category: "Comfort",
    author: "John Mason Neale",
    tune: "STEPHANOS",
    verses: [
      "Art thou weary, art thou languid, Art thou sore distressed?\n'Come to Me,' saith One, 'and coming, Be at rest.'",
      "Hath He marks to lead me to Him, If He be my Guide?\n'In His feet and hands are wound-prints, And His side.'",
      "Is there diadem, as Monarch, That His brow adorns?\n'Yea, a crown, in very surety, But of thorns.'"
    ]
  },
  {
    id: 444,
    number: 444,
    title: "As Now the Sun's Declining Rays",
    category: "Evening",
    author: "Charles Coffin",
    tune: "ST. PETER",
    verses: [
      "As now the sun's declining rays At eventide descend,\nSo life's brief day is sinking fast To its appointed end.",
      "Lord, on the cross Thine arms were stretched To draw us to the sky;\nOh, grant us then that cross to love, And in those arms to die.",
      "To God the Father, God the Son, And God the Holy Ghost,\nAll glory be from saints on earth, And from the angel-host."
    ]
  },
  {
    id: 445,
    number: 445,
    title: "As Pants the Hart for Cooling Streams",
    category: "Worship",
    author: "Tate and Brady",
    tune: "MARTYRDOM",
    verses: [
      "As pants the hart for cooling streams When heated in the chase,\nSo longs my soul, O God, for Thee, And Thy refreshing grace.",
      "For Thee, my God, the living God, My thirsty soul doth pine;\nOh, when shall I behold Thy face, Thou Majesty divine?",
      "Why restless, why cast down, my soul? Hope still, and thou shalt sing\nThe praise of Him who is thy God, Thy health's eternal Spring."
    ]
  },
  {
    id: 446,
    number: 446,
    title: "At the Lamb's High Feast We Sing",
    category: "Easter",
    author: "Robert Campbell",
    tune: "SALZBURG",
    verses: [
      "At the Lamb's high feast we sing Praise to our victorious King,\nWho hath washed us in the tide Flowing from His pierced side;\nPraise we Him, whose love divine Gives His sacred blood for wine,\nGives His body for the feast, Christ the Victim, Christ the Priest.",
      "Where the paschal blood is poured, Death's dark angel sheathes his sword;\nIsrael's hosts triumphant go Through the wave that drowns the foe.\nPraise we Christ, whose blood was shed, Paschal Victim, Paschal Bread;\nWith sincerity and love Eat we manna from above.",
      "Mighty Victim from the sky, Hell's fierce powers beneath Thee lie;\nThou hast conquered in the fight, Thou hast brought us life and light;\nNow no more can death appall, Now no more the grave enthrall;\nThou hast opened Paradise, And in Thee Thy saints shall rise."
    ]
  },
  {
    id: 447,
    number: 447,
    title: "Awake, My Soul, Stretch Every Nerve",
    category: "Worship",
    author: "Philip Doddridge",
    tune: "CHRISTMAS",
    verses: [
      "Awake, my soul, stretch every nerve, And press with vigor on;\nA heavenly race demands thy zeal, And an immortal crown.",
      "A cloud of witnesses around Hold thee in full survey;\nForget the steps already trod, And onward urge thy way.",
      "'Tis God's all-animating voice That calls thee from on high;\n'Tis His own hand presents the prize To thine aspiring eye."
    ]
  },
  {
    id: 448,
    number: 448,
    title: "Before Jehovah's Awful Throne",
    category: "Worship",
    author: "Isaac Watts",
    tune: "OLD 100TH",
    verses: [
      "Before Jehovah's awful throne, Ye nations, bow with sacred joy;\nKnow that the Lord is God alone; He can create, and He destroy.",
      "His sovereign power, without our aid, Made us of clay, and formed us men;\nAnd when like wandering sheep we strayed, He brought us to His fold again.",
      "We'll crowd Thy gates with thankful songs, High as the heavens our voices raise;\nAnd earth, with her ten thousand tongues, Shall fill Thy courts with sounding praise."
    ]
  },
  {
    id: 449,
    number: 449,
    title: "Behold the Glories of the Lamb",
    category: "Praise",
    author: "Isaac Watts",
    tune: "ST. STEPHEN",
    verses: [
      "Behold the glories of the Lamb Amidst His Father's throne;\nPrepare new honors for His Name, And songs before unknown.",
      "Let elders worship at His feet, The church adore around,\nWith vials full of odors sweet, And harps of sweeter sound.",
      "Those are the prayers of all the saints, And these the hymns they raise;\nJesus is kind to our complaints, He loves to hear our praise."
    ]
  },
  {
    id: 450,
    number: 450,
    title: "Behold the Saviour of Mankind",
    category: "Passion",
    author: "Samuel Wesley",
    tune: "BURFORD",
    verses: [
      "Behold the Saviour of mankind Nailed to the shameful tree!\nHow vast the love that Him inclined To bleed and die for thee!",
      "Hark, how He groans! while nature shakes, And earth's strong pillars bend;\nThe temple's veil in sunder breaks, The solid marbles rend.",
      "'Tis done! the precious ransom's paid; 'Receive My soul,' He cries;\nSee where He bows His sacred head! He bows His head, and dies."
    ]
  },
  {
    id: 451,
    number: 451,
    title: "Behold Us, Lord, a Little Space",
    category: "Worship",
    author: "John Ellerton",
    tune: "ST. FLAVIAN",
    verses: [
      "Behold us, Lord, a little space From daily tasks set free,\nAnd met within this holy place To rest awhile with Thee.",
      "Around us rolls the ceaseless tide Of business, toil, and care;\nAnd scarcely can we turn aside For one brief hour of prayer.",
      "Yet these are not the only walls Wherein Thou mayst be sought;\nOn homeliest work Thy blessing falls, In truth and patience wrought."
    ]
  },
  {
    id: 452,
    number: 452,
    title: "Blest Are the Pure in Heart",
    category: "Worship",
    author: "John Keble",
    tune: "FRANCONIA",
    verses: [
      "Blest are the pure in heart, For they shall see our God;\nThe secret of the Lord is theirs, Their soul is Christ's abode.",
      "The Lord, who left the heavens Our life and peace to bring,\nTo dwell in lowliness with men, Their Pattern and their King.",
      "Still to the lowly soul He doth Himself impart,\nAnd for His dwelling and His throne Chooseth the pure in heart."
    ]
  },
  {
    id: 453,
    number: 453,
    title: "Blest Be the Tie That Binds",
    category: "Worship",
    author: "John Fawcett",
    tune: "DENNIS",
    verses: [
      "Blest be the tie that binds Our hearts in Christian love;\nThe fellowship of kindred minds Is like to that above.",
      "Before our Father's throne We pour our ardent prayers;\nOur fears, our hopes, our aims are one, Our comforts and our cares.",
      "We share our mutual woes, Our mutual burdens bear;\nAnd often for each other flows The sympathizing tear."
    ]
  },
  {
    id: 454,
    number: 454,
    title: "Bread of Heaven, on Thee We Feed",
    category: "Communion",
    author: "Josiah Conder",
    tune: "BREAD OF HEAVEN",
    verses: [
      "Bread of heaven, on Thee we feed, For Thy flesh is meat indeed;\nEver may our souls be fed With this true and living Bread;\nDay by day with strength supplied Through the life of Him who died.",
      "Vine of heaven, Thy blood supplies This blest cup of sacrifice;\nLord, Thy wounds our healing give, To Thy cross we look and live;\nJesus, may we ever be Grafted, rooted, built in Thee."
    ]
  },
  {
    id: 455,
    number: 455,
    title: "Bread of the World, in Mercy Broken",
    category: "Communion",
    author: "Reginald Heber",
    tune: "RENDEZ À DIEU",
    verses: [
      "Bread of the world, in mercy broken, Wine of the soul, in mercy shed,\nBy whom the words of life were spoken, And in whose death our sins are dead.",
      "Look on the heart by sorrow broken, Look on the tears by sinners shed;\nAnd be Thy feast to us the token That by Thy grace our souls are fed."
    ]
  },
  {
    id: 456,
    number: 456,
    title: "Brief Life Is Here Our Portion",
    category: "Worship",
    author: "Bernard of Cluny",
    tune: "ST. ALPHEGE",
    verses: [
      "Brief life is here our portion, Brief sorrow, short-lived care;\nThe life that knows no ending, The tearless life, is there.",
      "O happy retribution! Short toil, eternal rest;\nFor mortals and for sinners A mansion with the blest!",
      "And now we fight the battle, But then shall wear the crown\nOf full and everlasting And passionless renown."
    ]
  },
  {
    id: 457,
    number: 457,
    title: "Christ, the Life of All the Living",
    category: "Passion",
    author: "Ernst C. Homburg",
    tune: "JESU, MEINES LEBENS LEBEN",
    verses: [
      "Christ, the life of all the living, Christ, the death of death, our foe,\nChrist, Yourself for us once giving To the darkest depths of woe.",
      "Through Your suff'ring, death, and merit Life eternal we inherit;\nThousand, thousand thanks shall be, Dearest Jesus, unto Thee.",
      "Thou, ah! Thou hast taken on Thee Bitter strokes, a cruel rod;\nPain and scorn were heaped upon Thee, O Thou sinless Son of God."
    ]
  },
  {
    id: 458,
    number: 458,
    title: "Christ the Lord Is Risen Again",
    category: "Easter",
    author: "Michael Weisse",
    tune: "WÜRTEMBERG",
    verses: [
      "Christ the Lord is risen again, Christ hath broken every chain;\nHark, angelic voices cry, Singing evermore on high, Alleluia!",
      "He who gave for us His life, Who endured the cruel strife,\nIs our Paschal Lamb today; We too sing for joy, and say, Alleluia!",
      "He who bore all pain and loss Comfortless upon the cross,\nLives in glory now on high, Pleads for us and hears our cry, Alleluia!"
    ]
  },
  {
    id: 459,
    number: 459,
    title: "Christian, Seek Not Yet Repose",
    category: "Worship",
    author: "Charlotte Elliott",
    tune: "VIGILATE",
    verses: [
      "Christian, seek not yet repose, Cast thy dreams of ease away;\nThou art in the midst of foes: Watch and pray.",
      "Principalities and powers, Mustering their unseen array,\nWait for thy unguarded hours: Watch and pray.",
      "Gird thy heavenly armor on, Wear it ever night and day;\nAmbushed lies the evil one: Watch and pray."
    ]
  },
  {
    id: 461,
    number: 461,
    title: "Come, Gracious Spirit, Heavenly Dove",
    category: "Worship",
    author: "Simon Browne",
    tune: "WAREHAM",
    verses: [
      "Come, gracious Spirit, heavenly Dove, With light and comfort from above;\nBe Thou our Guardian, Thou our Guide, O'er every thought and step preside.",
      "The light of truth to us display, And make us know and choose Thy way;\nPlant holy fear in every heart, That we from God may ne'er depart.",
      "Lead us to holiness, the road Which we must take to dwell with God;\nLead us to Christ, the living Way, Nor let us from His pastures stray."
    ]
  },
  {
    id: 462,
    number: 462,
    title: "Come, Pure Hearts, in Sweetest Measures",
    category: "Worship",
    author: "Adam of St. Victor",
    tune: "EVANGELISTS",
    verses: [
      "Come, pure hearts, in sweetest measures Sing of those who spread the treasures\nIn the holy Gospels shrined;\nBlessed tidings of salvation, Peace on earth their proclamation,\nLove from God to all mankind.",
      "See the rivers four that gladden With their streams the better Eden,\nPlanted by our Lord most dear;\nChrist the Fountain, these the waters; Drink, O Zion's sons and daughters,\nDrink and find salvation here.",
      "O that we, Thy truth confessing, And Thy holy Word possessing,\nJesus, may Thy love adore;\nUnto Thee our voices raising, Thee with all Thy angels praising,\nEver and for evermore."
    ]
  },
  {
    id: 463,
    number: 463,
    title: "Come, Labour On",
    category: "Worship",
    author: "Jane L. Borthwick",
    tune: "ORA LABORA",
    verses: [
      "Come, labour on. Who dares stand idle on the harvest plain,\nWhile all around him waves the golden grain?\nAnd to each servant does the Master say, 'Go work today.'",
      "Come, labour on. The enemy is watching night and day,\nTo sow the tares, to snatch the seed away;\nWhile we in sleep our duty have forgot, He slumbereth not.",
      "Come, labour on. Away with gloomy doubts and faithless fear!\nNo arm so weak but may do service here;\nBy feeblest agents may our God fulfill His righteous will."
    ]
  },
  {
    id: 464,
    number: 464,
    title: "Come, Thou Almighty King",
    category: "Worship",
    author: "Anonymous",
    tune: "ITALIAN HYMN",
    verses: [
      "Come, Thou almighty King, Help us Thy Name to sing, Help us to praise!\nFather all-glorious, O'er all victorious, Come and reign over us, Ancient of Days!",
      "Come, Thou incarnate Word, Gird on Thy mighty sword, Our prayer attend!\nCome, and Thy people bless, And give Thy Word success; Spirit of holiness, On us descend!",
      "Come, holy Comforter, Thy sacred witness bear In this glad hour!\nThou who almighty art, Now rule in every heart, And ne'er from us depart, Spirit of power!"
    ]
  },
  {
    id: 465,
    number: 465,
    title: "Come, Ye Disconsolate",
    category: "Comfort",
    author: "Thomas Moore",
    tune: "CONSOLATOR",
    verses: [
      "Come, ye disconsolate, where'er ye languish, Come to the mercy-seat, fervently kneel;\nHere bring your wounded hearts, here tell your anguish; Earth has no sorrow that heaven cannot heal.",
      "Joy of the desolate, light of the straying, Hope of the penitent, fadeless and pure!\nHere speaks the Comforter, tenderly saying, 'Earth has no sorrow that heaven cannot cure.'",
      "Here see the Bread of life; see waters flowing Forth from the throne of God, pure from above;\nCome to the feast of love; come, ever knowing Earth has no sorrow but heaven can remove."
    ]
  },
  {
    id: 466,
    number: 466,
    title: "Commit Thou All Thy Griefs",
    category: "Comfort",
    author: "Paul Gerhardt",
    tune: "ST. GEORGE",
    verses: [
      "Commit thou all thy griefs And ways into His hands,\nTo His sure truth and tender care, Who earth and heaven commands.",
      "Who points the clouds their course, Whom winds and seas obey,\nHe shall direct thy wandering feet, He shall prepare thy way.",
      "Thou on the Lord rely; So safe shalt thou go on;\nFix on His work thy steadfast eye, So shall thy work be done."
    ]
  },
  {
    id: 467,
    number: 467,
    title: "Creator of the Stars of Night",
    category: "Worship",
    author: "Latin, 9th Century",
    tune: "CONDITOR ALME SIDERUM",
    verses: [
      "Creator of the stars of night, Thy people's everlasting Light,\nJesus, Redeemer, save us all, And hear Thy servants when they call.",
      "Thou, grieving that the ancient curse Should doom to death a universe,\nHast found the medicine, full of grace, To save and heal a ruined race.",
      "Thou cam'st, the Bridegroom of the bride, As drew the world to evening-tide,\nProceeding from a virgin shrine, The spotless Victim all-divine."
    ]
  },
  {
    id: 468,
    number: 468,
    title: "Day by Day, and Night by Night",
    category: "Evening",
    author: "F. W. Faber",
    tune: "ST. FLAVIAN",
    verses: [
      "Day by day, and night by night, Never weary, never still,\nIn the darkness and the light, Do we seek Thy holy will.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 469,
    number: 469,
    title: "Day of Wrath! O Day of Mourning",
    category: "Worship",
    author: "Thomas of Celano",
    tune: "DIES IRAE",
    verses: [
      "Day of wrath! O day of mourning! See fulfilled the prophets' warning,\nHeaven and earth in ashes burning!",
      "Oh, what fear man's bosom rendeth, When from heaven the Judge descendeth,\nOn whose sentence all dependeth!",
      "Wondrous sound the trumpet flingeth; Through earth's sepulchers it ringeth;\nAll before the throne it bringeth."
    ]
  },
  {
    id: 470,
    number: 470,
    title: "Days and Moments Quickly Flying",
    category: "Worship",
    author: "Edward Caswall",
    tune: "ST. SYLVESTER",
    verses: [
      "Days and moments quickly flying Blend the living with the dead;\nSoon will you and I be lying Each within our narrow bed.",
      "Soon our souls to God who gave them Will have sped their rapid flight;\nAble now by grace to save them, Oh, that they may dwell in light!",
      "Jesus, infinite Redeemer, Maker of this mighty frame,\nTeach, oh, teach us to remember What we are, and whence we came."
    ]
  },
  {
    id: 471,
    number: 471,
    title: "Deck Thyself, My Soul, with Gladness",
    category: "Communion",
    author: "Johann Franck",
    tune: "SCHMÜCKE DICH",
    verses: [
      "Deck thyself, my soul, with gladness, Leave the gloomy haunts of sadness;\nCome into the daylight's splendour, There with joy thy praises render",
      "Unto Him whose grace unbounded Hath this wondrous banquet founded;\nHigh o'er all the heavens He reigneth, Yet to dwell with thee He deigneth.",
      "Now I sink before Thee lowly, Filled with joy most deep and holy,\nAs with trembling I consider How Yourself to me You offer."
    ]
  },
  {
    id: 472,
    number: 472,
    title: "Disposer Supreme, and Judge of the Earth",
    category: "Worship",
    author: "Jean-Baptiste de Santeul",
    tune: "OLD 104TH",
    verses: [
      "Disposer supreme, and Judge of the earth,\nWho choosest for Thine the weak and the poor;\nTo frail earthen vessels and things of no worth\nEntrusting Thy riches which aye shall endure.",
      "Those vessels soon fail, though full of Thy light,\nAnd at Thy decree are broken and gone;\nThence brightly out-flashing, in darkness and night,\nThy truth in its glory has everywhere shone.",
      "Like clouds are they borne to do Thy great will,\nAnd swift as the winds about the world go;\nAll parts of the earth with Thy knowledge they fill,\nAnd seeds of Thy glory unceasingly sow."
    ]
  },
  {
    id: 473,
    number: 473,
    title: "Father, Most Holy, Merciful and Tender",
    category: "Worship",
    author: "Latin, 10th Century",
    tune: "HERZLIEBSTER JESU",
    verses: [
      "Father, most holy, merciful and tender,\nJesus our Saviour, with the Father reigning,\nSpirit of comfort, Advocate, Defender,\nLight never waning.",
      "Trinity blessed, Unity unshaken,\nGoodness unbounded, Ocean of salvation,\nLight of the angels, Joy of the forsaken,\nHope of all creation.",
      "All things were made by Thee, and all things bless Thee,\nAll Thy creation, Lord, in Thee rejoices;\nWe too, Thy servants, as we now confess Thee,\nLift up our voices."
    ]
  },
  {
    id: 474,
    number: 474,
    title: "Father of Mercies, in Thy Word",
    category: "Worship",
    author: "Anne Steele",
    tune: "SOUTHWELL",
    verses: [
      "Father of mercies, in Thy Word What endless glory shines!\nFor ever be Thy Name adored For these celestial lines.",
      "Here may the wretched sons of want Exhaustless riches find;\nRiches above what earth can grant, And lasting as the mind.",
      "Here the Redeemer's welcome voice Spreads heavenly peace around;\nAnd life and everlasting joys Attend the blissful sound."
    ]
  },
  {
    id: 475,
    number: 475,
    title: "Eternal Ruler of the Ceaseless Round",
    category: "Worship",
    author: "John W. Chadwick",
    tune: "SONG 1",
    verses: [
      "Eternal Ruler of the ceaseless round Of circling planets singing on their way;\nGuide of the nations from the night profound Into the glory of the perfect day.",
      "Rule in our hearts, that we may ever be Guided and guarded and upheld by Thee;\nThat in Thy love's reflection we may find The peace that passeth every human mind.",
      "We are of Thee, the children of Thy love, The brothers of Thy well-beloved Son;\nDescend, O Holy Spirit, from above, That all Thy people may in Thee be one."
    ]
  },
  {
    id: 476,
    number: 476,
    title: "Fair Waved the Golden Corn",
    category: "Children",
    author: "J. H. Gurney",
    tune: "HOLYROOD",
    verses: [
      "Fair waved the golden corn In Canaan's pleasant land,\nWhen full of joy, some shining morn, Went forth the reaper-band.",
      "To God, so good and great, Their cheerful thanks they pour;\nThen carry to His temple-gate The choicest of their store.",
      "Like Israel, Lord, we give Our earliest fruits to Thee,\nAnd pray that, long as we shall live, We may Thy children be."
    ]
  },
  {
    id: 477,
    number: 477,
    title: "Father, Again in Jesus' Name We Meet",
    category: "Worship",
    author: "Lucy E. G. Whitmore",
    tune: "ST. CHRYSOSTOM",
    verses: [
      "Father, again in Jesus' Name we meet, And bow in penitence beneath Thy feet;\nAgain to Thee our feeble voices raise, To sue for mercy, and to sing Thy praise.",
      "Alas! unworthy of Thy boundless love, Too oft with careless feet from Thee we rove;\nBut now, encouraged by Thy voice, we come, Returning sinners to a Father's home.",
      "Oh, by His Name in whom all fullness dwells, Oh, by His love which every love excels,\nOh, by His blood so freely shed for sin, Now let us find Thy peace and rest within."
    ]
  },
  {
    id: 478,
    number: 478,
    title: "Father, Son, and Holy Ghost",
    category: "Worship",
    author: "Charles Wesley",
    tune: "ST. BEES",
    verses: [
      "Father, Son, and Holy Ghost, One in Three, and Three in One,\nAs by the celestial host, Let Thy will on earth be done.",
      "Praise by all to Thee be given, Glorious Lord of earth and heaven;\nEvery knee to Thee shall bow, Every tongue Thy Name avow.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 479,
    number: 479,
    title: "Father, Let Me Dedicate",
    category: "Worship",
    author: "L. Tuttiett",
    tune: "FATHER, LET ME DEDICATE",
    verses: [
      "Father, let me dedicate All this year to Thee,\nIn whatever worldly state Thou wilt have me be.",
      "Not from sorrow, pain, or care Freedom dare I claim;\nThis alone shall be my prayer, 'Glorify Thy Name.'",
      "Can a child presume to choose Where or how to live?\nCan a Father's love refuse All the best to give?"
    ]
  },
  {
    id: 480,
    number: 480,
    title: "Father of All, from Land and Sea",
    category: "Worship",
    author: "Christopher Wordsworth",
    tune: "ST. ALPHEGE",
    verses: [
      "Father of all, from land and sea The nations sing, 'Alleluia!'\nTo Thee, the Source of all that's good, In hymns of joyful gratitude.",
      "One Lord, one faith, one holy Name, One hope of heaven, one common aim;\nOne Spirit, who with love divine Doth in our hearts for ever shine.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 481,
    number: 481,
    title: "Father of Heaven, Whose Love Profound",
    category: "Worship",
    author: "Edward Cooper",
    tune: "RIVAULX",
    verses: [
      "Father of heaven, whose love profound A ransom for our souls hath found,\nBefore Thy throne we sinners bend; To us Thy pardoning love extend.",
      "Almighty Son, incarnate Word, Our Prophet, Priest, Redeemer, Lord,\nBefore Thy throne we sinners bend; To us Thy saving grace extend.",
      "Eternal Spirit, by whose breath The soul is raised from sin and death,\nBefore Thy throne we sinners bend; To us Thy quickening power extend."
    ]
  },
  {
    id: 482,
    number: 482,
    title: "Fierce Raged the Tempest o'er the Deep",
    category: "Comfort",
    author: "Godfrey Thring",
    tune: "ST. AELRED",
    verses: [
      "Fierce raged the tempest o'er the deep, Watch did Thine anxious servants keep,\nBut Thou wast wrapped in guileless sleep, Calm and still.",
      "'Save, Lord, we perish,' was their cry, 'O save us in our agony!'\nThy word above the storm rose high, 'Peace, be still.'",
      "The wild winds hushed; the angry deep Sank, like a little child, to sleep;\nThe sullen billows ceased to leap, At Thy will."
    ]
  },
  {
    id: 483,
    number: 483,
    title: "Fountain of Good, to Own Thy Love",
    category: "Worship",
    author: "Philip Doddridge",
    tune: "ST. STEPHEN",
    verses: [
      "Fountain of good, to own Thy love Our thankful hearts incline;\nWhat can we offer, Lord, to Thee, When all the worlds are Thine?",
      "But Thou hast needy brethren here, Partakers of Thy grace,\nWhose names Thou wilt Thyself confess Before the Father's face.",
      "In them Thou mayst be clothed and fed, And visited and cheered;\nAnd in their accents of distress Thy pleading voice is heard."
    ]
  },
  {
    id: 484,
    number: 484,
    title: "Fling Out the Banner! Let It Float",
    category: "Missionary",
    author: "G. W. Doane",
    tune: "WALTHAM",
    verses: [
      "Fling out the banner! let it float Skyward and seaward, high and wide;\nThe sun that lights its shining folds, The cross on which the Saviour died.",
      "Fling out the banner! angels bend In anxious silence o'er the sign,\nAnd vainly seek to comprehend The wonder of the love divine.",
      "Fling out the banner! heathen lands Shall see from far the glorious sight,\nAnd nations, crowding to be born, Baptize their spirits in its light."
    ]
  },
  {
    id: 485,
    number: 485,
    title: "For All the Saints, Who from Their Labours Rest",
    category: "Worship",
    author: "W. Walsham How",
    tune: "SINE NOMINE",
    verses: [
      "For all the saints, who from their labours rest,\nWho Thee by faith before the world confessed,\nThy Name, O Jesus, be for ever blessed. Alleluia, Alleluia!",
      "Thou wast their Rock, their Fortress and their Might;\nThou, Lord, their Captain in the well-fought fight;\nThou, in the darkness drear, their one true Light. Alleluia, Alleluia!",
      "Oh, may Thy soldiers, faithful, true, and bold,\nFight as the saints who nobly fought of old,\nAnd win, with them, the victor's crown of gold. Alleluia, Alleluia!"
    ]
  },
  {
    id: 486,
    number: 486,
    title: "For All Thy Saints, O Lord",
    category: "Worship",
    author: "Richard Mant",
    tune: "ST. GEORGE",
    verses: [
      "For all Thy saints, O Lord, Who strove in Thee to live,\nWho followed Thee, obeyed, adored, Our grateful hymn receive.",
      "For all Thy saints, O Lord, Who strove in Thee to die,\nWho counted Thee their great reward, Accept our thankful cry.",
      "They all in life and death, With Thee, their Lord, in view,\nLearned from Thy Holy Spirit's breath To suffer and to do."
    ]
  },
  {
    id: 487,
    number: 487,
    title: "For Ever with the Lord",
    category: "Comfort",
    author: "James Montgomery",
    tune: "NEARER HOME",
    verses: [
      "'For ever with the Lord!' Amen; so let it be;\nLife from the dead is in that word, 'Tis immortality.",
      "Here in the body pent, Absent from Him I roam,\nYet nightly pitch my moving tent A day's march nearer home.",
      "My Father's house on high, Home of my soul, how near,\nAt times, to faith's foreseeing eye, Thy golden gates appear!"
    ]
  },
  {
    id: 488,
    number: 488,
    title: "From All That Dwell Below the Skies",
    category: "Worship",
    author: "Isaac Watts",
    tune: "OLD 100TH",
    verses: [
      "From all that dwell below the skies Let the Creator's praise arise;\nLet the Redeemer's Name be sung Through every land, by every tongue.",
      "Eternal are Thy mercies, Lord; Eternal truth attends Thy Word;\nThy praise shall sound from shore to shore Till suns shall rise and set no more.",
      "Your lofty themes, ye mortals, bring, In songs of praise divinely sing;\nThe great salvation loud proclaim, And shout for joy the Saviour's Name."
    ]
  },
  {
    id: 489,
    number: 489,
    title: "For Thee, O Dear, Dear Country",
    category: "Worship",
    author: "Bernard of Cluny",
    tune: "PEARSALL",
    verses: [
      "For thee, O dear, dear country, Mine eyes their vigils keep;\nFor very love, beholding Thy happy name, they weep.",
      "The mention of thy glory Is unction to the breast,\nAnd medicine in sickness, And love and life and rest.",
      "O one, O only mansion! O Paradise of joy!\nWhere tears are ever banished And smiles have no alloy."
    ]
  },
  {
    id: 490,
    number: 490,
    title: "Forsaken Once, and Thrice Denied",
    category: "Passion",
    author: "C. F. Alexander",
    tune: "DERRY",
    verses: [
      "Forsaken once, and thrice denied, The risen Lord shall be,\nBy one who, in his hour of pride, Had vowed to die with Thee.",
      "Oh, by that look of love and power Which broke the heart of stone,\nIn that most dark and bitter hour When Thou wast left alone.",
      "Oh, by that look, let us be taught To weep for all our sin;\nAnd by Thy Holy Spirit brought To find Thy peace within."
    ]
  },
  {
    id: 491,
    number: 491,
    title: "Forth in Thy Name, O Lord, I Go",
    category: "Worship",
    author: "Charles Wesley",
    tune: "ANGELS' SONG",
    verses: [
      "Forth in Thy Name, O Lord, I go, My daily labour to pursue;\nThee, only Thee, resolved to know In all I think, or speak, or do.",
      "The task Thy wisdom hath assigned Oh, let me cheerfully fulfill;\nIn all my works Thy presence find, And prove Thy good and perfect will.",
      "Thee may I set at my right hand, Whose eyes mine inmost substance see;\nAnd labour on at Thy command, And offer all my works to Thee."
    ]
  },
  {
    id: 492,
    number: 492,
    title: "Glory to Jesus for All He Hath Done",
    category: "Worship",
    author: "Anonymous",
    tune: "GLORY TO JESUS",
    verses: [
      "Glory to Jesus for all He hath done, Glory to Jesus, the Father's own Son;\nHe came from the glory, He died on the tree, To purchase salvation for you and for me.",
      "Glory to Jesus! He rose from the dead, Glory to Jesus! our glorified Head;\nHe lives in the glory, He pleads for His own, And soon He is coming to sit on His throne.",
      "Glory to Jesus! let all the world sing, Glory to Jesus! our Saviour and King;\nOh, tell of His mercy, oh, tell of His love, Till all shall be gathered to meet Him above."
    ]
  },
  {
    id: 493,
    number: 493,
    title: "Glory Be to Jesus",
    category: "Passion",
    author: "Italian, 18th Century",
    tune: "CASWALL",
    verses: [
      "Glory be to Jesus, Who in bitter pains\nPoured for me the life-blood From His sacred veins!",
      "Grace and life eternal In that blood I find,\nBlest be His compassion Infinitely kind!",
      "Blest through endless ages Be the precious stream,\nWhich from endless torments Did the world redeem!"
    ]
  },
  {
    id: 494,
    number: 494,
    title: "God of All Grace, Thy Mercy Send",
    category: "Worship",
    author: "Anonymous",
    tune: "ST. FLAVIAN",
    verses: [
      "God of all grace, Thy mercy send, To us who now before Thee bend;\nOh, hear our prayer, and let Thy light For ever shine upon our sight.",
      "Thy Holy Spirit, Lord, impart, To dwell within each waiting heart;\nThat we may follow only Thee, And in Thy love's reflection be.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 495,
    number: 495,
    title: "Go to Dark Gethsemane",
    category: "Passion",
    author: "James Montgomery",
    tune: "GETHSEMANE",
    verses: [
      "Go to dark Gethsemane, Ye that feel the tempter's power;\nYour Redeemer's conflict see, Watch with Him one bitter hour;\nTurn not from His griefs away, Learn of Jesus Christ to pray.",
      "Follow to the judgement-hall, View the Lord of life arraigned;\nOh, the wormwood and the gall! Oh, the pangs His soul sustained!\nShun not suffering, shame, or loss; Learn of Him to bear the cross.",
      "Calvary's mournful mountain climb; There, adoring at His feet,\nMark that miracle of time, God's own sacrifice complete;\n'It is finished!' hear Him cry; Learn of Jesus Christ to die."
    ]
  },
  {
    id: 496,
    number: 496,
    title: "God Be with You Till We Meet Again",
    category: "Worship",
    author: "J. E. Rankin",
    tune: "RANDOLPH",
    verses: [
      "God be with you till we meet again; By His counsels guide, uphold you,\nWith His sheep securely fold you; God be with you till we meet again.",
      "God be with you till we meet again; 'Neath His wings securely hide you,\nDaily manna still provide you; God be with you till we meet again.",
      "God be with you till we meet again; When life's perils thick confound you,\nPut His arms unfailing round you; God be with you till we meet again."
    ]
  },
  {
    id: 497,
    number: 497,
    title: "God Is Love, His Mercy Brightens",
    category: "Worship",
    author: "John Bowring",
    tune: "SUSSEX",
    verses: [
      "God is love; His mercy brightens All the path in which we rove;\nBliss He wakes and woe He lightens; God is wisdom, God is love.",
      "Chance and change are busy ever; Man decays, and ages move;\nBut His mercy waneth never; God is wisdom, God is love.",
      "E'en the hour that darkest seemeth Will His changeless goodness prove;\nFrom the gloom His brightness streameth; God is wisdom, God is love."
    ]
  },
  {
    id: 498,
    number: 498,
    title: "God Is Working His Purpose Out",
    category: "Worship",
    author: "A. C. Ainger",
    tune: "PURPOSE",
    verses: [
      "God is working His purpose out, as year succeeds to year:\nGod is working His purpose out, and the time is drawing near;\nNearer and nearer draws the time, the time that shall surely be,\nWhen the earth shall be filled with the glory of God, as the waters cover the sea.",
      "What can we do to work God's work, to prosper and increase\nThe brotherhood of all mankind, the reign of the Prince of Peace?\nWhat can we do to hasten the time, the time that shall surely be,\nWhen the earth shall be filled with the glory of God, as the waters cover the sea?",
      "March we forth in the strength of God, with the banner of Christ unfurled,\nThat the light of the glorious Gospel of truth may shine throughout the world;\nFight we the fight with sorrow and sin, to hasten the time to be,\nWhen the earth shall be filled with the glory of God, as the waters cover the sea."
    ]
  },
  {
    id: 499,
    number: 499,
    title: "God Moves in a Mysterious Way",
    category: "Comfort",
    author: "William Cowper",
    tune: "LONDON NEW",
    verses: [
      "God moves in a mysterious way His wonders to perform;\nHe plants His footsteps in the sea, And rides upon the storm.",
      "Deep in unfathomable mines Of never-failing skill,\nHe treasures up His bright designs, And works His sovereign will.",
      "Ye fearful saints, fresh courage take; The clouds ye so much dread\nAre big with mercy, and shall break In blessings on your head."
    ]
  },
  {
    id: 500,
    number: 500,
    title: "God of Our Life, Through All the Circling Years",
    category: "Worship",
    author: "Hugh T. Kerr",
    tune: "SANDON",
    verses: [
      "God of our life, through all the circling years,\nWe trust in Thee; In all the past, through all our hopes and fears,\nThy hand we see.",
      "With each new day, when morning light appears,\nWe trust in Thee; In every hour, through all our smiles and tears,\nThy hand we see.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 501,
    number: 501,
    title: "God of Our Fathers, Whose Almighty Hand",
    category: "Worship",
    author: "Daniel C. Roberts",
    tune: "NATIONAL HYMN",
    verses: [
      "God of our fathers, whose almighty hand\nLeads forth in beauty all the starry band\nOf shining worlds in splendour through the skies,\nOur grateful songs before Thy throne arise.",
      "Thy love divine hath led us in the past,\nIn this good land our lot is happily cast;\nBe Thou our Ruler, Guardian, Guide and Stay,\nThy Word our law, Thy paths our chosen way.",
      "From war's alarms, from deadly pestilence,\nBe Thy strong arm our ever sure defence;\nThy true religion in our hearts increase,\nThy goodness fill our days with lasting peace."
    ]
  },
  {
    id: 502,
    number: 502,
    title: "God of the Living, in Whose Eyes",
    category: "Worship",
    author: "John Ellerton",
    tune: "OLD 113TH",
    verses: [
      "God of the living, in whose eyes Unveiled Thy whole creation lies,\nAll souls are Thine; we must not say That those are dead who pass away,\nFrom this our world of flesh set free, We know them living unto Thee.",
      "Not spilt like water on the ground, Not wrapped in darkness vast and profound,\nNot vanished like the morning dew, But safe in Thee, the only True;\nIn Thee, who art the Life of all, They live, and hear Thy loving call.",
      "Released from earthly toil and strife, With Thee is light and perfect life;\nThy love has conquered death and sin, And opened heaven to let them in;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be."
    ]
  },
  {
    id: 503,
    number: 503,
    title: "God of the Prophets! Bless the Prophets' Sons",
    category: "Worship",
    author: "Denis Wortman",
    tune: "TOULON",
    verses: [
      "God of the prophets! bless the prophets' sons;\nElijah's mantle o'er Elisha cast;\nEach age its solemn task may claim at once,\nTo tell Thy truth as in the ages past.",
      "Anoint them prophets! Make their voices heard;\nThroughout the world Thy glorious Gospel spread;\nThat all may know the power of Thy Word,\nAnd by Thy Holy Spirit's light be led.",
      "Make them apostles! Heralds of Thy grace,\nTo every nation, every tribe and tongue;\nThat all may see the brightness of Thy face,\nAnd join the song that by the saints is sung."
    ]
  },
  {
    id: 504,
    number: 504,
    title: "God of the World! Thy Glories Shine",
    category: "Worship",
    author: "Anonymous",
    tune: "ST. FLAVIAN",
    verses: [
      "God of the world! Thy glories shine In every work and word of Thine;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "Thy Holy Spirit, Lord, impart, To dwell within each waiting heart;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 505,
    number: 505,
    title: "God Revealeth His Presence",
    category: "Worship",
    author: "Gerhard Tersteegen",
    tune: "ARNSBERG",
    verses: [
      "God revealeth His presence: Let us now adore Him,\nAnd with awe appear before Him.\nGod is in His temple: All within keep silence,\nProstrate lie with deepest reverence.",
      "Him alone God we own, Him our God and Saviour;\nPraise His Name for ever.",
      "God revealeth His presence: Hear the harps resounding,\nSee the crowds the throne surrounding;\n'Holy, Holy, Holy!' Hear the hymn ascending,\nAngels, saints, their voices blending."
    ]
  },
  {
    id: 506,
    number: 506,
    title: "God, Who Made the Earth and Sky",
    category: "Worship",
    author: "Anonymous",
    tune: "ST. BEES",
    verses: [
      "God, who made the earth and sky, Hear us when to Thee we cry;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "Thy Holy Spirit, Lord, impart, To dwell within each waiting heart;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 507,
    number: 507,
    title: "God the All-terrible! King, Who Ordainest",
    category: "Worship",
    author: "H. F. Chorley",
    tune: "RUSSIAN HYMN",
    verses: [
      "God the All-terrible! King, who ordainest\nThunder Thy clarion, lightning Thy sword;\nShow forth Thy pity on high where Thou reignest;\nGive to us peace in our time, O Lord.",
      "God the All-merciful! earth hath forsaken\nThy ways of blessedness, slighted Thy Word;\nBid not Thy wrath in its terrors awaken;\nGive to us peace in our time, O Lord.",
      "God the All-righteous! One Thee we are casting\nAll our transgressions, our errors, O Lord;\nLet not Thy judgements be yet everlasting;\nGive to us peace in our time, O Lord."
    ]
  },
  {
    id: 508,
    number: 508,
    title: "God the Father, Be Our Stay",
    category: "Worship",
    author: "Martin Luther",
    tune: "GOTT DER VATER WOHN UNS BEI",
    verses: [
      "God the Father, be our Stay, When the world and flesh betray;\nKeep us in the narrow way, Till our earthly course is run.",
      "Jesus, Saviour, be our Guide, In Thy mercy we confide;\nEver keep us near Thy side, Till the victory is won.",
      "Holy Spirit, be our Light, In the darkness of the night;\nGuide our wandering feet aright, Till we reach our heavenly home."
    ]
  },
  {
    id: 509,
    number: 509,
    title: "God the Father, God the Son",
    category: "Worship",
    author: "Anonymous",
    tune: "ST. BEES",
    verses: [
      "God the Father, God the Son, God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 510,
    number: 510,
    title: "God the Omnipotent! Mighty Avenger",
    category: "Worship",
    author: "H. F. Chorley",
    tune: "RUSSIAN HYMN",
    verses: [
      "God the Omnipotent! Mighty Avenger,\nWatching invisible, judging unheard;\nSave us in mercy, oh, save us from danger;\nGive to us peace in our time, O Lord.",
      "God the All-merciful! earth hath forsaken\nThy ways of blessedness, slighted Thy Word;\nBid not Thy wrath in its terrors awaken;\nGive to us peace in our time, O Lord.",
      "So shall Thy people, with thankful devotion,\nPraise Him who saved them from peril and sword;\nShouting in chorus, from ocean to ocean,\nPeace to the nations, and joy to the world."
    ]
  },
  {
    id: 511,
    number: 511,
    title: "God Who Madest Earth and Heaven",
    category: "Evening",
    author: "Reginald Heber",
    tune: "AR HYD Y NOS",
    verses: [
      "God, who madest earth and heaven, Darkness and light;\nWho the day for toil hast given, For rest the night;",
      "May Thine angel-guards defend us, Slumber sweet Thy mercy send us,\nHoly dreams and hopes attend us, This livelong night.",
      "Guard us waking, guard us sleeping, And, when we die,\nMay we in Thy mighty keeping, All peaceful lie."
    ]
  },
  {
    id: 512,
    number: 512,
    title: "Golden Harps Are Sounding",
    category: "Worship",
    author: "F. R. Havergal",
    tune: "HERMAS",
    verses: [
      "Golden harps are sounding, Angel voices sing,\nPearls of light surrounding Jesus, our glorious King.",
      "He who came to save us, He who bled and died,\nNow is risen in glory, At the Father's side.",
      "All His work is ended, Joyfully we sing,\nJesus hath ascended, Glory to our King!"
    ]
  },
  {
    id: 513,
    number: 513,
    title: "Gracious Saviour, Gentle Shepherd",
    category: "Children",
    author: "Jane E. Leeson",
    tune: "ST. OSWALD",
    verses: [
      "Gracious Saviour, gentle Shepherd, Little ones are dear to Thee;\nGathered with Thine arms, and carried In Thy bosom may we be.",
      "Cleanse our hearts from every evil, Keep us from the tempter's snare;\nGuide us in the path of duty, Make us objects of Thy care.",
      "Let Thy Holy Spirit lead us In the way of truth and love;\nTill we reach our heavenly mansion, In the realms of light above."
    ]
  },
  {
    id: 514,
    number: 514,
    title: "Gracious Spirit, Holy Ghost",
    category: "Worship",
    author: "Christopher Wordsworth",
    tune: "CHARITY",
    verses: [
      "Gracious Spirit, Holy Ghost, Taught by Thee we covet most\nOf Thy gifts at Pentecost, Holy, heavenly love.",
      "Love is kind, and suffers long, Love is meek, and thinks no wrong,\nLove than death itself more strong; Therefore, give us love.",
      "Prophecy will soon be past, Tongues and knowledge shall not last,\nLove of all is first and last; Therefore, give us love."
    ]
  },
  {
    id: 515,
    number: 515,
    title: "Great God, What Do I See and Hear!",
    category: "Worship",
    author: "B. Ringwaldt",
    tune: "LUTHER'S HYMN",
    verses: [
      "Great God, what do I see and hear! The end of things created!\nThe Judge of mankind doth appear On clouds of glory seated!",
      "The trumpet sounds; the graves restore The dead which they contained before;\nPrepare, my soul, to meet Him!",
      "The dead in Christ shall first arise At that last trumpet's sounding,\nCaught up to meet Him in the skies, With joy their Lord surrounding."
    ]
  },
  {
    id: 516,
    number: 516,
    title: "Great God, Indulgent Power Divine",
    category: "Worship",
    author: "Anonymous",
    tune: "ST. FLAVIAN",
    verses: [
      "Great God, indulgent Power divine, In every work and word of Thine;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "Thy Holy Spirit, Lord, impart, To dwell within each waiting heart;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 517,
    number: 517,
    title: "Great King of Nations, Hear Our Prayer",
    category: "Worship",
    author: "J. H. Gurney",
    tune: "OLD 137TH",
    verses: [
      "Great King of nations, hear our prayer, while at Thy feet we fall,\nAnd humbly with united cry to Thee for mercy call.",
      "The guilt is ours, but grace is Thine; oh, turn us not away;\nBut hear us from Thy lofty throne, and help us when we pray.",
      "Our fathers' sins were manifold, and ours no less we own,\nYet wondrous was Thy patience shown in ages that are gone."
    ]
  },
  {
    id: 518,
    number: 518,
    title: "Great Shepherd of Thy People, Hear",
    category: "Worship",
    author: "John Newton",
    tune: "ST. STEPHEN",
    verses: [
      "Great Shepherd of Thy people, hear, Thy presence now display;\nAs Thou hast given a place for prayer, So give us hearts to pray.",
      "Within these walls let holy peace, And love and concord dwell;\nHere give the troubled conscience ease, The wounded spirit heal.",
      "May we in faith receive Thy Word, In faith present our prayers;\nAnd in the presence of our Lord Unbosom all our cares."
    ]
  },
  {
    id: 519,
    number: 519,
    title: "Guide Me, O Thou Great Jehovah",
    category: "Worship",
    author: "William Williams",
    tune: "CWM RHONDDA",
    verses: [
      "Guide me, O Thou great Jehovah, Pilgrim through this barren land;\nI am weak, but Thou art mighty; Hold me with Thy powerful hand;\nBread of heaven, Bread of heaven, Feed me till I want no more.",
      "Open now the crystal fountain, Whence the healing stream doth flow;\nLet the fire and cloudy pillar Lead me all my journey through;\nStrong Deliverer, strong Deliverer, Be Thou still my Strength and Shield.",
      "When I tread the verge of Jordan, Bid my anxious fears subside;\nDeath of death, and hell's Destruction, Land me safe on Canaan's side;\nSongs of praises, songs of praises I will ever give to Thee."
    ]
  },
  {
    id: 520,
    number: 520,
    title: "Hail, Victor Christ! Hail, Risen King!",
    category: "Easter",
    author: "Anonymous",
    tune: "VICTORY",
    verses: [
      "Hail, Victor Christ! Hail, Risen King! Thy praise let all the nations sing;\nFor Thou hast conquered death and sin, And opened heaven to let us in.",
      "The powers of darkness are o'erthrown, The victory is all Thine own;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 521,
    number: 521,
    title: "Hail, Thou Once Despised Jesus!",
    category: "Worship",
    author: "John Bakewell",
    tune: "IN BABILONE",
    verses: [
      "Hail, Thou once despised Jesus! Hail, Thou Galilean King!\nThou didst suffer to release us; Thou didst free salvation bring.",
      "Hail, Thou agonizing Saviour, Bearer of our sin and shame!\nBy Thy merits we find favour; Life is given through Thy Name.",
      "Paschal Lamb, by God appointed, All our sins on Thee were laid;\nBy almighty love anointed, Thou hast full atonement made."
    ]
  },
  {
    id: 522,
    number: 522,
    title: "Hark! the Voice of Love and Mercy",
    category: "Passion",
    author: "Jonathan Evans",
    tune: "KENSINGTON",
    verses: [
      "Hark! the voice of love and mercy Sounds aloud from Calvary;\nSee, it rends the rocks asunder, Shakes the earth, and veils the sky:\n'It is finished!' Hear the dying Saviour cry.",
      "'It is finished!' Oh, what pleasure Do these charming words afford!\nHeavenly blessings without measure Flow to us from Christ the Lord:\n'It is finished!' Saints, the dying words record.",
      "Finished all the types and shadows Of the ceremonial law;\nFinished all that God had promised; Death and hell no more shall awe:\n'It is finished!' Saints, from hence your comfort draw."
    ]
  },
  {
    id: 523,
    number: 523,
    title: "Hark, My Soul! It Is the Lord",
    category: "Comfort",
    author: "William Cowper",
    tune: "ST. BEES",
    verses: [
      "Hark, my soul! it is the Lord; 'Tis thy Saviour, hear His word;\nJesus speaks, and speaks to thee: 'Say, poor sinner, lov'st thou Me?'",
      "'I delivered thee when bound, And, when bleeding, healed thy wound;\nSought thee wandering, set thee right, Turned thy darkness into light.'",
      "'Can a woman's tender care Cease towards the child she bare?\nYes, she may forgetful be, Yet will I remember thee.'"
    ]
  },
  {
    id: 524,
    number: 524,
    title: "Hark! the Glad Sound! the Saviour Comes",
    category: "Advent",
    author: "Philip Doddridge",
    tune: "BRISTOL",
    verses: [
      "Hark! the glad sound! the Saviour comes, The Saviour promised long;\nLet every heart prepare a throne, And every voice a song.",
      "He comes, the prisoners to release In Satan's bondage held;\nThe gates of brass before Him burst, The iron fetters yield.",
      "He comes, the broken heart to bind, The bleeding soul to cure,\nAnd with the treasures of His grace To enrich the humble poor."
    ]
  },
  {
    id: 525,
    number: 525,
    title: "Hark! What Mean Those Holy Voices",
    category: "Christmas",
    author: "John Cawood",
    tune: "STUTTGART",
    verses: [
      "Hark! what mean those holy voices Sweetly sounding through the skies?\nLo! the angelic host rejoices, Heavenly Alleluias rise.",
      "Listen to the wondrous story, Which they chant in hymns of joy:\n'Glory in the highest, glory! Glory be to God on high!'",
      "'Peace on earth, good-will from heaven, Reaching far as man is found;\nSouls redeemed and sins forgiven, Loud our golden harps shall sound.'"
    ]
  },
  {
    id: 526,
    number: 526,
    title: "Hark! the Song of Jubilee",
    category: "Worship",
    author: "James Montgomery",
    tune: "THANKSGIVING",
    verses: [
      "Hark! the song of jubilee, Loud as mighty thunders roar,\nOr the fullness of the sea, When it breaks upon the shore:",
      "'Alleluia! for the Lord God omnipotent shall reign!'\nAlleluia! let the word Echo round the earth and main.",
      "See Jehovah's banner furled; Sheathed His sword: He speaks—'tis done,\nAnd the kingdoms of this world Are the kingdoms of His Son."
    ]
  },
  {
    id: 527,
    number: 527,
    title: "Hark! the Sound of Holy Voices",
    category: "Worship",
    author: "Christopher Wordsworth",
    tune: "DEERHURST",
    verses: [
      "Hark! the sound of holy voices Chanting at the crystal sea,\nAlleluia, Alleluia, Alleluia, Lord, to Thee!",
      "Multitude, which none can number, Like the stars in glory stands,\nClothed in white apparel, holding Palms of victory in their hands.",
      "Patriarch, and holy prophet, Who prepared the way of Christ,\nKing, apostle, saint, and martyr, Confessors of the Eucharist."
    ]
  },
  {
    id: 528,
    number: 528,
    title: "Hark! the Voice of Jesus Calling",
    category: "Missionary",
    author: "Daniel March",
    tune: "GALILEE",
    verses: [
      "Hark! the voice of Jesus calling, 'Who will go and work today?\nFields are white, and harvests waiting, Who will bear the sheaves away?'",
      "Loud and long the Master calleth, Rich reward He offers free;\nWho will answer, gladly saying, 'Here am I, send me, send me'?",
      "If you cannot cross the ocean, And the heathen lands explore,\nYou can find the heathen nearer, You can help them at your door."
    ]
  },
  {
    id: 529,
    number: 529,
    title: "He Is Risen, He Is Risen",
    category: "Easter",
    author: "C. F. Alexander",
    tune: "UNSER HERRSCHER",
    verses: [
      "He is risen, He is risen! Tell it out with joyful voice;\nHe has burst His three days' prison; Let the whole wide earth rejoice.",
      "Death is conquered, man is free, Christ has won the victory!",
      "Tell it to the sinners, weeping Over deeds in darkness done,\nThat the Lord has ceased His sleeping, And the victory is won."
    ]
  },
  {
    id: 530,
    number: 530,
    title: "Head of Thy Church Triumphant",
    category: "Worship",
    author: "Charles Wesley",
    tune: "ST. BEES",
    verses: [
      "Head of Thy Church triumphant, We joyfully adore Thee;\nTill Thou appear, Thy members here Shall sing like those in glory.",
      "We lift our hearts and voices With blest anticipation,\nAnd cry aloud, And give to God The praise of our salvation.",
      "While in affliction's furnace, And passing through the fire,\nThy love we praise, Which knows our days, And ever brings us higher."
    ]
  },
  {
    id: 531,
    number: 531,
    title: "Heal Us, Emmanuel, Hear Our Prayer",
    category: "Comfort",
    author: "William Cowper",
    tune: "ST. FLAVIAN",
    verses: [
      "Heal us, Emmanuel, hear our prayer; We wait to feel Thy touch;\nDeep-wounded souls to Thee repair, And, Saviour, we are such.",
      "Our faith is feeble, we confess, We faintly trust Thy Word;\nBut wilt Thou pity us the less? Be patient with us, Lord!",
      "Remember him who once applied With trembling for relief;\n'Lord, I believe,' with tears he cried, 'Oh, help my unbelief!'"
    ]
  },
  {
    id: 532,
    number: 532,
    title: "Hear Us, Thou That Broodest",
    category: "Worship",
    author: "Godfrey Thring",
    tune: "ST. FLAVIAN",
    verses: [
      "Hear us, Thou that broodest O'er the watery deep,\nWaking all creation From its primal sleep;",
      "Holy Spirit, breathing Breath of life divine,\nBreathe into our spirits, Make them wholly Thine.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection be;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 533,
    number: 533,
    title: "Heavenly Father, Send Thy Blessing",
    category: "Children",
    author: "Christopher Wordsworth",
    tune: "ST. OSWALD",
    verses: [
      "Heavenly Father, send Thy blessing On Thy children gathered here;\nMay they all, Thy Name confessing, Be to Thee for ever dear.",
      "May they be like Joseph, loving, Dutiful, and chaste, and pure;\nAnd their faith, like David, proving, Steadfast unto death endure.",
      "Holy Saviour, who in meekness Didst voutsafe a child to be,\nGuide their steps and help their weakness, Bless and make them like to Thee."
    ]
  },
  {
    id: 534,
    number: 534,
    title: "Hills of the North, Rejoice",
    category: "Missionary",
    author: "C. E. Oakley",
    tune: "LITTLE CORNARD",
    verses: [
      "Hills of the north, rejoice; River and mountain-spring,\nHark to the advent voice; Valley and lowland, sing:",
      "Though absent long, your Lord is nigh; He judgement brings and victory.",
      "Isles of the southern seas, Deep in your coral caves\nPent be each stormy breeze, Lulled be your echoing waves;",
      "Say to the nations, Jesus reigns, Who suffered to release their chains."
    ]
  },
  {
    id: 535,
    number: 535,
    title: "Holy Father, Cheer Our Way",
    category: "Evening",
    author: "R. H. Robinson",
    tune: "VESPER",
    verses: [
      "Holy Father, cheer our way With Thy love's perpetual ray;\nGrant us every closing day Light at evening-time.",
      "Holy Saviour, calm our fears When the earth-born cloud appears;\nGrant us in our latter years Light at evening-time.",
      "Holy Spirit, be our Guide When the shore of life we glide;\nGrant us at the eventide Light at evening-time."
    ]
  },
  {
    id: 536,
    number: 536,
    title: "Holy Father, Great Creator",
    category: "Worship",
    author: "Alexander V. Griswold",
    tune: "REGENT SQUARE",
    verses: [
      "Holy Father, great Creator, Source of all our hopes and fears;\nJesus, Saviour, Mediator, Through the world's revolving years;",
      "Holy Spirit, Renovator, In our hearts Thy light appears;\nThree in One, our God and Saviour, Hear our prayers and dry our tears.",
      "Praise to Thee, the One Eternal, Praise to Thee, the Three in One;\nFrom the hosts of light supernal, To the world's revolving sun."
    ]
  },
  {
    id: 537,
    number: 537,
    title: "Holy Ghost, Illuminator",
    category: "Worship",
    author: "Christopher Wordsworth",
    tune: "CHARITY",
    verses: [
      "Holy Ghost, Illuminator, In our hearts Thy light appears;\nSource of all our hopes and fears, Through the world's revolving years.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 538,
    number: 538,
    title: "Holy, Holy, Holy, Lord God of Hosts",
    category: "Worship",
    author: "Christopher Wordsworth",
    tune: "ST. ATHANASIUS",
    verses: [
      "Holy, Holy, Holy, Lord God of hosts! When heaven and earth,\nOut of darkness, at Thy word, Issued into glorious birth,",
      "All Thy works before Thee stood, And Thine eye beheld them good,\nWhile they sang with sweet accord, Holy, Holy, Holy Lord!",
      "Holy, Holy, Holy! All the heavenly court, Through all eternity,\nChant the song with sweet accord, Holy, Holy, Holy Lord!"
    ]
  },
  {
    id: 539,
    number: 539,
    title: "Holy Spirit, Truth Divine",
    category: "Worship",
    author: "Samuel Longfellow",
    tune: "MERCY",
    verses: [
      "Holy Spirit, Truth divine, Dawn upon this soul of mine;\nWord of God, and inward Light, Wake my spirit, clear my sight.",
      "Holy Spirit, Love divine, Glow within this heart of mine;\nKindle every high desire; Perish self in Thy pure fire.",
      "Holy Spirit, Power divine, Fill and nerve this will of mine;\nBy Thee may I strongly live, Bravely bear, and nobly strive."
    ]
  },
  {
    id: 540,
    number: 540,
    title: "Hosanna to the Living Lord!",
    category: "Worship",
    author: "Reginald Heber",
    tune: "HOSANNA",
    verses: [
      "Hosanna to the living Lord! Hosanna to the incarnate Word!\nTo Christ, Creator, Saviour, King, Let earth, let heaven, Hosanna sing!",
      "Hosanna, Lord! Thine angels cry; Hosanna, Lord! Thy saints reply;\nAbove, beneath us, and around, The dead and living swell the sound.",
      "O Saviour, with protecting care, Return to this Thy house of prayer;\nAssembled in Thy sacred Name, Where we Thy parting promise claim."
    ]
  },
  {
    id: 541,
    number: 541,
    title: "How Beauteous Are Their Feet",
    category: "Missionary",
    author: "Isaac Watts",
    tune: "ST. GEORGE",
    verses: [
      "How beauteous are their feet Who stand on Zion's hill!\nWho bring salvation on their tongues, And words of peace reveal!",
      "How charming is their voice! How sweet the tidings are!\n'Zion, behold thy Saviour King; He reigns and triumphs here.'",
      "How happy are our ears, That hear this joyful sound,\nWhich kings and prophets waited for, And sought, but never found!"
    ]
  },
  {
    id: 542,
    number: 542,
    title: "How Bright These Glorious Spirits Shine!",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ST. ANNE",
    verses: [
      "How bright these glorious spirits shine! Whence all their white array?\nHow came they to the blissful seats Of everlasting day?",
      "Lo! these are they from sufferings great Who came to realms of light,\nAnd in the blood of Christ have washed Those robes which shine so bright.",
      "Now with triumphal palms they stand Before the throne on high,\nAnd serve the God they love amidst The glories of the sky."
    ]
  },
  {
    id: 543,
    number: 543,
    title: "I Sing the Mighty Power of God",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ELLACOMBE",
    verses: [
      "I sing the mighty power of God That made the mountains rise,\nThat spread the flowing seas abroad And built the lofty skies.",
      "I sing the wisdom that ordained The sun to rule the day;\nThe moon shines full at His command, And all the stars obey.",
      "I sing the goodness of the Lord That filled the earth with food;\nHe formed the creatures with His Word, And then pronounced them good."
    ]
  },
  {
    id: 544,
    number: 544,
    title: "How Welcome Was the Call",
    category: "Worship",
    author: "Sir H. W. Baker",
    tune: "ST. GEORGE",
    verses: [
      "How welcome was the call, And sweet the festal lay,\nWhen Jesus deigned in Cana's hall To bless the bridal day!",
      "And happy was the bride, And glad the bridegroom's heart,\nFor He who turned the water wine Did holy joy impart.",
      "O Lord of life and love, Come Thou again today;\nAnd with Thy presence from above Bless those who join the way."
    ]
  },
  {
    id: 545,
    number: 545,
    title: "Hushed Was the Evening Hymn",
    category: "Children",
    author: "J. D. Burns",
    tune: "SAMUEL",
    verses: [
      "Hushed was the evening hymn, The temple courts were dark;\nThe lamp was burning dim Before the sacred ark;",
      "When suddenly a voice divine Rang through the silence of the shrine.",
      "The old man, meek and mild, The priest of Israel, slept;\nHis watch the temple-child, The little Levite, kept;",
      "And what from Eli's sense was sealed, The Lord to Hannah's son revealed."
    ]
  },
  {
    id: 546,
    number: 546,
    title: "I Am Not Worthy, Holy Lord",
    category: "Communion",
    author: "Sir H. W. Baker",
    tune: "LEICESTER",
    verses: [
      "I am not worthy, holy Lord, That Thou shouldst come to me;\nAs Thou hast said in Thy pure Word, 'I will abide with thee.'",
      "But as the centurion of old, I cry with trembling heart,\n'Lord, speak the word, and heal my soul, And ne'er from me depart.'",
      "Oh, come, and dwell within my breast, And make me wholly Thine;\nThat I may find Thy peace and rest, And in Thy glory shine."
    ]
  },
  {
    id: 547,
    number: 547,
    title: "I Bind Unto Myself Today",
    category: "Worship",
    author: "St. Patrick",
    tune: "ST. PATRICK",
    verses: [
      "I bind unto myself today The strong Name of the Trinity,\nBy invocation of the same, The Three in One, and One in Three.",
      "I bind this day to me for ever, By power of faith, Christ's Incarnation;\nHis baptism in Jordan river; His death on cross for my salvation.",
      "I bind unto myself today The power of God to hold and lead,\nHis eye to watch, His might to stay, His ear to hearken to my need."
    ]
  },
  {
    id: 548,
    number: 548,
    title: "I Could Not Do Without Thee",
    category: "Worship",
    author: "F. R. Havergal",
    tune: "MAGDALENA",
    verses: [
      "I could not do without Thee, O Saviour of the lost,\nWhose precious blood redeemed me At such tremendous cost.",
      "Thy righteousness, Thy pardon, Thy precious blood must be\nMy only hope and comfort, My glory and my plea.",
      "I could not do without Thee, I cannot stand alone;\nI have no strength or goodness, No wisdom of my own."
    ]
  },
  {
    id: 549,
    number: 549,
    title: "I Do Not Ask, O Lord, That Life May Be",
    category: "Comfort",
    author: "Adelaide A. Procter",
    tune: "SUBMISSION",
    verses: [
      "I do not ask, O Lord, that life may be A pleasant road;\nI do not ask that Thou wouldst take from me Aught of its load.",
      "I do not ask that flowers should always spring Beneath my feet;\nI know too well the poison and the sting Of things too sweet.",
      "For one thing only, Lord, dear Lord, I plead: Lead me aright;\nThough strength should fail, and heart should sink indeed, Through peace to light."
    ]
  },
  {
    id: 550,
    number: 550,
    title: "I Think When I Read That Sweet Story of Old",
    category: "Children",
    author: "Jemima Luke",
    tune: "SALAMIS",
    verses: [
      "I think when I read that sweet story of old,\nWhen Jesus was here among men,\nHow He called little children as lambs to His fold,\nI should like to have been with them then.",
      "I wish that His hands had been placed on my head,\nThat His arm had been thrown around me,\nAnd that I might have seen His kind look when He said,\n'Let the little ones come unto Me.'",
      "Yet still to His footstool in prayer I may go,\nAnd ask for a share in His love;\nAnd if I now earnestly seek Him below,\nI shall see Him and hear Him above."
    ]
  },
  {
    id: 551,
    number: 551,
    title: "I Hunger and I Thirst",
    category: "Communion",
    author: "J. S. B. Monsell",
    tune: "ST. FLAVIAN",
    verses: [
      "I hunger and I thirst; Jesus, my Manna be;\nYe living waters, burst Out of the rock for me.",
      "Thou bruised and broken Bread, My life-fountain be;\nWith heavenly manna fed, May I be filled with Thee.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 552,
    number: 552,
    title: "I Lay My Sins on Jesus",
    category: "Comfort",
    author: "Horatius Bonar",
    tune: "AURELIA",
    verses: [
      "I lay my sins on Jesus, The spotless Lamb of God;\nHe bears them all, and frees us From the accursed load.",
      "I bring my guilt to Jesus, To wash my crimson stains\nWhite in His blood most precious, Till not a spot remains.",
      "I lay my wants on Jesus; All fullness dwells in Him;\nHe heals all my diseases, He doth my soul redeem."
    ]
  },
  {
    id: 553,
    number: 553,
    title: "I Look to Thee in Every Need",
    category: "Comfort",
    author: "Samuel Longfellow",
    tune: "ST. FLAVIAN",
    verses: [
      "I look to Thee in every need, And never look in vain;\nI feel Thy strong and tender love, And all my heart is plain.",
      "Thy presence fills my soul with light, And makes my darkness flee;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 554,
    number: 554,
    title: "I Love to Hear the Story",
    category: "Children",
    author: "Emily Miller",
    tune: "ANGEL'S STORY",
    verses: [
      "I love to hear the story Which angel voices tell,\nHow once the King of glory Came down on earth to dwell.",
      "I am both weak and sinful, But this I surely know,\nThe Lord came down to save me, Because He loved me so.",
      "I love to hear the story Which angel voices tell,\nHow once the King of glory Came down on earth to dwell."
    ]
  },
  {
    id: 555,
    number: 555,
    title: "I Need Thee, Precious Jesus",
    category: "Comfort",
    author: "Frederick Whitfield",
    tune: "MEIRIONYDD",
    verses: [
      "I need Thee, precious Jesus, For I am full of sin;\nMy soul is dark and guilty, My heart is dead within.",
      "I need the cleansing fountain Where I can always flee,\nThe blood of Christ most precious, The sinner's perfect plea.",
      "I need Thee, precious Jesus, For I am very poor;\nA stranger and a pilgrim, I have no earthly store."
    ]
  },
  {
    id: 556,
    number: 556,
    title: "I Sing the Almighty Power of God",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ELLACOMBE",
    verses: [
      "I sing the almighty power of God That made the mountains rise,\nThat spread the flowing seas abroad And built the lofty skies.",
      "I sing the wisdom that ordained The sun to rule the day;\nThe moon shines full at His command, And all the stars obey.",
      "I sing the goodness of the Lord That filled the earth with food;\nHe formed the creatures with His Word, And then pronounced them good."
    ]
  },
  {
    id: 557,
    number: 557,
    title: "I'm Not Ashamed to Own My Lord",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ST. STEPHEN",
    verses: [
      "I'm not ashamed to own my Lord, Or to defend His cause,\nMaintain the honour of His Word, The glory of His cross.",
      "Jesus, my God! I know His Name, His Name is all my trust;\nNor will He put my soul to shame, Nor let my hope be lost.",
      "Firm as His throne His promise stands, And He can well secure\nWhat I've committed to His hands, Till the decisive hour."
    ]
  },
  {
    id: 558,
    number: 558,
    title: "I've Found a Friend, O Such a Friend!",
    category: "Comfort",
    author: "J. G. Small",
    tune: "CONSTANCE",
    verses: [
      "I've found a Friend, O such a Friend! He loved me ere I knew Him;\nHe drew me with the cords of love, And thus He bound me to Him.",
      "And round my heart still closely twine Those ties which naught can sever,\nFor I am His, and He is mine, For ever and for ever.",
      "I've found a Friend, O such a Friend! He bled, He died to save me;\nAnd not alone the gift of life, But His own self He gave me."
    ]
  },
  {
    id: 559,
    number: 559,
    title: "If There Be That Skills to Reckon",
    category: "Worship",
    author: "Latin, 14th Century",
    tune: "QUANTA QUALIA",
    verses: [
      "If there be that skills to reckon All the number of the blest,\nHe, perchance, can spell the gladness Of the everlasting rest.",
      "Which, their earthly warfare finished, They, through suffering, have won,\nIn the presence of the Father, And the glory of the Son.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 560,
    number: 560,
    title: "If Thou But Suffer God to Guide Thee",
    category: "Comfort",
    author: "Georg Neumark",
    tune: "NEUMARK",
    verses: [
      "If thou but suffer God to guide thee, And hope in Him through all thy ways,\nHe'll give thee strength, whate'er betide thee, And bear thee through the evil days.",
      "Who trusts in God's unchanging love Builds on the rock that naught can move.",
      "What can these anxious cares avail thee, These never-ceasing moans and sighs?\nWhat can it help if thou bewail thee O'er each dark moment as it flies?"
    ]
  },
  {
    id: 561,
    number: 561,
    title: "Immortal Love, For Ever Full",
    category: "Worship",
    author: "J. G. Whittier",
    tune: "BISHOPTHORPE",
    verses: [
      "Immortal Love, for ever full, For ever flowing free,\nFor ever shared, for ever whole, A never-ebbing sea!",
      "Our outward lips confess the Name All other names above;\nLove only knoweth whence it came, And comprehendeth love.",
      "We may not climb the heavenly steeps To bring the Lord Christ down;\nIn vain we search the lowest deeps, For Him no depths can drown."
    ]
  },
  {
    id: 562,
    number: 562,
    title: "In Christ There Is No East or West",
    category: "Worship",
    author: "John Oxenham",
    tune: "ST. STEPHEN",
    verses: [
      "In Christ there is no east or west, In Him no south or north;\nBut one great fellowship of love Throughout the whole wide earth.",
      "In Him shall true hearts everywhere Their high communion find;\nHis service is the golden cord Close binding all mankind.",
      "Join hands, then, brothers of the faith, Whate'er your race may be;\nWho serves my Father as a son Is surely kin to me."
    ]
  },
  {
    id: 563,
    number: 563,
    title: "In Heavenly Love Abiding",
    category: "Comfort",
    author: "Anna L. Waring",
    tune: "PENLAN",
    verses: [
      "In heavenly love abiding, No change my heart shall fear;\nAnd safe is such confiding, For nothing changes here.",
      "The storm may roar without me, My heart may low be laid;\nBut God is round about me, And can I be dismayed?",
      "Wherever He may guide me, No want shall turn me back;\nMy Shepherd is beside me, And nothing can I lack."
    ]
  },
  {
    id: 564,
    number: 564,
    title: "In the Bleak Midwinter",
    category: "Christmas",
    author: "Christina Rossetti",
    tune: "CRANHAM",
    verses: [
      "In the bleak midwinter, Frosty wind made moan,\nEarth stood hard as iron, Water like a stone;",
      "Snow had fallen, snow on snow, Snow on snow,\nIn the bleak midwinter, Long ago.",
      "Our God, heaven cannot hold Him, Nor earth sustain;\nHeaven and earth shall flee away When He comes to reign."
    ]
  },
  {
    id: 565,
    number: 565,
    title: "In the Cross of Christ I Glory",
    category: "Passion",
    author: "John Bowring",
    tune: "RATHBUN",
    verses: [
      "In the cross of Christ I glory, Towering o'er the wrecks of time;\nAll the light of sacred story Gathers round its head sublime.",
      "When the woes of life o'ertake me, Hopes deceive, and fears annoy,\nNever shall the cross forsake me; Lo! it glows with peace and joy.",
      "When the sun of bliss is beaming Light and love upon my way,\nFrom the cross the radiance streaming Adds more lustre to the day."
    ]
  },
  {
    id: 566,
    number: 566,
    title: "In the Hour of Trial",
    category: "Comfort",
    author: "James Montgomery",
    tune: "PENITENCE",
    verses: [
      "In the hour of trial, Jesus, plead for me;\nLest by base denial I depart from Thee.",
      "When Thou seest me waver, With a look recall,\nNor for fear or favour Suffer me to fall.",
      "With forbidden pleasures Should this vain world charm,\nOr its tempting treasures Spread to work me harm."
    ]
  },
  {
    id: 567,
    number: 567,
    title: "Jerusalem, My Happy Home",
    category: "Worship",
    author: "Anonymous",
    tune: "SOUTHWELL",
    verses: [
      "Jerusalem, my happy home, Name ever dear to me!\nWhen shall my labours have an end, In joy and peace and thee?",
      "When shall these eyes thy heaven-built walls And pearly gates behold?\nThy bulwarks with salvation strong, And streets of shining gold?",
      "There happier bowers than Eden's bloom, Nor sin nor sorrow know;\nBlest seats! through rude and stormy scenes I onward press to you."
    ]
  },
  {
    id: 568,
    number: 568,
    title: "Jesu, Thou Joy of Loving Hearts",
    category: "Communion",
    author: "Bernard of Clairvaux",
    tune: "MARYTON",
    verses: [
      "Jesu, Thou Joy of loving hearts, Thou Fount of life, Thou Light of men,\nFrom the best bliss that earth imparts We turn unfilled to Thee again.",
      "Thy truth unchanged hath ever stood; Thou savest those that on Thee call;\nTo them that seek Thee Thou art good, To them that find Thee, All in all.",
      "We taste Thee, O Thou living Bread, And long to feast upon Thee still;\nWe drink of Thee, the Fountain-head, And thirst our souls from Thee to fill."
    ]
  },
  {
    id: 569,
    number: 569,
    title: "Jesu, My Lord, My God, My All",
    category: "Worship",
    author: "Henry Collins",
    tune: "ST. CHRYSOSTOM",
    verses: [
      "Jesu, my Lord, my God, my all, Hear me, blest Saviour, when I call;\nHear me, and from Thy dwelling-place Pour down the riches of Thy grace.",
      "Jesu, too late I Thee have sought, How can I love Thee as I ought?\nAnd how extol Thy matchless fame, The glorious beauty of Thy Name?",
      "Jesu, what didst Thou find in me, That Thou hast dealt so lovingly?\nHow great the joy that Thou hast brought, So far beyond my highest thought!"
    ]
  },
  {
    id: 570,
    number: 570,
    title: "Jesu, the Very Thought of Thee",
    category: "Worship",
    author: "Bernard of Clairvaux",
    tune: "ST. AGNES",
    verses: [
      "Jesu, the very thought of Thee With sweetness fills my breast;\nBut sweeter far Thy face to see, And in Thy presence rest.",
      "Nor voice can sing, nor heart can frame, Nor can the memory find,\nA sweeter sound than Thy blest Name, O Saviour of mankind!",
      "O Hope of every contrite heart, O Joy of all the meek,\nTo those who fall, how kind Thou art! How good to those who seek!"
    ]
  },
  {
    id: 571,
    number: 571,
    title: "Jesus, and Shall It Ever Be",
    category: "Worship",
    author: "Joseph Grigg",
    tune: "FEDERAL STREET",
    verses: [
      "Jesus, and shall it ever be, A mortal man ashamed of Thee?\nAshamed of Thee, whom angels praise, Whose glories shine through endless days?",
      "Ashamed of Jesus! sooner far Let evening blush to own a star;\nHe sheds the beams of light divine O'er this benighted soul of mine.",
      "Ashamed of Jesus! that dear Friend On whom my hopes of heaven depend!\nNo; when I blush, be this my shame, That I no more revere His Name."
    ]
  },
  {
    id: 572,
    number: 572,
    title: "Jesus Calls Us; o'er the Tumult",
    category: "Worship",
    author: "C. F. Alexander",
    tune: "ST. ANDREW",
    verses: [
      "Jesus calls us; o'er the tumult Of our life's wild, restless sea,\nDay by day His sweet voice soundeth, Saying, 'Christian, follow Me.'",
      "As of old Saint Andrew heard it By the Galilean lake,\nTurned from home and toil and kindred, Leaving all for His dear sake.",
      "Jesus calls us from the worship Of the vain world's golden store,\nFrom each idol that would keep us, Saying, 'Christian, love Me more.'"
    ]
  },
  {
    id: 573,
    number: 573,
    title: "Jesus, High in Glory",
    category: "Children",
    author: "Harriet B. McKeever",
    tune: "ST. OSWALD",
    verses: [
      "Jesus, high in glory, Lend a listening ear;\nWhen we bow before Thee, Children's praises hear.",
      "Though Thou art so holy, Heaven's almighty King,\nThou wilt stoop to listen When Thy children sing.",
      "Save us, Lord, from sinning; Watch us day by day;\nHelp us now to love Thee; Take our sins away."
    ]
  },
  {
    id: 574,
    number: 574,
    title: "Jesus, I My Cross Have Taken",
    category: "Worship",
    author: "Henry F. Lyte",
    tune: "HYFRYDOL",
    verses: [
      "Jesus, I my cross have taken, All to leave and follow Thee;\nDestitute, despised, forsaken, Thou from hence my All shalt be.",
      "Perish every fond ambition, All I've sought, or hoped, or known;\nYet how rich is my condition! God and heaven are still my own.",
      "Let the world despise and leave me, They have left my Saviour too;\nHuman hearts and looks deceive me; Thou art not, like man, untrue."
    ]
  },
  {
    id: 575,
    number: 575,
    title: "Jesus, Lord of Life and Glory",
    category: "Worship",
    author: "J. J. Cummins",
    tune: "ST. RAPHAEL",
    verses: [
      "Jesus, Lord of life and glory, Bend from heaven Thy gracious ear;\nWhile our waiting souls adore Thee, Friend of helpless sinners, hear.",
      "By Thy mercy, oh, deliver us, Good Lord!",
      "From the depth of nature's blindness, From the hardening power of sin,\nFrom all malice and unkindness, From the pride that lurks within."
    ]
  },
  {
    id: 576,
    number: 576,
    title: "Jesus, Meek and Gentle",
    category: "Children",
    author: "G. R. Prynne",
    tune: "ST. CONSTANTINE",
    verses: [
      "Jesus, meek and gentle, Son of God most high,\nPitying, loving Saviour, Hear Thy children's cry.",
      "Pardon our offences, Loose our captive chains,\nBreak down every idol Which our soul detains.",
      "Give us holy freedom, Fill our hearts with love;\nDraw us, Holy Jesus, To the realms above."
    ]
  },
  {
    id: 577,
    number: 577,
    title: "Jesus, My Saviour, Look on Me",
    category: "Comfort",
    author: "Charlotte Elliott",
    tune: "HANFORD",
    verses: [
      "Jesus, my Saviour, look on me, For I am weary and oppressed;\nI come to cast my soul on Thee; Thou art my Rest.",
      "Look down on me, for I am weak; I feel the toilsome journey's length;\nThine aid omnipotent I seek; Thou art my Strength.",
      "I am bewildered on my way; Dark and tempestuous is the night;\nOh, shed Thou forth some guiding ray; Thou art my Light."
    ]
  },
  {
    id: 578,
    number: 578,
    title: "Jesus, Master, Whose I Am",
    category: "Worship",
    author: "F. R. Havergal",
    tune: "ST. BEES",
    verses: [
      "Jesus, Master, whose I am, Purchased Thine and Thine alone,\nBy Thy blood, O spotless Lamb, All my spirit's powers I own.",
      "Jesus, Master, whom I serve, Keep me faithful, keep me true;\nNever let me from Thee swerve, In whate'er I think or do.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 579,
    number: 579,
    title: "Jesus, My Lord, My God, My All",
    category: "Worship",
    author: "Henry Collins",
    tune: "ST. CHRYSOSTOM",
    verses: [
      "Jesus, my Lord, my God, my all, Hear me, blest Saviour, when I call;\nHear me, and from Thy dwelling-place Pour down the riches of Thy grace.",
      "Jesus, too late I Thee have sought, How can I love Thee as I ought?\nAnd how extol Thy matchless fame, The glorious beauty of Thy Name?",
      "Jesus, what didst Thou find in me, That Thou hast dealt so lovingly?\nHow great the joy that Thou hast brought, So far beyond my highest thought!"
    ]
  },
  {
    id: 580,
    number: 580,
    title: "Jesus, My Strength, My Hope",
    category: "Worship",
    author: "Charles Wesley",
    tune: "ST. GEORGE",
    verses: [
      "Jesus, my Strength, my Hope, On Thee I cast my care;\nWith humble confidence look up, And know Thou hear'st my prayer.",
      "Give me on Thee to wait, Till I can all things do;\nOn Thee, almighty to create, Almighty to renew.",
      "I want a sober mind, A self-renouncing will,\nThat tramples down and casts behind The baits of pleasing ill."
    ]
  },
  {
    id: 581,
    number: 581,
    title: "Jesus, Name of Wondrous Love",
    category: "Worship",
    author: "W. Walsham How",
    tune: "ST. BEES",
    verses: [
      "Jesus, Name of wondrous love! Name all other names above!\nUnto which must every knee Bow in deep humility.",
      "Jesus, Name decreed of old; To the maiden mother told,\nKneeling in her lowly cell, By the angel Gabriel.",
      "Jesus, Name of priceless worth To the fallen sons of earth,\nFor the promise that it gave, 'Jesus shall His people save.'"
    ]
  },
  {
    id: 582,
    number: 582,
    title: "Jesus, Our Best Beloved Friend",
    category: "Worship",
    author: "James Montgomery",
    tune: "ST. STEPHEN",
    verses: [
      "Jesus, our best beloved Friend, Draw out our souls in pure desire;\nJesus, in love to us descend, Baptize us with Thy Spirit's fire.",
      "On Thy redeeming Name we call, Poor sinners, but Thy ransomed own;\nAnd at Thy feet we humbly fall, Oh, hear us from Thy lofty throne.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 583,
    number: 583,
    title: "Jesus, Our Hope, Our Heart's Desire",
    category: "Worship",
    author: "Latin, 4th Century",
    tune: "METZLER'S REDHEAD",
    verses: [
      "Jesus, our Hope, our heart's Desire, Redemption's only Spring!\nCreator of the world art Thou, Its Saviour and its King.",
      "How vast the mercy and the love Which laid our sins on Thee,\nAnd led Thee to a cruel death, To set Thy people free!",
      "But now the bonds of death are burst, The ransom has been paid;\nAnd Thou art on Thy Father's throne, In glorious robes arrayed."
    ]
  },
  {
    id: 584,
    number: 584,
    title: "Jesus, Saviour, Pilot Me",
    category: "Comfort",
    author: "Edward Hopper",
    tune: "PILOT",
    verses: [
      "Jesus, Saviour, pilot me Over life's tempestuous sea;\nUnknown waves before me roll, Hiding rock and treacherous shoal.",
      "Chart and compass come from Thee; Jesus, Saviour, pilot me.",
      "As a mother stills her child, Thou canst hush the ocean wild;\nBoisterous waves obey Thy will When Thou say'st to them, 'Be still.'"
    ]
  },
  {
    id: 585,
    number: 585,
    title: "Jesus, Stand Among Us",
    category: "Worship",
    author: "William Pennefather",
    tune: "CASWALL",
    verses: [
      "Jesus, stand among us In Thy risen power;\nLet this time of worship Be a hallowed hour.",
      "Breathe Thy Holy Spirit Into every heart;\nBid the fears and sorrows From each soul depart.",
      "Thus let sin and darkness From our presence flee,\nWhile we wait in silence, Looking up to Thee."
    ]
  },
  {
    id: 586,
    number: 586,
    title: "Jesus, Still Lead On",
    category: "Worship",
    author: "Nicolaus von Zinzendorf",
    tune: "ST. HUBERT",
    verses: [
      "Jesus, still lead on, Till our rest be won;\nAnd, although the way be cheerless, We will follow, calm and fearless.",
      "Guide us by Thy hand To our fatherland.",
      "If the way be drear, If the foe be near,\nLet not faithless fears o'ertake us, Let not faith and hope forsake us."
    ]
  },
  {
    id: 587,
    number: 587,
    title: "Jesus, the Name High Over All",
    category: "Worship",
    author: "Charles Wesley",
    tune: "LYDIA",
    verses: [
      "Jesus, the Name high over all, In hell, or earth, or sky;\nAngels and men before it fall, And devils fear and fly.",
      "Jesus, the Name to sinners dear, The Name to sinners given;\nIt scatters all their guilty fear, It turns their hell to heaven.",
      "Jesus the prisoner's fetters breaks, And bruises Satan's head;\nPower into strengthless souls He speaks, And life into the dead."
    ]
  },
  {
    id: 588,
    number: 588,
    title: "Jesus, the Shepherd of the Sheep",
    category: "Worship",
    author: "Thomas Kelly",
    tune: "ST. FLAVIAN",
    verses: [
      "Jesus, the Shepherd of the sheep, Thy little flock in safety keep,\nThe flock for which Thou cam'st from heaven, The flock for which Thy life was given.",
      "Oh, guard them in the narrow way, And keep them, lest they go astray;\nCherish the young, sustain the old, Let none be feeble in Thy fold.",
      "Secure them from the roaring lion, And lead them to the heavenly Sion;\nBid eat the bread of life, and give The living stream, that they may live."
    ]
  },
  {
    id: 589,
    number: 589,
    title: "Jesus, Thou Joy of Loving Hearts",
    category: "Communion",
    author: "Bernard of Clairvaux",
    tune: "MARYTON",
    verses: [
      "Jesus, Thou Joy of loving hearts, Thou Fount of life, Thou Light of men,\nFrom the best bliss that earth imparts We turn unfilled to Thee again.",
      "Thy truth unchanged hath ever stood; Thou savest those that on Thee call;\nTo them that seek Thee Thou art good, To them that find Thee, All in all.",
      "We taste Thee, O Thou living Bread, And long to feast upon Thee still;\nWe drink of Thee, the Fountain-head, And thirst our souls from Thee to fill."
    ]
  },
  {
    id: 590,
    number: 590,
    title: "Jesus, Thy Blood and Righteousness",
    category: "Worship",
    author: "Nicolaus von Zinzendorf",
    tune: "GERMANY",
    verses: [
      "Jesus, Thy blood and righteousness My beauty are, my glorious dress;\nMidst flaming worlds, in these arrayed, With joy shall I lift up my head.",
      "Bold shall I stand in Thy great day; For who aught to my charge shall lay?\nFully absolved through these I am, From sin and fear, from guilt and shame.",
      "Lord, I believe Thy precious blood, Which, at the mercy-seat of God,\nFor ever doth for sinners plead, For me, e'en for my soul, was shed."
    ]
  },
  {
    id: 591,
    number: 591,
    title: "Jesus, Thy Boundless Love to Me",
    category: "Worship",
    author: "Paul Gerhardt",
    tune: "ST. CATHERINE",
    verses: [
      "Jesus, Thy boundless love to me No thought can reach, no tongue declare;\nOh, knit my thankful heart to Thee, And reign without a rival there.",
      "Thine wholly, Thine alone, I am; Be Thou alone my constant flame.",
      "Oh, grant that nothing in my soul May dwell, but Thy pure love alone;\nOh, may Thy love possess me whole, My joy, my treasure, and my crown."
    ]
  },
  {
    id: 592,
    number: 592,
    title: "Jesus, Where'er Thy People Meet",
    category: "Worship",
    author: "William Cowper",
    tune: "WAREHAM",
    verses: [
      "Jesus, where'er Thy people meet, There they behold Thy mercy-seat;\nWhere'er they seek Thee, Thou art found, And every place is hallowed ground.",
      "For Thou, within no walls confined, Inhabitest the humble mind;\nSuch ever bring Thee where they come, And going, take Thee to their home.",
      "Dear Shepherd of Thy chosen few, Thy former mercies here renew;\nHere to our waiting hearts proclaim The sweetness of Thy saving Name."
    ]
  },
  {
    id: 593,
    number: 593,
    title: "Joy to the World! the Lord Is Come",
    category: "Christmas",
    author: "Isaac Watts",
    tune: "ANTIOCH",
    verses: [
      "Joy to the world! the Lord is come; Let earth receive her King;\nLet every heart prepare Him room, And heaven and nature sing.",
      "Joy to the earth! the Saviour reigns; Let men their songs employ;\nWhile fields and floods, rocks, hills, and plains Repeat the sounding joy.",
      "No more let sins and sorrows grow, Nor thorns infest the ground;\nHe comes to make His blessings flow Far as the curse is found."
    ]
  },
  {
    id: 594,
    number: 594,
    title: "Jesus, Thy Name I Love",
    category: "Worship",
    author: "J. G. Deck",
    tune: "LYTE",
    verses: [
      "Jesus, Thy Name I love, All other names above, Jesus, my Lord!\nOh, Thou art all to me! Nothing to earth I see, Nothing apart from Thee, Jesus, my Lord!",
      "Thou, blessed Son of God, Hast bought me with Thy blood, Jesus, my Lord!\nOh, how great is Thy love, All other loves above, Love that I daily prove, Jesus, my Lord!",
      "When unto Thee I flee, Thou wilt my refuge be, Jesus, my Lord!\nWhat can I fear from man, Since Thou hast laid the plan, Since Thou hast led the van, Jesus, my Lord!"
    ]
  },
  {
    id: 595,
    number: 595,
    title: "Just as I Am, Thine Own to Be",
    category: "Worship",
    author: "Marianne Hearn",
    tune: "JUST AS I AM",
    verses: [
      "Just as I am, Thine own to be, Friend of the young, who lovest me,\nTo consecrate myself to Thee, O Saviour dear, I come.",
      "In the glad morning of my day, My life to give, my vows to pay,\nWith no reserve and no delay, With all my heart I come.",
      "I would live ever in the light, I would work ever for the right,\nI would serve Thee with all my might; Therefore, to Thee I come."
    ]
  },
  {
    id: 596,
    number: 596,
    title: "Lamp of Our Feet, Whereby We Trace",
    category: "Worship",
    author: "Bernard Barton",
    tune: "ST. STEPHEN",
    verses: [
      "Lamp of our feet, whereby we trace Our path when wont to stray;\nStream from the fount of heavenly grace, Brook by the traveller's way.",
      "Bread of our souls, whereon we feed, True manna from on high;\nOur guide and chart, wherein we read Of realms beyond the sky.",
      "Pillar of fire, through watches dark, Or radiant cloud by day;\nWhen waves would whelm our tossing bark, Our anchor and our stay."
    ]
  },
  {
    id: 597,
    number: 597,
    title: "King of Saints, to Whom the Number",
    category: "Worship",
    author: "John Ellerton",
    tune: "ST. OSWALD",
    verses: [
      "King of saints, to whom the number Of Thy starry host is known,\nMany a mind, o'erwhelmed with slumber, Bends at last before Thy throne.",
      "Thou, in Thy great love, hast sought us, When we wandered far from Thee;\nThou, with Thy own blood, hast bought us, From the bonds of sin to free.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 598,
    number: 598,
    title: "Lead Us, O Father, in the Paths of Peace",
    category: "Worship",
    author: "W. H. Burleigh",
    tune: "LANGRAN",
    verses: [
      "Lead us, O Father, in the paths of peace; Without Thy guiding hand we go astray,\nAnd doubts appal, and sorrows still increase; Lead us through Christ, the true and living Way.",
      "Lead us, O Father, in the paths of truth; Unhelped by Thee, in error's maze we soar,\nWhile passion stains the purity of youth, And age, despairing, finds no open door.",
      "Lead us, O Father, in the paths of right; Blindly we stumble when we walk alone,\nInvolved in shadows of a darksome night; Only with Thee we journey safely on."
    ]
  },
  {
    id: 599,
    number: 599,
    title: "Let All on Earth Their Voices Raise",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ST. STEPHEN",
    verses: [
      "Let all on earth their voices raise To sing the great Jehovah's praise,\nAnd bless His holy Name; His glory let the heathen know,\nHis wonders to the nations show, And all His works proclaim.",
      "He framed the globe, He built the sky, He made the shining worlds on high,\nAnd reigns complete alone; His glory fills the heavenly plains,\nWhile justice and while mercy reigns Around His awful throne.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 600,
    number: 600,
    title: "Let All Mortal Flesh Keep Silence",
    category: "Communion",
    author: "Liturgy of St. James",
    tune: "PICARDY",
    verses: [
      "Let all mortal flesh keep silence, And with fear and trembling stand;\nPonder nothing earthly-minded, For with blessing in His hand,",
      "Christ our God to earth descendeth, Our full homage to demand.",
      "King of kings, yet born of Mary, As of old on earth He stood,\nLord of lords, in human vesture, In the body and the blood."
    ]
  },
  {
    id: 601,
    number: 601,
    title: "Let Me Be with Thee Where Thou Art",
    category: "Worship",
    author: "Charlotte Elliott",
    tune: "ST. AGNES",
    verses: [
      "Let me be with Thee where Thou art, My Saviour, my eternal Rest;\nThen only will this longing heart Be fully and for ever blest.",
      "Let me be with Thee where Thou art, Thy unveiled glory to behold;\nThen only will this wandering heart Cease to be treacherous, faithless, cold.",
      "Let me be with Thee where Thou art, Where spotless saints Thy Name adore;\nThen only will this sinful heart Be evil and defiled no more."
    ]
  },
  {
    id: 602,
    number: 602,
    title: "Let Saints on Earth in Concert Sing",
    category: "Worship",
    author: "Charles Wesley",
    tune: "DUNDEE",
    verses: [
      "Let saints on earth in concert sing With those whose work is done;\nFor all the servants of our King In heaven and earth are one.",
      "One family, we dwell in Him, One Church, above, beneath;\nThough now divided by the stream, The narrow stream of death.",
      "One army of the living God, To His command we bow;\nPart of the host have crossed the flood, And part are crossing now."
    ]
  },
  {
    id: 603,
    number: 603,
    title: "Let Us with a Gladsome Mind",
    category: "Worship",
    author: "John Milton",
    tune: "MONKLAND",
    verses: [
      "Let us with a gladsome mind Praise the Lord, for He is kind;\nFor His mercies aye endure, Ever faithful, ever sure.",
      "He with all-commanding might Filled the new-made world with light;\nFor His mercies aye endure, Ever faithful, ever sure.",
      "He the golden-tressed sun Caused all day his course to run;\nFor His mercies aye endure, Ever faithful, ever sure."
    ]
  },
  {
    id: 604,
    number: 604,
    title: "Lift Up Your Heads, Ye Mighty Gates",
    category: "Advent",
    author: "Georg Weissel",
    tune: "TRURO",
    verses: [
      "Lift up your heads, ye mighty gates; Behold, the King of glory waits!\nThe King of kings is drawing near; The Saviour of the world is here.",
      "A helper just He comes to thee, His chariot is humility,\nHis kingly crown is holiness, His sceptre, pity in distress.",
      "Oh, blest the city, blest the land, That yields to His divine command;\nBlest is the mansion of the breast, Where Christ and His own Spirit rest."
    ]
  },
  {
    id: 605,
    number: 605,
    title: "Light of the Lonely Pilgrim's Heart",
    category: "Worship",
    author: "Edward Denny",
    tune: "ST. STEPHEN",
    verses: [
      "Light of the lonely pilgrim's heart, Star of the coming day!\nArise, and with Thy morning beams Chase all our griefs away.",
      "Come, blessed Lord, bid every shore And answering island sing\nThe praises of Thy royal Name, And own Thee as their King.",
      "Bid the whole earth, responsive now To the bright world above,\nBreak forth in rapturous strains of joy In memory of Thy love."
    ]
  },
  {
    id: 606,
    number: 606,
    title: "Light of Those Whose Dreary Dwelling",
    category: "Advent",
    author: "Charles Wesley",
    tune: "HYFRYDOL",
    verses: [
      "Light of those whose dreary dwelling Borders on the shades of death,\nCome, and by Thy love's revealing, Dissipate the clouds beneath.",
      "The new heaven and earth's Creator, In our deepest darkness rise,\nScattering all the night of nature, Pouring eyesight on our eyes.",
      "Still we wait for Thine appearing; Life and joy Thy beams impart,\nChasing all our fears, and cheering Every poor benighted heart."
    ]
  },
  {
    id: 607,
    number: 607,
    title: "Lo! God Is Here! Let Us Adore",
    category: "Worship",
    author: "Gerhard Tersteegen",
    tune: "GERMANY",
    verses: [
      "Lo! God is here! let us adore, And own how dreadful is this place;\nLet all within us feel His power, And silent bow before His face.",
      "Who know His power, His grace who prove, Serve Him with awe, with reverence love.",
      "Lo! God is here! Him day and night United choirs of angels sing;\nTo Him, enthroned above all height, Heaven's host their noblest praises bring."
    ]
  },
  {
    id: 608,
    number: 608,
    title: "Lo! Round the Throne, a Glorious Band",
    category: "Worship",
    author: "Mary L. Duncan",
    tune: "ST. STEPHEN",
    verses: [
      "Lo! round the throne, a glorious band, The saints in countless myriads stand,\nOf every tongue redeemed to God, Arrayed in garments washed in blood.",
      "Through tribulation great they came; They bore the cross, despised the shame;\nFrom all their labours now they rest, In God's eternal glory blest.",
      "They see their Saviour face to face, And sing the triumphs of His grace;\nHim day and night they ceaseless praise, To Him the loud hosanna raise."
    ]
  },
  {
    id: 609,
    number: 609,
    title: "Look, Ye Saints, the Sight Is Glorious",
    category: "Worship",
    author: "Thomas Kelly",
    tune: "CORONAE",
    verses: [
      "Look, ye saints, the sight is glorious; See the 'Man of Sorrows' now;\nFrom the fight returned victorious, Every knee to Him shall bow.",
      "Crown Him! crown Him! Crowns become the Victor's brow.",
      "Crown the Saviour! angels, crown Him! Rich the trophies Jesus brings;\nIn the seat of power enthrone Him, While the vault of heaven rings."
    ]
  },
  {
    id: 610,
    number: 610,
    title: "Lord, It Belongs Not to My Care",
    category: "Comfort",
    author: "Richard Baxter",
    tune: "ST. STEPHEN",
    verses: [
      "Lord, it belongs not to my care Whether I die or live;\nTo love and serve Thee is my share, And this Thy grace must give.",
      "If life be long, I will be glad, That I may long obey;\nIf short, yet why should I be sad To soar to endless day?",
      "Christ leads me through no darker rooms Than He went through before;\nHe that into God's kingdom comes Must enter by this door."
    ]
  },
  {
    id: 611,
    number: 611,
    title: "Lord, I Hear of Showers of Blessing",
    category: "Worship",
    author: "Elizabeth Codner",
    tune: "EVEN ME",
    verses: [
      "Lord, I hear of showers of blessing Thou art scattering, full and free;\nShowers, the thirsty land refreshing; Let some drops descend on me, Even me.",
      "Pass me not, O gracious Father! Sinful though my heart may be;\nThou might'st leave me, but the rather Let Thy mercy light on me, Even me.",
      "Pass me not, O tender Saviour! Let me love and cling to Thee;\nI am longing for Thy favour; When Thou comest, call for me, Even me."
    ]
  },
  {
    id: 612,
    number: 612,
    title: "Lord, I Believe; Thy Power I Own",
    category: "Worship",
    author: "J. R. Wreford",
    tune: "ST. STEPHEN",
    verses: [
      "Lord, I believe; Thy power I own, Thy Word I would obey;\nI wander comfortless and lone When from Thy truth I stray.",
      "Lord, I believe; but gloomy fears Sometimes bedim my sight;\nI look to Thee with prayers and tears, And cry for strength and light.",
      "Lord, I believe; but Thou dost know My faith is cold and weak;\nPity my frailty, and bestow The confidence I seek."
    ]
  },
  {
    id: 613,
    number: 613,
    title: "Lord, Jesus, Think on Me",
    category: "Worship",
    author: "Synesius of Cyrene",
    tune: "SOUTHWELL",
    verses: [
      "Lord, Jesus, think on me, And purge away my sin;\nFrom earthborn passions set me free, And make me pure within.",
      "Lord, Jesus, think on me, With many a care oppressed;\nLet me Thy loving servant be, And taste Thy promised rest.",
      "Lord, Jesus, think on me, Nor let me go astray;\nThrough darkness and perplexity Point Thou the heavenly way."
    ]
  },
  {
    id: 614,
    number: 614,
    title: "Lord of All Being, Throned Afar",
    category: "Worship",
    author: "O. W. Holmes",
    tune: "MARYTON",
    verses: [
      "Lord of all being, throned afar, Thy glory flames from sun and star;\nCentre and soul of every sphere, Yet to each loving heart how near!",
      "Sun of our life, Thy quickening ray Sheds on our path the glow of day;\nStar of our hope, Thy softened light Cheers the long watches of the night.",
      "Our midnight is Thy smile withdrawn; Our noontide is Thy gracious dawn;\nOur rainbow arch Thy mercy's sign; All, save the clouds of sin, are Thine."
    ]
  },
  {
    id: 615,
    number: 615,
    title: "Lord of Our Life, and God of Our Salvation",
    category: "Worship",
    author: "Philip Pusey",
    tune: "CLOISTERS",
    verses: [
      "Lord of our life, and God of our salvation, Star of our night, and Hope of every nation,\nHear and receive Thy Church's supplication, Lord God Almighty.",
      "See round Thine ark the hungry billows curling; See how Thy foes their banners are unfurling;\nLord, while their darts envenomed they are hurling, Thou canst preserve us.",
      "Lord, Thou canst help when earthly armour faileth; Lord, Thou canst save when deadly sin assaileth;\nLord, o'er Thy Church nor death nor hell prevaileth; Grant us Thy peace, Lord."
    ]
  },
  {
    id: 616,
    number: 616,
    title: "Lord of My Life, Whose Tender Care",
    category: "Worship",
    author: "Anonymous",
    tune: "ST. STEPHEN",
    verses: [
      "Lord of my life, whose tender care Hath led me on till now,\nHere lowly at the hour of prayer Before Thy throne I bow.",
      "I bless Thy gracious hand, and pray Forgiveness for the past;\nAnd send me on my future way More faithful than the last.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 617,
    number: 617,
    title: "Lord, Pour Thy Spirit from on High",
    category: "Worship",
    author: "James Montgomery",
    tune: "LUDWIGSBURG",
    verses: [
      "Lord, pour Thy Spirit from on high, And Thine ordained servants bless;\nGraces and gifts to each supply, And clothe Thy priests with righteousness.",
      "Within Thy temple when they stand, To teach the truth as taught by Thee,\nSaviour, like stars in Thy right hand Let all Thy Church's pastors be.",
      "Wisdom and zeal and faith impart, Firmness and meekness from above,\nTo bear Thy people on their heart, And love the souls whom Thou dost love."
    ]
  },
  {
    id: 618,
    number: 618,
    title: "Lord, Thy Glory Fills the Heaven",
    category: "Worship",
    author: "Richard Mant",
    tune: "ST. OSWALD",
    verses: [
      "Lord, Thy glory fills the heaven; Earth is with its fullness stored;\nUnto Thee be glory given, Holy, holy, holy Lord!",
      "Heaven is still with anthems ringing; Earth takes up the angels' cry,\n'Holy, holy, holy,' singing, 'Lord of hosts, the Lord most high.'",
      "Ever thus in God's high praises, Brethren, let our tongues unite;\nWhile our thoughts His greatness raises, And our love feeds on His light."
    ]
  },
  {
    id: 619,
    number: 619,
    title: "Lord, Who at Cana's Wedding Feast",
    category: "Marriage",
    author: "Adelaide Thrupp",
    tune: "ST. STEPHEN",
    verses: [
      "Lord, who at Cana's wedding feast Didst as a guest appear,\nThou dearer far than earthly guest, Vouchsafe Thy presence here.",
      "For holy Thou indeed dost prove The marriage vow to be,\nProclaiming it a type of love Between the Church and Thee.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 620,
    number: 620,
    title: "Lord, When We Bend Before Thy Throne",
    category: "Worship",
    author: "J. D. Carlyle",
    tune: "ST. STEPHEN",
    verses: [
      "Lord, when we bend before Thy throne, And our confessions pour,\nTeach us to feel the sins we own, And hate what we deplore.",
      "Our broken spirits pitying see; True penitence impart;\nThen let a kindling glance from Thee Beam hope upon the heart.",
      "When we disclose our wants in prayer, May we our wills resign,\nAnd not a thought our bosom share Which is not wholly Thine."
    ]
  },
  {
    id: 621,
    number: 621,
    title: "Love of Jesus, All Divine",
    category: "Worship",
    author: "F. J. Crosby",
    tune: "ST. BEES",
    verses: [
      "Love of Jesus, all divine, Fill this longing heart of mine;\nCeaseless struggling after rest, Hopeless, weary, and oppressed.",
      "Thou canst save me, Thou alone, All my sin and guilt atone;\nLove of Jesus, all divine, Fill this longing heart of mine.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 622,
    number: 622,
    title: "Loving Shepherd of Thy Sheep",
    category: "Children",
    author: "Jane E. Leeson",
    tune: "BUCKLAND",
    verses: [
      "Loving Shepherd of Thy sheep, Keep Thy lamb, in safety keep;\nNothing can Thy power withstand, None can pluck me from Thy hand.",
      "I would bless Thee every day, Gladly all Thy will obey,\nLike Thy blessed ones above, Happy in Thy precious love.",
      "Loving Shepherd, ever near, Teach Thy lamb Thy voice to hear;\nSuffer not my steps to stray From the strait and narrow way."
    ]
  },
  {
    id: 623,
    number: 623,
    title: "Maker of All Things, God Most High",
    category: "Worship",
    author: "Ambrose of Milan",
    tune: "ST. FLAVIAN",
    verses: [
      "Maker of all things, God most high, Great Ruler of the starry sky,\nWho, robing day in beauteous light, Hast given us sleep in quiet night.",
      "That sleep may our tired limbs restore, And fit for toil and use once more;\nMay gently soothe the careworn breast, And lull our anxious griefs to rest.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 624,
    number: 624,
    title: "Master, Speak! Thy Servant Heareth",
    category: "Worship",
    author: "F. R. Havergal",
    tune: "OTTAWA",
    verses: [
      "Master, speak! Thy servant heareth, Waiting for Thy gracious word,\nLonging for Thy voice that cheereth; Master, let it now be heard.",
      "I am listening, Lord, for Thee; What hast Thou to say to me?",
      "Speak to me by name, O Master, Let me know it is Thy voice;\nAnd less swift or even faster, Let my heart in Thee rejoice."
    ]
  },
  {
    id: 625,
    number: 625,
    title: "May the Grace of Christ Our Saviour",
    category: "Worship",
    author: "John Newton",
    tune: "WALTHAM",
    verses: [
      "May the grace of Christ our Saviour, And the Father's boundless love,\nWith the Holy Spirit's favour, Rest upon us from above.",
      "Thus may we abide in union With each other and the Lord,\nAnd possess, in sweet communion, Joys which earth cannot afford.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 626,
    number: 626,
    title: "My God, Accept My Heart This Day",
    category: "Worship",
    author: "Matthew Bridges",
    tune: "ST. STEPHEN",
    verses: [
      "My God, accept my heart this day, And make it always Thine,\nThat I from Thee no more may stray, No more from Thee decline.",
      "Before the cross of Him who died, Behold, I prostrate fall;\nLet every sin be crucified, And Christ be All in all.",
      "Anoint me with Thy heavenly grace, And seal me for Thine own,\nThat I may see Thy glorious face, And worship at Thy throne."
    ]
  },
  {
    id: 627,
    number: 627,
    title: "My God, My Father, Blissful Name",
    category: "Worship",
    author: "Anne Steele",
    tune: "ST. STEPHEN",
    verses: [
      "My God, my Father, blissful Name! Oh, may I call Thee mine?\nMay I with sweet assurance claim A portion so divine?",
      "This only can my fears control, And bid my sorrows fly;\nWhat harm can ever reach my soul Beneath my Father's eye?",
      "Whate'er Thy providence denies I calmly would resign,\nFor Thou art good and just and wise; Oh, bend my will to Thine."
    ]
  },
  {
    id: 628,
    number: 628,
    title: "My God, Is Any Hour So Sweet",
    category: "Worship",
    author: "Charlotte Elliott",
    tune: "ALMSGIVING",
    verses: [
      "My God, is any hour so sweet, From blush of morn to evening star,\nAs that which calls me to Thy feet, The hour of prayer?",
      "Blest is that tranquil hour of morn, And blest that hour of solemn eve,\nWhen, on the wings of prayer upborne, The world I leave.",
      "Then is my strength by Thee renewed; Then are my sins by Thee forgiven;\nThen dost Thou cheer my solitude With hopes of heaven."
    ]
  },
  {
    id: 629,
    number: 629,
    title: "My God, I Love Thee; Not Because",
    category: "Worship",
    author: "Francis Xavier",
    tune: "ST. FRANCIS",
    verses: [
      "My God, I love Thee; not because I hope for heaven thereby,\nNor yet because who love Thee not Are lost eternally.",
      "Thou, O my Jesus, Thou didst me Upon the cross embrace;\nFor me didst bear the nails, and spear, And manifold disgrace.",
      "And griefs and torments numberless, And sweat of agony;\nYea, death itself; and all for me Who was Thine enemy."
    ]
  },
  {
    id: 630,
    number: 630,
    title: "My God, I Thank Thee, Who Hast Made",
    category: "Worship",
    author: "Adelaide A. Procter",
    tune: "WENTWORTH",
    verses: [
      "My God, I thank Thee, who hast made The earth so bright,\nSo full of splendour and of joy, Beauty and light;",
      "So many glorious things are here, Noble and right.",
      "I thank Thee, too, that Thou hast made Joy to abound;\nSo many gentle thoughts and deeds Circling us round."
    ]
  },
  {
    id: 631,
    number: 631,
    title: "My God, My Father, While I Stray",
    category: "Comfort",
    author: "Charlotte Elliott",
    tune: "HANFORD",
    verses: [
      "My God, my Father, while I stray Far from my home on life's rough way,\nOh, teach me from my heart to say, 'Thy will be done.'",
      "Though dark my path, and sad my lot, Let me be still and murmur not,\nOr breathe the prayer divinely taught, 'Thy will be done.'",
      "If Thou shouldst call me to resign What most I prize, it ne'er was mine;\nI only yield Thee what is Thine; 'Thy will be done.'"
    ]
  },
  {
    id: 632,
    number: 632,
    title: "My Heart Is Resting, O My God",
    category: "Comfort",
    author: "Anna L. Waring",
    tune: "ST. STEPHEN",
    verses: [
      "My heart is resting, O my God; I will give thanks and sing;\nMy heart is at the secret source Of every precious thing.",
      "Now the frail vessel Thou hast made No hand but Thine shall fill;\nFor the waters of the earth have failed, And I am thirsty still.",
      "I thirst for springs of heavenly life, And here all day they rise;\nI seek the treasure of Thy love, And close at hand it lies."
    ]
  },
  {
    id: 633,
    number: 633,
    title: "My Spirit Longs for Thee",
    category: "Worship",
    author: "John Byrom",
    tune: "QUAM DILECTA",
    verses: [
      "My spirit longs for Thee Within my troubled breast,\nUnworthy though I be Of so divine a Guest.",
      "Of so divine a Guest Unworthy though I be,\nYet has my heart no rest Unless it come from Thee.",
      "Unless it come from Thee, In vain I look around;\nIn all that I can see No rest is to be found."
    ]
  },
  {
    id: 634,
    number: 634,
    title: "My Jesus, as Thou Wilt!",
    category: "Comfort",
    author: "Benjamin Schmolck",
    tune: "JEWETT",
    verses: [
      "My Jesus, as Thou wilt! Oh, may Thy will be mine!\nInto Thy hand of love I would my all resign.",
      "Through sorrow, or through joy, Conduct me as Thine own,\nAnd help me still to say, 'My Lord, Thy will be done!'",
      "My Jesus, as Thou wilt! If needy here and poor,\nGive me Thy people's bread, Their portion rich and sure."
    ]
  },
  {
    id: 635,
    number: 635,
    title: "My Lord, My Love, Was Crucified",
    category: "Passion",
    author: "John Mason",
    tune: "ST. STEPHEN",
    verses: [
      "My Lord, my Love, was crucified, He all the pains did bear;\nBut in the sweetness of His rest He makes His people share.",
      "A day of rest and peace is this, A day of joy and light;\nA day of holy happiness, A day of pure delight.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 636,
    number: 636,
    title: "My Soul, Repeat His Praise",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ST. MICHAEL",
    verses: [
      "My soul, repeat His praise Whose mercies are so great,\nWhose anger is so slow to rise, So ready to abate.",
      "High as the heavens are raised Above the ground we tread,\nSo far the riches of His grace Our highest thoughts exceed.",
      "His power subdues our sins, And His forgiving love,\nFar as the east is from the west, Doth all our guilt remove."
    ]
  },
  {
    id: 637,
    number: 637,
    title: "My Soul, There Is a Country",
    category: "Worship",
    author: "Henry Vaughan",
    tune: "ST. STEPHEN",
    verses: [
      "My soul, there is a country Far beyond the stars,\nWhere stands a winged sentry All skilful in the wars.",
      "There, above noise and danger, Sweet Peace sits crowned with smiles,\nAnd One born in a manger Commands the beauteous files.",
      "He is thy gracious Friend, And—O my soul, awake!—\nDid in pure love descend To die here for thy sake."
    ]
  },
  {
    id: 638,
    number: 638,
    title: "Nature with Open Volume Stands",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ST. STEPHEN",
    verses: [
      "Nature with open volume stands To spread her Maker's praise abroad,\nAnd every labour of His hands Shows something worthy of a God.",
      "But in the grace that rescued man His brightest form of glory shines;\nHere, on the cross, 'tis fairest drawn In precious blood and crimson lines.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 639,
    number: 639,
    title: "Night's Shadows Falling",
    category: "Evening",
    author: "Arthur Russell",
    tune: "ST. STEPHEN",
    verses: [
      "Night's shadows falling, Men to rest are calling;\nRest we, then, in Jesus, Who from sin releases.",
      "Light of the world, descend, And be our constant Friend;\nThrough the dark night of life, Guide us through all the strife.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 640,
    number: 640,
    title: "Not All the Blood of Beasts",
    category: "Passion",
    author: "Isaac Watts",
    tune: "ST. MICHAEL",
    verses: [
      "Not all the blood of beasts On Jewish altars slain\nCould give the guilty conscience peace, Or wash away the stain.",
      "But Christ, the heavenly Lamb, Takes all our sins away;\nA sacrifice of nobler name And richer blood than they.",
      "My faith would lay her hand On that dear head of Thine,\nWhile like a penitent I stand, And there confess my sin."
    ]
  },
  {
    id: 641,
    number: 641,
    title: "Not for Our Sins Alone",
    category: "Worship",
    author: "Henry Twells",
    tune: "ST. STEPHEN",
    verses: [
      "Not for our sins alone Thy mercy, Lord, we sue;\nLet falling tears atone For all the ills we do.",
      "But for the pride of heart That would not bow to Thee,\nAnd for the stubborn part That would not bend the knee.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 642,
    number: 642,
    title: "Now All the Heavenly Splendour",
    category: "Worship",
    author: "Latin, 10th Century",
    tune: "ST. STEPHEN",
    verses: [
      "Now all the heavenly splendour Is shining on our way,\nAnd we our thanks would render For this new-born day.",
      "The sun in all his glory Is rising in the sky,\nAnd tells the wondrous story Of God the Lord most high.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 643,
    number: 643,
    title: "Now from the Altar of Our Hearts",
    category: "Evening",
    author: "John Mason",
    tune: "ST. STEPHEN",
    verses: [
      "Now from the altar of our hearts Let incense-flames arise;\nAssist us, Lord, to offer up Our evening sacrifice.",
      "Minutes and mercies multiplied Have made up all this day;\nMinutes were visited with misfortunes, And mercies flew away.",
      "New time, new favour, and new joys Do a new song require;\nTill we shall praise Thee as we would, Accept our heart's desire."
    ]
  },
  {
    id: 644,
    number: 644,
    title: "Now God Be with Us, for the Night Is Closing",
    category: "Evening",
    author: "Petrus Herbert",
    tune: "NIGHT WATCH",
    verses: [
      "Now God be with us, for the night is closing;\nThe light and darkness are of His disposing,\nAnd 'neath His shadow here to rest we yield us, For He will shield us.",
      "Let evil thoughts and spirits flee before us;\nTill morning cometh, watch, O Father, o'er us;\nIn soul and body Thou from harm defend us, Thine angels send us.",
      "Let pious thoughts be ours when sleep o'ertakes us;\nOur earliest thoughts be Thine when morning wakes us."
    ]
  },
  {
    id: 645,
    number: 645,
    title: "Now Is the Healing Time Decreed",
    category: "Lent",
    author: "Latin, 6th Century",
    tune: "ST. FLAVIAN",
    verses: [
      "Now is the healing time decreed For sins of heart and word and deed,\nWhen we in prayer and fast and tear May seek the Lord with holy fear.",
      "The world's Redeemer, who didst bear The cross for us, Thy children spare;\nAnd grant that we, through holy fast, May reach the heavenly home at last.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 646,
    number: 646,
    title: "Now Let Us Join with Hearts and Tongues",
    category: "Worship",
    author: "John Newton",
    tune: "ST. STEPHEN",
    verses: [
      "Now let us join with hearts and tongues To emulate the angels' songs;\nYea, sinners may address their King In songs that angels cannot sing.",
      "They praise the Lamb who once was slain; But we can add a higher strain;\nNot only say, 'He suffered thus,' But that 'He suffered all for us.'",
      "Jesus, who passed the angels by, Assumed our flesh to bleed and die;\nAnd still He makes it His abode; As man He fills the throne of God."
    ]
  },
  {
    id: 647,
    number: 647,
    title: "Now My Tongue the Mystery Telling",
    category: "Communion",
    author: "Thomas Aquinas",
    tune: "PANGE LINGUA",
    verses: [
      "Now, my tongue, the mystery telling Of the glorious Body sing,\nAnd the Blood, all price excelling, Which the Gentiles' Lord and King,",
      "In a virgin's womb once dwelling, Shed for this world's ransoming.",
      "Given for us, and condescending To be born for us below,\nHe, with men in converse blending, Dwelt the seed of truth to sow."
    ]
  },
  {
    id: 648,
    number: 648,
    title: "Now the Day Is Over",
    category: "Evening",
    author: "S. Baring-Gould",
    tune: "EUDOXIA",
    verses: [
      "Now the day is over, Night is drawing nigh;\nShadows of the evening Steal across the sky.",
      "Now the darkness gathers, Stars begin to peep,\nBirds and beasts and flowers Soon will be asleep.",
      "Jesus, give the weary Calm and sweet repose;\nWith Thy tenderest blessing May our eyelids close."
    ]
  },
  {
    id: 649,
    number: 649,
    title: "Now the Labourer's Task Is O'er",
    category: "Funeral",
    author: "John Ellerton",
    tune: "REQUIESCAT",
    verses: [
      "Now the labourer's task is o'er; Now the battle-day is past;\nNow upon the farther shore Lands the voyager at last.",
      "Father, in Thy gracious keeping Leave we now Thy servant sleeping.",
      "There the tears of earth are dried; There its hidden things are clear;\nThere the work of life is tried By a juster Judge than here."
    ]
  },
  {
    id: 650,
    number: 650,
    title: "O Bless the Lord, My Soul!",
    category: "Worship",
    author: "Isaac Watts",
    tune: "ST. MICHAEL",
    verses: [
      "O bless the Lord, my soul! His grace to thee proclaim;\nAnd all that is within me join To bless His holy Name.",
      "O bless the Lord, my soul! His mercies bear in mind;\nForget not all His benefits; The Lord to thee is kind.",
      "He will not always chide; He will with patience wait;\nHis wrath is ever slow to rise, And ready to abate."
    ]
  },
  {
    id: 651,
    number: 651,
    title: "O Blessed Day, When First Was Poured",
    category: "Worship",
    author: "Latin, 18th Century",
    tune: "ALFRETON",
    verses: [
      "O blessed day, when first was poured The blood of our redeeming Lord!\nO blessed day, when first He began His course of suffering for man!",
      "The scarred and bleeding victim see, Nailed to the cursed and shameful tree;\nFor us He bore the bitter pain, That we might life and glory gain.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 652,
    number: 652,
    title: "O Christ, Our Hope, Our Heart's Desire",
    category: "Worship",
    author: "Latin, 4th Century",
    tune: "METZLER'S REDHEAD",
    verses: [
      "O Christ, our Hope, our heart's Desire, Redemption's only Spring!\nCreator of the world art Thou, Its Saviour and its King.",
      "How vast the mercy and the love Which laid our sins on Thee,\nAnd led Thee to a cruel death, To set Thy people free!",
      "But now the bonds of death are burst, The ransom has been paid;\nAnd Thou art on Thy Father's throne, In glorious robes arrayed."
    ]
  },
  {
    id: 653,
    number: 653,
    title: "O Christ, Our Joy, Gone Up on High",
    category: "Worship",
    author: "Latin, 4th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O Christ, our Joy, gone up on high To fill Thy heavenly throne,\nExalted now above the sky, To make Thy glory known.",
      "All power is in Thy hands assigned, O King of kings and Lord;\nAnd Thou art ever near to find The souls that trust Thy Word.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 654,
    number: 654,
    title: "O Christ, Redeemer of Our Race",
    category: "Christmas",
    author: "Latin, 6th Century",
    tune: "ST. FLAVIAN",
    verses: [
      "O Christ, Redeemer of our race, Thou Brightness of the Father's face,\nOf Him, and with Him ever One, Ere times and worlds had yet begun.",
      "Thou that art very Light of Light, Unfailing Hope in sin's dark night,\nHear Thou the prayers Thy people pray, The wide world o'er, this holy day.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 655,
    number: 655,
    title: "O Christ, the Heaven's Eternal King",
    category: "Worship",
    author: "Latin, 5th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O Christ, the heaven's eternal King, Creator, Lord of all,\nTo Thee our grateful hearts we bring, And at Thy feet we fall.",
      "Thou, who didst once for sinners die, And rise to life again,\nArt now exalted high on sky, O'er all the earth to reign.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 656,
    number: 656,
    title: "O Christ, Who Art the Light and Day",
    category: "Evening",
    author: "Latin, 6th Century",
    tune: "ST. FLAVIAN",
    verses: [
      "O Christ, who art the Light and Day, Thou drivest night and clouds away;\nWe know Thee as the Light of Light, Illuminating holy night.",
      "All-holy Lord, we pray to Thee, Keep us this night from danger free;\nGrant us, O Lord, in Thee to rest, So be our sleep in safety blest.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 657,
    number: 657,
    title: "O Come, Loud Anthems Let Us Sing",
    category: "Worship",
    author: "Tate and Brady",
    tune: "PARK STREET",
    verses: [
      "O come, loud anthems let us sing, Loud thanks to our almighty King;\nFor we our voices high should raise When our salvation's Rock we praise.",
      "Into His presence let us haste, To thank Him for His favours past;\nTo Him address, in joyful songs, The praise that to His Name belongs.",
      "For God, the Lord, enthroned in state, Is with unrivalled glory great;\nA King, superior far to all The gods the world can idols call."
    ]
  },
  {
    id: 658,
    number: 658,
    title: "O Come, and Mourn with Me Awhile",
    category: "Passion",
    author: "F. W. Faber",
    tune: "ST. CROSS",
    verses: [
      "O come, and mourn with me awhile; O come ye to the Saviour's side;\nO come, together let us mourn; Jesus, our Lord, is crucified.",
      "Have we no tears to shed for Him, While soldiers scoff and Jews deride?\nAh! look how patiently He hangs; Jesus, our Lord, is crucified.",
      "Seven times He spake, seven words of love; And all three hours His silence cried\nFor mercy on the souls of men; Jesus, our Lord, is crucified."
    ]
  },
  {
    id: 659,
    number: 659,
    title: "O Everlasting Light",
    category: "Worship",
    author: "Horatius Bonar",
    tune: "ST. STEPHEN",
    verses: [
      "O everlasting Light, Giver of dawn and day,\nDispeller of the ancient night In which creation lay!",
      "O everlasting Health, From which all healing springs,\nOur Bliss, our Portion, and our Wealth, To Thee our spirit clings!",
      "O everlasting Truth, Truest of all that's true,\nSure Guide of erring age and youth, Lead us and make us new."
    ]
  },
  {
    id: 660,
    number: 660,
    title: "O Food That Weary Pilgrims Love",
    category: "Communion",
    author: "Latin, 17th Century",
    tune: "ST. FLAVIAN",
    verses: [
      "O Food that weary pilgrims love, O Bread of angel-hosts above,\nO Manna of the saints!",
      "The hungry soul would feed on Thee; Oh, come, and let our spirits be\nRefreshed, and all our wants supplied.",
      "O Fountain of the living tide, O Water from the Saviour's side,\nOh, come, and let our thirst be stilled."
    ]
  },
  {
    id: 661,
    number: 661,
    title: "O Father, All-Creating",
    category: "Marriage",
    author: "John Ellerton",
    tune: "AURELIA",
    verses: [
      "O Father, all-creating, Whose wisdom, love, and power\nFirst bound two lives together In Eden's primal hour,",
      "Today these Thy children Before Thy presence stand;\nOh, bless them as they enter The holy marriage land.",
      "Oh, grant them, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 662,
    number: 662,
    title: "O For a Faith That Will Not Shrink",
    category: "Worship",
    author: "W. H. Bathurst",
    tune: "ST. STEPHEN",
    verses: [
      "O for a faith that will not shrink, Though pressed by many a foe;\nThat will not tremble on the brink Of any earthly woe!",
      "That will not murmur nor complain Beneath the chastening rod,\nBut, in the hour of grief or pain, Will lean upon its God.",
      "A faith that shines more bright and clear When tempests rage without;\nThat when in danger knows no fear, In darkness feels no doubt."
    ]
  },
  {
    id: 663,
    number: 663,
    title: "O Fountain Full of Every Good",
    category: "Worship",
    author: "Latin, 12th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O Fountain full of every good, O Fount of life and light!\nWe come to Thee for heavenly food, And for Thy Spirit's might.",
      "Thou art the Source of all our joy, The Spring of all our peace;\nOh, let Thy love our hearts employ, And bid our sorrows cease.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 664,
    number: 664,
    title: "O Gift of God, All Other Gifts Above",
    category: "Worship",
    author: "Latin, 10th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O Gift of God, all other gifts above, The Spirit of our Father and our King!\nOh, come, and with Thy light and love, Our hearts to Thee in worship bring.",
      "Thou art the Source of every grace, The Giver of all good;\nOh, let us see Thy glorious face, And feed on heavenly food.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 665,
    number: 665,
    title: "O God, in whom we live and move",
    category: "Worship",
    author: "Samuel Longfellow",
    tune: "ST. FLAVIAN",
    verses: [
      "O God, in whom we live and move, Thy love is all our stay;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection live.",
      "Thy presence fills our souls with light, And makes our darkness flee;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 666,
    number: 666,
    title: "O God of Jacob, by Whose Hand",
    category: "Worship",
    author: "Philip Doddridge",
    tune: "DUNDEE",
    verses: [
      "O God of Jacob, by whose hand Thy people still are fed;\nWho through this weary pilgrimage Hast all our fathers led.",
      "Our vows, our prayers, we now present Before Thy throne of grace;\nGod of our fathers, be the God Of their succeeding race.",
      "Through each perplexing path of life Our wandering footsteps guide;\nGive us each day our daily bread, And raiment fit provide."
    ]
  },
  {
    id: 667,
    number: 667,
    title: "O God of Love, O King of Peace",
    category: "Worship",
    author: "H. W. Baker",
    tune: "ST. GREGORY",
    verses: [
      "O God of love, O King of peace, Make wars throughout the world to cease;\nThe wrath of sinful man restrain, Give peace, O God, give peace again.",
      "Remember, Lord, Thy works of old, The wonders that our fathers told;\nRemember not our sin's dark stain, Give peace, O God, give peace again.",
      "Whom shall we trust but Thee, O Lord? Where rest but on Thy faithful Word?\nNone ever called on Thee in vain, Give peace, O God, give peace again."
    ]
  },
  {
    id: 668,
    number: 668,
    title: "O God, the Strength of Those Who Hope in Thee",
    category: "Worship",
    author: "Latin, 6th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O God, the Strength of those who hope in Thee, Thy mercy and Thy grace bestow;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "Thy presence fills our souls with light, And makes our darkness flee;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 669,
    number: 669,
    title: "O God, Unseen Yet Ever Near",
    category: "Communion",
    author: "Edward Osler",
    tune: "ST. FLAVIAN",
    verses: [
      "O God, unseen yet ever near, Thy presence may we feel;\nAnd thus inspired with holy fear, Before Thine altar kneel.",
      "Here may Thy faithful people know The blessings of Thy love,\nThe streams that through the desert flow, The manna from above.",
      "We come, obedient to Thy Word, To feast on heavenly food;\nOur meat the Body of the Lord, Our drink His precious Blood."
    ]
  },
  {
    id: 670,
    number: 670,
    title: "O God, the Rock of Ages",
    category: "Worship",
    author: "Edward H. Bickersteth",
    tune: "AURELIA",
    verses: [
      "O God, the Rock of Ages, Who evermore hast been,\nWhat time the tempest rages, Our dwelling-place serene.",
      "Before Thy first creations, O Lord, the same as now,\nTo endless generations The everlasting Thou!",
      "Our years are like the shadows On sunny hills that lie,\nOr grasses in the meadows That blossom but to die."
    ]
  },
  {
    id: 671,
    number: 671,
    title: "O God, Thy Soldiers' Crown and Guard",
    category: "Worship",
    author: "Latin, 6th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O God, Thy soldiers' crown and guard, And their exceeding great reward,\nFrom all transgressions set us free, Who sing Thy servant's victory.",
      "The pleasures of the world he spurned, From all its fleeting joys he turned;\nHe knew them all to be but dross, And found his glory in the cross.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 672,
    number: 672,
    title: "O Happy Band of Pilgrims",
    category: "Worship",
    author: "John Mason Neale",
    tune: "KOCHER",
    verses: [
      "O happy band of pilgrims, If onward ye will tread\nWith Jesus as your Fellow To Jesus as your Head!",
      "O happy if ye labour As Jesus did for men;\nO happy if ye hunger As Jesus hungered then!",
      "The cross that Jesus carried He carried as your due;\nThe crown that Jesus weareth He weareth it for you."
    ]
  },
  {
    id: 673,
    number: 673,
    title: "O Happy Day, That Fixed My Choice",
    category: "Worship",
    author: "Philip Doddridge",
    tune: "HAPPY DAY",
    verses: [
      "O happy day, that fixed my choice On Thee, my Saviour and my God!\nWell may this glowing heart rejoice, And tell its raptures all abroad.",
      "O happy bond, that seals my vows To Him who merits all my love!\nLet cheerful anthems fill His house, While to that sacred shrine I move.",
      "Happy day, happy day, When Jesus washed my sins away!\nHe taught me how to watch and pray, And live rejoicing every day."
    ]
  },
  {
    id: 674,
    number: 674,
    title: "O Heavenly Jerusalem",
    category: "Worship",
    author: "Latin, 18th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O heavenly Jerusalem, Of everlasting halls,\nThrice blessed are the people Thou storest in thy walls!",
      "Thou art the golden mansion, Where saints for ever sing,\nThe seat of God's own chosen, The palace of the King.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 675,
    number: 675,
    title: "O Heavenly Word, Eternal Light",
    category: "Advent",
    author: "Latin, 5th Century",
    tune: "ST. FLAVIAN",
    verses: [
      "O heavenly Word, eternal Light, Begotten of the Father's might,\nWho in these latter days art born For succour to a world forlorn.",
      "Our hearts enlighten from above, And kindle with Thine own true love;\nThat we, who hear Thy call today, May cast earth's vanities away.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 676,
    number: 676,
    title: "O Help Us, Lord; Each Hour of Need",
    category: "Worship",
    author: "H. H. Milman",
    tune: "BEDFORD",
    verses: [
      "O help us, Lord; each hour of need Thy heavenly succour give;\nHelp us in thought, and word, and deed, Each hour on earth we live.",
      "O help us when our spirits bleed With contrite anguish sore;\nAnd when our hearts are cold and dead, O help us, Lord, the more.",
      "O help us through the prayer of faith More firmly to believe;\nFor still the more Thy servant hath, The more shall he receive."
    ]
  },
  {
    id: 677,
    number: 677,
    title: "O Holy Father, Who in Tender Love",
    category: "Worship",
    author: "Latin, 10th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O Holy Father, who in tender love Didst send Thy Son to die for us below;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection live.",
      "Thy presence fills our souls with light, And makes our darkness flee;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 678,
    number: 678,
    title: "O Holy Ghost, Thy People Bless",
    category: "Worship",
    author: "H. W. Baker",
    tune: "ST. STEPHEN",
    verses: [
      "O Holy Ghost, Thy people bless Who long to feel Thy might,\nAnd in the world's dark wilderness To walk in heavenly light.",
      "Thou art the Source of every grace, The Giver of all good;\nOh, let us see Thy glorious face, And feed on heavenly food.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 679,
    number: 679,
    title: "O Holy Spirit, Root of Life",
    category: "Worship",
    author: "Hildegard of Bingen",
    tune: "ST. STEPHEN",
    verses: [
      "O Holy Spirit, root of life, Creator, cleanser of all things,\nAnoint our wounds, awaken us With life that from Thy presence springs.",
      "Thou art the Source of every grace, The Giver of all good;\nOh, let us see Thy glorious face, And feed on heavenly food.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 680,
    number: 680,
    title: "O Jerusalem the Blissful",
    category: "Worship",
    author: "Latin, 12th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O Jerusalem the blissful, Home of gladness and of peace,\nWhere the saints of God for ever Find from every care release.",
      "Thou art the golden mansion, Where saints for ever sing,\nThe seat of God's own chosen, The palace of the King.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 681,
    number: 681,
    title: "O Jesus, Lord of Heavenly Grace",
    category: "Worship",
    author: "Ambrose of Milan",
    tune: "ALFRETON",
    verses: [
      "O Jesus, Lord of heavenly grace, Thou Brightness of Thy Father's face,\nThou Fountain of eternal light, Whose beams disperse the shades of night!",
      "Come, holy Sun of heavenly love, Shower down Thy radiance from above,\nAnd to our inward hearts convey The Holy Spirit's cloudless ray.",
      "May faith, deep rooted in the soul, Subdue our flesh, our minds control;\nMay guile depart, and discord cease, And all within be joy and peace."
    ]
  },
  {
    id: 682,
    number: 682,
    title: "O Jesus, Thou Art Standing",
    category: "Worship",
    author: "W. W. How",
    tune: "ST. CATHERINE",
    verses: [
      "O Jesus, Thou art standing Outside the fast-closed door,\nIn lowly patience waiting To pass the threshold o'er.",
      "Shame on us, Christian brethren, His Name and sign who bear!\nOh, shame, thrice shame upon us To keep Him standing there!",
      "O Jesus, Thou art knocking; And lo! that hand is scarred,\nAnd thorns Thy brow encircle, And facets all are marred."
    ]
  },
  {
    id: 683,
    number: 683,
    title: "O King of Kings, Before Whose Throne",
    category: "Worship",
    author: "John Mason Neale",
    tune: "ST. STEPHEN",
    verses: [
      "O King of kings, before whose throne The angels bow in light,\nWhose glory and whose power are known In all the worlds of might.",
      "We come to Thee with songs of praise, And hearts with joy aglow;\nOh, guide us in Thy holy ways, And all Thy mercy show.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 684,
    number: 684,
    title: "O Lamb of God, Still Keep Me",
    category: "Worship",
    author: "James George Deck",
    tune: "ST. STEPHEN",
    verses: [
      "O Lamb of God, still keep me Near to Thy wounded side;\n 'Tis only there in safety And peace I can abide.",
      "What foes and snares surround me! What lusts and fears within!\nThe grace that sought and found me Alone can keep from sin.",
      " 'Tis only in Thy presence The soul can find its rest;\nAnd in Thy love's reflection The heart is truly blest."
    ]
  },
  {
    id: 685,
    number: 685,
    title: "O Light of Life, O Saviour Dear",
    category: "Evening",
    author: "F. T. Palgrave",
    tune: "ABENDS",
    verses: [
      "O Light of life, O Saviour dear, Before we sleep bow down Thine ear;\nThrough dark and day, o'er land and sea, We have no other hope but Thee.",
      "Oft from Thy royal road we part, Lost in the mazes of the heart;\nOur lamps put out, our course forgot, We seek for God and find Him not.",
      "What sudden sunbeams cheer our sight! What dawning risen upon the night!\nThou giv'st Thyself to us, and we Find all our life and light in Thee."
    ]
  },
  {
    id: 687,
    number: 687,
    title: "O Lord and Master of Us All",
    category: "Worship",
    author: "John Greenleaf Whittier",
    tune: "ST. STEPHEN",
    verses: [
      "O Lord and Master of us all, Whate'er our name or sign,\nWe own Thy sway, we hear Thy call, We test our lives by Thine.",
      "Thou art the Way, the Truth, the Life; Oh, guide us to the goal;\nBeyond the reach of earthly strife, In peace of heart and soul.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 690,
    number: 690,
    title: "O Lord of Host, All Heaven Possessing",
    category: "Worship",
    author: "Latin, 10th Century",
    tune: "ST. STEPHEN",
    verses: [
      "O Lord of host, all heaven possessing, In majesty and power arrayed;\nWe come before Thee with our blessing, And in Thy mercy are stayed.",
      "Thy presence fills our souls with light, And makes our darkness flee;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection be.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 691,
    number: 691,
    title: "O Lord, Revive Thy Work",
    category: "Worship",
    author: "Albert Midlane",
    tune: "ST. STEPHEN",
    verses: [
      "O Lord, revive Thy work, In this our day of need;\nAnd let Thy Spirit's power descend, To bless the holy seed.",
      "Revive Thy work, O Lord, And let Thy grace be known;\nOh, let Thy light and love prevail, And all Thy glory shown.",
      "Revive Thy work, O Lord, And let Thy people see\nThe tokens of Thy presence, Lord, And find their rest in Thee."
    ]
  },
  {
    id: 692,
    number: 692,
    title: "O Lord, the Maker of All Things",
    category: "Worship",
    author: "William Mundy",
    tune: "ST. STEPHEN",
    verses: [
      "O Lord, the Maker of all things, We come before Thy throne;\nAnd with our voices praise we bring, To Thee and Thee alone.",
      "The heavens and the earth are Thine, And all that they contain;\nThy glory and Thy power divine, Forever shall remain.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 693,
    number: 693,
    title: "O Love, How Deep, How Broad, How High",
    category: "Worship",
    author: "Thomas a Kempis",
    tune: "DEO GRACIAS",
    verses: [
      "O love, how deep, how broad, how high, It fills the heart with ecstasy;\nThat God, the Son of God, should take Our mortal form for mortals' sake.",
      "For us He prayed, for us He taught, For us His daily works He wrought;\nBy words and signs and actions thus Still seeking not Himself but us.",
      "For us to wicked men betrayed, Scourged, mocked, in purple robe arrayed;\nHe bore the shameful cross and death, For us at length gave up His breath."
    ]
  },
  {
    id: 696,
    number: 696,
    title: "O Perfect Love",
    category: "Other",
    author: "Dorothy Blomfield Gurney",
    tune: "O PERFECT LOVE",
    verses: [
      "O perfect Love, all human thought transcending,\nLowly we kneel in prayer before Thy throne,\nThat theirs may be the love which knows no ending,\nWhom Thou for evermore dost join in one.",
      "O perfect Life, be Thou their full assurance\nOf tender charity and steadfast faith,\nOf patient hope and quiet, brave endurance,\nWith glad-hearted trust that triumphs over death.",
      "Grant them the joy which brightens earthly sorrow;\nGrant them the peace which calms all earthly strife,\nAnd to life's day the glorious unknown morrow\nThat leads to ever-during, boundless life."
    ]
  },
  {
    id: 698,
    number: 698,
    title: "O Sacred Head, Now Wounded",
    category: "Passion",
    author: "Bernard of Clairvaux",
    tune: "PASSION CHORALE",
    verses: [
      "O sacred Head, now wounded, With grief and shame weighed down,\nNow scornfully surrounded With thorns, Thine only crown;\nHow pale Thou art with anguish, With sore abuse and scorn!\nHow does that visage languish Which once was bright as morn!",
      "What Thou, my Lord, hast suffered Was all for sinners' gain;\nMine, mine was the transgression, But Thine the deadly pain.\nLo, here I fall, my Saviour! 'Tis I deserve Thy place;\nLook on me with Thy favour, Vouchsafe to me Thy grace.",
      "What language shall I borrow To thank Thee, dearest Friend,\nFor this Thy dying sorrow, Thy pity without end?\nOh, make me Thine forever; And should I fainting be,\nLord, let me never, never Outlive my love to Thee."
    ]
  },
  {
    id: 699,
    number: 699,
    title: "O Saviour, May We Never Rest",
    category: "Worship",
    author: "W. H. Bathurst",
    tune: "ST. STEPHEN",
    verses: [
      "O Saviour, may we never rest Till Thou art formed within;\nTill Thou hast calmed our troubled breast, And cleansed our souls from sin.",
      "May we Thy holy will obey, And in Thy footsteps tread;\nAnd find at length the homeward way, By Thy good Spirit led.",
      "Oh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give."
    ]
  },
  {
    id: 700,
    number: 700,
    title: "O Saviour, Precious Saviour",
    category: "Praise",
    author: "Frances Ridley Havergal",
    tune: "ANGEL'S STORY",
    verses: [
      "O Saviour, precious Saviour, Whom yet unseen we love,\nO Name of might and favour, All other names above!",
      "We worship Thee, we bless Thee, To Thee alone we sing;\nWe praise Thee, and confess Thee Our holy Lord and King.",
      "In Thee all fulness dwelleth, All grace and power divine;\nThe glory that excelleth, O Son of God, is Thine."
    ]
  },
  {
    id: 701,
    number: 701,
    title: "O Son of God, Our Prophet of the Skies",
    category: "Worship",
    author: "John Ellerton",
    tune: "ST. STEPHEN",
    verses: [
      "O Son of God, our Prophet of the skies, We come before Thy throne;\nAnd with our voices praise we bring, To Thee and Thee alone.",
      "Thy word is light, Thy law is love, Thy presence is our rest;\nOh, grant us, Lord, Thy light to see, And in Thy love be blest.",
      "To God the Father, God the Son, And God the Spirit, Three in One,\nBe praise and glory ever given By all on earth and all in heaven."
    ]
  },
  {
    id: 704,
    number: 704,
    title: "O Thou Before Whose Presence",
    category: "Assurance",
    author: "Samuel John Stone",
    tune: "AURELIA",
    verses: [
      "O Thou before whose presence Naught evil may come in,\nYet who dost teach Thy children To turn away from sin;\nOh, grant us, Lord, Thy presence, And help us in our strife,\nThat we may live and serve Thee Through all our earthly life.",
      "In every hour of danger, In every hour of need,\nIn every hour of sorrow, We come to Thee and plead;\nOh, grant us, Lord, Thy presence, And help us in our strife,\nThat we may live and serve Thee Through all our earthly life.",
      "To God the Father, God the Son, and Spirit,\nAll praise and glory be for ever given;\nWhose holy presence we shall all inherit,\nIn that life fair, which knows no end in heaven."
    ]
  },
  {
    id: 707,
    number: 707,
    title: "O Thou Whose All-Redeeming Love",
    category: "Worship",
    author: "Jane E. Leeson",
    tune: "ST. STEPHEN",
    verses: [
      "O Thou whose all-redeeming love We come before Thy throne;\nAnd with our voices praise we bring, To Thee and Thee alone.",
      "Thy word is light, Thy law is love, Thy presence is our rest;\nOh, grant us, Lord, Thy light to see, And in Thy love be blest.",
      "To God the Father, God the Son, and Spirit,\nAll praise and glory be for ever given;\nWhose holy presence we shall all inherit,\nIn that life fair, which knows no end in heaven."
    ]
  },
  {
    id: 708,
    number: 708,
    title: "O Throned, O Enthroned in the Glories",
    category: "Praise",
    author: "Bishop Christopher Wordsworth",
    tune: "ST. OSWALD",
    verses: [
      "O throned, O enthroned in the glories on high,\nTo Thee be all praise from the earth and the sky;\nOh, grant us, Lord, Thy light to see, And in Thy love's reflection live;\nThat we may follow only Thee, And all our heart to Thee may give.",
      "To God the Father, God the Son, and Spirit,\nAll praise and glory be for ever given;\nWhose holy presence we shall all inherit,\nIn that life fair, which knows no end in heaven."
    ]
  },
  {
    id: 719,
    number: 719,
    title: "Our God, Our Help in Ages Past",
    category: "Assurance",
    author: "Isaac Watts",
    tune: "ST. ANNE",
    verses: [
      "Our God, our help in ages past, Our hope for years to come,\nOur shelter from the stormy blast, And our eternal home.",
      "Under the shadow of Thy throne Thy saints have dwelt secure;\nSufficient is Thine arm alone, And our defence is sure.",
      "Before the hills in order stood, Or earth received her frame,\nFrom everlasting Thou art God, To endless years the same."
    ]
  },
  {
    id: 720,
    number: 720,
    title: "Our Lord Is Risen From the Dead",
    category: "Easter",
    author: "Charles Wesley",
    tune: "DUKE STREET",
    verses: [
      "Our Lord is risen from the dead; Our Jesus is gone up on high;\nThe powers of hell are captive led, Dragged to the portals of the sky.",
      "There His triumphal chariot waits, And angels chant the solemn lay;\nLift up your heads, ye heavenly gates; Ye everlasting doors, give way!",
      "Loose all your bars of massy light, And wide unfold the ethereal scene;\nHe claims these mansions as His right; Receive the King of Glory in!"
    ]
  },
  {
    id: 741,
    number: 741,
    title: "We cannot measure how you heal",
    category: "Comfort",
    author: "John L. Bell and Graham Maule",
    tune: "YE BANKS AND BRAES",
    verses: [
      "We cannot measure how you heal or answer every sufferer's prayer, but we believe your grace is near, and all our trials are yours to share. Our wounds are hurt by human anger, and broken hearts are slow to mend, yet hope lies risen in our path, and love's first steps can now begin.",
      "So, Saviour, if indeed you care to share our conflict and our pain, then let our wounds be healed by yours, and let us live for you again. We do not ask for instant ease, or miracles that make us blind, but for the strength to bear our cross, and in our weakness peace to find.",
      "And if our hearts are hard and dry, and cannot feel your healing touch, forgive our doubt and let us know that you still love us very much. So let your healing grace begin, and let your presence make us whole, till we can trust you in our dark, and find the peace that heals the soul."
    ]
  },
  {
    id: 746,
    number: 746,
    title: "We praise you, Lord, for Jesus Christ",
    category: "Praise",
    author: "Judith O'Neill",
    tune: "ST TIMOTHY",
    verses: [
      "We praise you, Lord, for Jesus Christ, your Son, our Saviour, brother, friend, in whom your love is manifest, a love that has no end.",
      "We praise you that he came to us, and lived on earth our life to share, to show your care for everyone, and all our burdens bear.",
      "We praise you that he died for us, upon the cross of Calvary, to conquer death and win for us our life and liberty.",
      "We praise you that he rose again, and lives for evermore to reign, and that his Spirit lives in us, to make us whole again."
    ]
  },
  {
    id: 749,
    number: 749,
    title: "We want to see Jesus high",
    category: "Children",
    author: "Doug Horley",
    tune: "WE WANT TO SEE JESUS LIFTED HIGH",
    chorus: "We want to see, we want to see, we want to see Jesus lifted high. We want to see, we want to see, we want to see Jesus lifted high.",
    verses: [
      "We want to see Jesus lifted high, a banner that flies across this land, that all men might see the truth and know he is the way to heaven.",
      "Step by step, we're moving forward, little by step, we're taking ground, every prayer a powerful weapon, strongholds come tumbling down and down and down."
    ]
  },
  {
    id: 753,
    number: 753,
    title: "What kind of love is this",
    category: "Passion",
    author: "Dave Bilbrough",
    tune: "WHAT KIND OF LOVE IS THIS",
    chorus: "This is amazing love, that Christ should die for me; he became sin for us, that we might be set free.",
    verses: [
      "What kind of love is this that gave itself for me? I am the guilty one, yet he has set me free.",
      "What kind of love is this that takes away my shame? He bears the heavy load, and bids me start again.",
      "What kind of love is this that conquers all my fears? He brings me to his side, and wipes away my tears."
    ]
  },
  {
    id: 754,
    number: 754,
    title: "When a knight won his spurs",
    category: "Children",
    author: "Jan Struther",
    tune: "STOWEY",
    verses: [
      "When a knight won his spurs in the stories of old, he was gentle and brave, he was gallant and bold; with a shield on his arm and a lance in his hand, for God and for king he went riding the land.",
      "No giants he feared and no paths he eschewed, where a dark castle frowned or a dragon pursued; and his armour was bright and his helmet was laced, and his sword in the scabbard was worthily placed.",
      "Let faith be my shield and let truth be my sword, I will war for the right in the name of the Lord, with no giant to fear and no pathway to dread, since the Lord is my captain and goes on ahead."
    ]
  },
  {
    id: 756,
    number: 756,
    title: "We turn to you, O God of every nation",
    category: "Other",
    author: "Fred Kaan",
    tune: "Intercessor",
    verses: [
      "We turn to you, O God of every nation, in this our day of struggle and of stress; give us the will to work for your salvation, and in our weakness grant us your success.",
      "We pray for peace, but peace is not a blessing that comes to those who only wish and wait; it is a task, a challenge for expressing your love in action, conquering our hate.",
      "Forgive us, Lord, for we have failed in sharing the riches of the earth with those in need; forgive our lack of sympathy and caring, our national and individual greed.",
      "Lord, purge our hearts from prejudice and blindness, from trust in weapons, and from fear of change; help us to build a world of human kindness, where no one is a stranger or estranged."
    ]
  },
  {
    id: 757,
    number: 757,
    title: "We want to see Jesus lifted high",
    category: "Praise",
    author: "Doug Horley",
    tune: "Doug Horley",
    chorus: "We want to see, we want to see, we want to see Jesus lifted high. We want to see, we want to see, we want to see Jesus lifted high.",
    verses: [
      "We want to see Jesus lifted high, a banner that flies across this land, that all men might see the truth and know he is the way to heaven.",
      "Step by step, we're moving forward, little by little, taking ground, every prayer a powerful weapon, strongholds come tumbling down, and down, and down, and down."
    ]
  },
  {
    id: 758,
    number: 758,
    title: "We will walk with God, my brothers",
    category: "Missionary",
    author: "Swaziland traditional, tr. John L. Bell",
    tune: "Sizohamba naye",
    verses: [
      "We will walk with God, my brothers, we will walk with God. We will walk with God, my sisters, we will walk with God.",
      "We will go in joy, my brothers, we will go in joy. We will go in joy, my sisters, we will go in joy.",
      "We will go in love, my brothers, we will go in love. We will go in love, my sisters, we will go in love."
    ]
  },
  {
    id: 762,
    number: 762,
    title: "What shall we pray for those who reign",
    category: "Other",
    author: "J. R. Peacey",
    tune: "Carlsbad",
    verses: [
      "What shall we pray for those who reign, whom God has set to guide the state, that they his purpose may maintain, and make our land both good and great?",
      "First, for the wisdom from above that seeks the truth and does the right, and governs with a patient love that rules as in their Maker's sight.",
      "Then, for a heart of sympathy to hear the cry of the oppressed, to guard the weak, set captives free, and give the weary nation rest.",
      "So may they rule in peace and grace, and we in quietness obey, till every kingdom, tribe and race shall own your everlasting sway."
    ]
  },
  {
    id: 764,
    number: 764,
    title: "When all thy mercies, O my God",
    category: "Praise",
    author: "Joseph Addison",
    tune: "Belgrave",
    verses: [
      "When all thy mercies, O my God, my rising soul surveys, transported with the view, I'm lost in wonder, love, and praise.",
      "Unnumbered comforts to my soul thy tender care bestowed, before my infant heart conceived from whom those comforts flowed.",
      "When in the slippery paths of youth with heedless steps I ran, thine arm unseen conveyed me safe, and led me up to man.",
      "When worn with sickness, oft hast thou with health renewed my face; and, when in sins and sorrows sunk, refreshed my soul with grace.",
      "Ten thousand thousand precious gifts my daily thanks employ; nor is the least a cheerful heart that tastes those gifts with joy.",
      "Through all eternity to thee a joyful song I'll raise; for, oh, eternity's too short to utter all thy praise!"
    ]
  },
  {
    id: 765,
    number: 765,
    title: "When, in our music, God is glorified",
    category: "Praise",
    author: "Fred Pratt Green",
    tune: "Engelberg",
    verses: [
      "When, in our music, God is glorified, and adoration leaves no room for pride, it is as if the whole creation cried: Alleluia!",
      "How often, making music, we have found a new dimension in the world of sound, as worship moved us to a more profound Alleluia!",
      "So has the Church, in liturgy and song, in faith and love, through centuries of wrong, borne witness to the truth in every tongue: Alleluia!",
      "And did not Jesus sing a psalm that night when utmost evil strove against the Light? Then let us sing, for whom he won the fight: Alleluia!",
      "Let every instrument be tuned for praise! Let all rejoice who have a voice to raise! And may God give us faith to sing always: Alleluia!"
    ]
  },
  {
    id: 766,
    number: 766,
    title: "When I needed a neighbour, were you there?",
    category: "Other",
    author: "Sydney Carter",
    tune: "Neighbour",
    chorus: "And the creed and the colour and the name shouldn't matter, were you there?",
    verses: [
      "When I needed a neighbour, were you there, were you there? When I needed a neighbour, were you there?",
      "I was hungry and thirsty, were you there, were you there? I was hungry and thirsty, were you there?",
      "I was cold, I was naked, were you there, were you there? I was cold, I was naked, were you there?",
      "When I needed a shelter, were you there, were you there? When I needed a shelter, were you there?",
      "When I needed a helper, were you there, were you there? When I needed a helper, were you there?",
      "Wherever you travel, I'll be there, I'll be there; wherever you travel, I'll be there."
    ]
  },
  {
    id: 769,
    number: 769,
    title: "Where is death's sting?",
    category: "Burial",
    author: "Arthur Penrhyn Stanley",
    tune: "Song 46",
    verses: [
      "Where is death's sting? We were not born to die, nor only for a fleeting earthly life, to gaze a moment on the earth and sky, then sink forgotten from the noise of strife.",
      "Where is death's sting? It is not in the grave, it is not in the parting of the breath; for he who died has shown his power to save, and by his rising has abolished death.",
      "Where is death's sting? It is in sin alone, and sin is vanquished, sin has lost its power; for Christ has triumphed from his heavenly throne, and saves his people in their darkest hour.",
      "Then let us sing the song of victory, and praise the Lord who reigns in heaven above, who gives us hope of immortality, and folds us ever in his arms of love."
    ]
  },
  {
    id: 770,
    number: 770,
    title: "Will you come and follow me",
    category: "Dedication",
    author: "John L. Bell and Graham Maule",
    tune: "KELVINGROVE",
    verses: [
      "Will you come and follow me if I but call your name? / Will you go where you don't know and never be the same? / Will you let my love be shown, will you let my name be known, / will you let my life be grown in you and you in me?",
      "Will you leave yourself behind if I but call your name? / Will you care for cruel and kind and never be the same? / Will you risk the hostile stare should your life attract or scare? / Will you let me answer prayer in you and you in me?",
      "Will you let the blinded see if I but call your name? / Will you set the prisoners free and never be the same? / Will you kiss the leper clean, and do such as this unseen, / and admit to what I mean in you and you in me?",
      "Will you love the 'you' you hide if I but call your name? / Will you quell the fear inside and never be the same? / Will you use the faith you've found to reshape the world around, / through my sight and touch and sound in you and you in me?",
      "Lord, your summons echoes true when you but call my name. / Let me turn and follow you and never be the same. / In your company I'll go where your love and footsteps show, / thus I'll move and live and grow in you and you in me."
    ]
  },
  {
    id: 771,
    number: 771,
    title: "With gladness we worship, rejoice as we sing",
    category: "Praise",
    author: "George B. Timms",
    tune: "DATCHET",
    verses: [
      "With gladness we worship, rejoice as we sing, / and bring our thanksgiving to Jesus our King; / with hearts in tune voicing our tribute of praise, / and gladly rejoicing in all of his ways.",
      "To God our Creator our voices we raise, / for all of his mercy and wonderful ways; / he made us, he keeps us, he gives us our breath, / and saves us from darkness and shadow of death.",
      "Our Savior and Brother, our Lord and our Friend, / who loves us and keeps us right up to the end; / he took our own nature, he died on the cross, / to save us from ruin and ultimate loss.",
      "To Father, and Son, and the Spirit of grace, / be glory and worship from every race; / the church of the living, both here and above, / shall praise without ceasing his infinite love."
    ]
  },
  {
    id: 773,
    number: 773,
    title: "Within our hearts be born today",
    category: "Other",
    author: "Percy Dearmer",
    tune: "ST. ALPHEGE",
    verses: [
      "Within our hearts be born today, / O Son of God, we humbly pray; / make us thy temples, pure and bright, / and fill our souls with holy light.",
      "Come, let us all our hearts prepare / to meet the Lord of glory there; / let every soul a temple be, / from sin and worldly passion free.",
      "So shall we see thee face to face, / and taste the sweetness of thy grace, / and join with all the heavenly host / to praise the Father, Son, and Ghost."
    ]
  },
  {
    id: 774,
    number: 774,
    title: "Within the Father's house",
    category: "Other",
    author: "James R. Woodford",
    tune: "FRANCONIA",
    verses: [
      "Within the Father's house / the Son hath found his home, / and to his temple suddenly / the Lord of life is come.",
      "The doctors of the law / gaze on the wondrous Child, / and marvel at his gracious words / compassionate and mild.",
      "Yet not to them is given / the mighty truth to know, / to whom he came, or who he is, / or whence those graces flow.",
      "The secret of the Lord / escapes each blinded eye, / and they who would the Savior see / must first his cross descry.",
      "Lord, visit thou our souls, / and teach us to obey; / and make us templates of thy grace, / to walk in thy right way.",
      "To Father, and to Son, / and, Holy Ghost, to thee, / be praise and glory evermore, / one God in Trinity."
    ]
  },
  {
    id: 775,
    number: 775,
    title: "Word of God, across the ages spoken",
    category: "Other",
    author: "Ferdinand Q. Blanchard",
    tune: "AUSTRIA",
    verses: [
      "Word of God, across the ages spoken, / human eyes have watched to see thy light; / by thy truth the chains of sin are broken, / shining clear through shadows of the night. / Word of God, the same today and ever, / guide our steps and keep our faith secure, / that from thee no earthly change may sever / those whose hope is in thy promise sure.",
      "Word of life, in Jesus Christ incarnate, / living Lord, who came to dwell on earth, / by thy cross and by thy resurrection / giving to our souls a second birth. / Word of life, who conquered death and sorrow, / reign within our hearts for evermore, / till there dawns the bright eternal morrow, / where the saints in light thy name adore."
    ]
  },
  {
    id: 776,
    number: 776,
    title: "Worship, honour, glory, blessing",
    category: "Praise",
    author: "Edward Osler",
    tune: "GERMAN HYMN",
    verses: [
      "Worship, honour, glory, blessing, / Lord, we offer to thy name; / young and old, thy praise expressing, / join thy goodness to proclaim. / As the saints in heaven adore thee, / we would bow before thy throne; / as the angels serve before thee, / so on earth thy will be done.",
      "As the years are passing o'er us, / still thy goodness we'll proclaim; / singing with the heavenly chorus / praises to thy holy name. / Keep us, Lord, in faith and duty, / till we see thee face to face, / in the king's transcendent beauty, / in the heaven of thy grace."
    ]
  },
  {
    id: 781,
    number: 781,
    title: "Ye that know the Lord is gracious",
    category: "Praise",
    author: "Cyril A. Alington",
    tune: "HYFRYDOL",
    verses: [
      "Ye that know the Lord is gracious, / ye who have found his love, / fold his name in hearts capacious, / sing his praise who reigns above; / ye who on his mercy leaning / find his grace a sure defense, / search his word to find its meaning, / praise his glorious providence.",
      "Thirty-fold and sixty-fold and / hundred-fold the harvest grows; / in the hearts of men enfolded / seed of truth the Sower sows; / though the weeds of sin and sorrow / choke the seed and stay its birth, / yet there dawns a glorious morrow / when his truth shall fill the earth.",
      "Keep us, Lord, by thy protection, / guide us in thy holy way, / till we reach our full perfection / in the light of perfect day; / then shall we, thy face beholding, / praise thee with the saints above, / all thy glorious plan unfolding, / in the triumph of thy love."
    ]
  },
  {
    id: 782,
    number: 782,
    title: "Ye watchmen and ye holy ones",
    category: "Praise",
    author: "Athelstan Riley",
    tune: "LASST UNS ERFREUEN",
    verses: [
      "Ye watchmen and ye holy ones, / bright seraphs, cherubim, and thrones, / raise the glad strain, Alleluia! / Cry out, dominions, princedoms, powers, / virtues, archangels, angels' choirs, / Alleluia, Alleluia, Alleluia, Alleluia, Alleluia!",
      "O higher than the cherubim, / more glorious than the seraphim, / lead their praises, Alleluia! / Thou bearer of the eternal Word, / most gracious, magnify the Lord, / Alleluia, Alleluia, Alleluia, Alleluia, Alleluia!",
      "Respond, ye souls in endless rest, / ye patriarchs and prophets blest, / Alleluia, Alleluia! / Ye holy twelve, ye martyrs strong, / all saints triumphant, raise the song, / Alleluia, Alleluia, Alleluia, Alleluia, Alleluia!",
      "O friends, in gladness let us sing, / supernal anthems echoing, / Alleluia, Alleluia! / To God the Father, God the Son, / and God the Spirit, Three in One, / Alleluia, Alleluia, Alleluia, Alleluia, Alleluia!"
    ]
  },
  {
    id: 783,
    number: 783,
    title: "Yesterday, today, for ever",
    category: "Comfort",
    author: "Albert B. Simpson",
    tune: "YESTERDAY, TODAY, FOR EVER",
    chorus: "Yesterday, today, for ever, / Jesus is the same. / All may change, but Jesus never! / Glory to his name, / glory to his name, / glory to his name; / all may change, but Jesus never! / Glory to his name.",
    verses: [
      "O how sweet the glorious message simple faith may claim: / Yesterday, today, for ever, Jesus is the same. / Still he loves to save the sinful, heal the sick and lame, / cheer the mourner, still the tempest; glory to his name!",
      "He who loved to sit with sinners, still is just the same; / he who took the little children, still is just the same; / he who wept for friends in sorrow, still is just the same; / he who died for our salvation, glory to his name!",
      "He who walked upon the water, still is just the same; / he who calmed the raging tempest, still is just the same; / he who healed the broken-hearted, still is just the same; / he who rose and lives for ever, glory to his name!",
      "He who promised his presence, still is just the same; / he who sends the Holy Spirit, still is just the same; / he who soon will come in glory, still is just the same; / Jesus Christ, our Lord and Savior, glory to his name!"
    ]
  },
  {
    id: 784,
    number: 784,
    title: "You are the King of glory",
    category: "Praise",
    author: "Mavis Ford",
    tune: "KING OF GLORY",
    chorus: "You are the King, / you are the King, / you are the King of glory, / Jesus, you are the King.",
    verses: [
      "You are the King of glory, / you are the Prince of peace, / you are the Lord of heaven and earth, / you're the Son of righteousness. / Angels bow down before you, / worship and adore, / enter in with thanksgiving, / praise you for evermore.",
      "You are the Lord that healeth, / you are the Lord our shield, / you are the Lord our righteousness, / to you we our lives do yield. / Angels bow down before you, / worship and adore, / enter in with thanksgiving, / praise you for evermore."
    ]
  },
  {
    id: 785,
    number: 785,
    title: "Where love and loving-kindness dwell",
    category: "Communion",
    author: "Traditional Latin, tr. G. B. Timms",
    tune: "Ubi Caritas",
    verses: [
      "Where love and loving-kindness dwell, there also God is found; brought together by Christ's love, in him let us rejoice. With fear and love of God on high and love each other from the heart.",
      "So when we gather as one body, let us take heed we be not divided in mind; let there be an end to bitter strife, and let Christ our God dwell in our midst.",
      "And with the blessed may we also see your face in glory, O Christ our God; joy that is infinite and sure, through endless ages of eternity."
    ]
  },
  {
    id: 786,
    number: 786,
    title: "Where merciful love is, God is there",
    category: "Other",
    author: "Traditional Latin, tr. James Quinn",
    tune: "Ubi Caritas",
    verses: [
      "Where merciful love is, God is there: the love of Christ has gathered us as one. In him let us rejoice and be glad. Let us fear and love the living God, and love each other with a sincere heart.",
      "When we gather as one body, let us see that we are not divided. Let there be an end to words of strife and anger, and may Christ our God be in our midst.",
      "With all the saints, may we see your face, O Christ our God, in glory, joy immense and pure, for infinite ages."
    ]
  },
  {
    id: 787,
    number: 787,
    title: "Where shall my wondering soul begin?",
    category: "Praise",
    author: "Charles Wesley",
    tune: "Sagina",
    verses: [
      "Where shall my wondering soul begin? How shall I all to heaven aspire? A slave redeemed from death and sin, a brand plucked from eternal fire, how shall I equal triumphs raise, or sing my great Deliverer's praise?",
      "O how shall I the goodness tell, Father, which thou to me hast showed? That I, a child of wrath and hell, I should be called a child of God, should know, should feel my sins forgiven, blest with this antepast of heaven!",
      "And shall I slight my Father’s love? Or basely fear his gifts to own? Unmindful of his grace I prove, shall I, the hallowed cross to shun, refuse his righteousness to impart, by hiding it within my heart?",
      "Outcasts of men, to you I call, harlots, and publicans, and thieves! He spreads his arms to embrace you all; sinners the friend of God receives; no need of him the righteous have; he came the lost to seek and save.",
      "Come, O my guilty brethren, come, groaning beneath your load of sin; his bleeding heart shall make you room, his open side shall take you in; he calls you now, invites you home; come, O my guilty brethren, come.",
      "For you the purple current flowed in pardons from his wounded side; languished for you the eternal God, for you the Prince of glory died: believe, and all your sin's forgiven; only believe, and yours is heaven!"
    ]
  },
  {
    id: 788,
    number: 788,
    title: "Wherever you go, I will go",
    category: "Dedication",
    author: "Bernadette Farrell",
    tune: "Wherever You Go",
    chorus: "Wherever you go, I will go; wherever you live, there I will live. Your people shall be my people, and your God shall be my God too.",
    verses: [
      "Wherever you die, I shall die, and there shall I be buried beside you. We will be together forever, and our love will be the gift of our God.",
      "As long as I live, I will love you, with a love that is deeper than life. I will never leave you or forsake you, for my heart is joined to yours.",
      "When the journey is long and weary, I will walk by your side in the way. I will share your joy and your sorrow, and we'll sing of the love of our God."
    ]
  },
  {
    id: 789,
    number: 789,
    title: "While shepherds watched their flocks by night",
    category: "Other",
    author: "Nahum Tate",
    tune: "Winchester Old",
    verses: [
      "While shepherds watched their flocks by night, all seated on the ground, the angel of the Lord came down, and glory shone around.",
      "“Fear not,” said he, (for mighty dread had seized their troubled mind); “Glad tidings of great joy I bring to you and all mankind.",
      "“To you, in David’s town, this day is born of David’s line a Saviour, who is Christ the Lord; and this shall be the sign:",
      "“The heavenly Babe you there shall find to human view displayed, all meanly wrapped in swathing bands, and in a manger laid.”",
      "Thus spake the seraph; and forthwith appeared a shining throng of angels praising God, who thus addressed their joyful song:",
      "“All glory be to God on high, and on the earth be peace; goodwill henceforth from heaven to men begin and never cease.”"
    ]
  },
  {
    id: 791,
    number: 791,
    title: "Who would true valour see",
    category: "Dedication",
    author: "John Bunyan",
    tune: "Monks Gate",
    verses: [
      "Who would true valour see, let him come hither; one here will constant be, come wind, come weather; there's no discouragement shall make him once relent his first avowed intent to be a pilgrim.",
      "Whoso beset him round with dismal stories, do but themselves confound; his strength the more is. No lion can him fright, he'll with a giant fight, but he will have a right to be a pilgrim.",
      "Hobgoblin nor foul fiend can daunt his spirit; he knows he at the end shall life inherit. Then fancies fly away, he'll fear not what men say, he'll labour night and day to be a pilgrim."
    ]
  },
  {
    id: 792,
    number: 792,
    title: "Wide, wide as the ocean",
    category: "Children",
    author: "C. Austin Miles",
    tune: "Wide, Wide as the Ocean",
    verses: [
      "Wide, wide as the ocean, high as the heaven above; deep, deep as the deepest sea is my Saviour's love. I, though so unworthy, still am a child of his care; for his word teaches me that his love reaches me everywhere."
    ]
  },
  {
    id: 794,
    number: 794,
    title: "Will your anchor hold",
    category: "Comfort",
    author: "Priscilla Jane Owens",
    tune: "Will Your Anchor Hold",
    chorus: "We have an anchor that keeps the soul steadfast and sure while the billows roll, fastened to the Rock which cannot move, grounded firm and deep in the Saviour's love.",
    verses: [
      "Will your anchor hold in the storms of life, when the clouds unfold their wings of strife? When the strong tides lift, and the cables strain, will your anchor drift, or firm remain?",
      "It is safely moored, 'twill the storm withstand, for 'tis well secured by the Saviour's hand; and the cables, passed from His heart to mine, can defy the blast through strength divine.",
      "It will firmly hold in the straits of fear, when the breakers have told that the reef is near; though the tempest rave and the wild winds blow, not an angry wave shall our bark o'erflow.",
      "It will surely hold in the floods of death, when the waters cold chill our latest breath; on the rising tide it can never fail, while our hopes abide within the veil.",
      "When our eyes behold through the gathering night the city of gold, our harbour bright, we shall anchor fast by the heavenly shore, with the storms all past forevermore."
    ]
  },
  {
    id: 796,
    number: 796,
    title: "With golden splendour",
    category: "Other",
    author: "Ascribed to Elpis, tr. T. A. Lacey",
    tune: "Aurea Luce",
    verses: [
      "With golden splendour and with beauteous ray, light of all lights, thou liftest up this day, wherein the chief apostles won their crown, and passed from earth to triumph and renown.",
      "Peter, the keeper of the heavenly gate, Paul, the great teacher of the church's state, judges of men, and lights of every land, by cross and sword they join the victor-band.",
      "O happy Rome! who in thy martyr-tide art by the blood of these two princes dyed; not in thine own, but in their glorious worth, thou art the fairest city of the earth.",
      "To God the Father, and the co-equal Son, and Holy Spirit, ever Three in One, be endless glory, majesty and praise, as was, and is, and shall be through all days."
    ]
  },
  {
    id: 797,
    number: 797,
    title: "Word of God, come down on earth",
    category: "Worship",
    author: "James Quinn",
    tune: "Liebster Jesu",
    verses: [
      "Word of God, come down on earth, living rain from heaven shedding; bring the barren soil to birth, joy and hope and life outspreading; Word almighty, nature's King, makes the wilderness to sing; Word of life, our souls to feed, sow yourself, the holy seed.",
      "Word of truth, in power speaking, word of God, the world's desire; shatter blind and selfish seeking, cleanse our hearts with holy fire; Word of love, in mercy spoken, heal the wounded, bind the broken; Word of life, our souls to feed, sow yourself, the holy seed.",
      "Word of God, the Father's glory, shining through the dark of night; tell the world the wondrous story, fill the universe with light; Word of peace, the world's true treasure, give us joy that knows no measure; Word of life, our souls to feed, sow yourself, the holy seed."
    ]
  },
  {
    id: 803,
    number: 803,
    title: "Yield not to temptation",
    category: "Comfort",
    author: "Horatio R. Palmer",
    tune: "Yield Not",
    chorus: "Ask the Savior to help you, / comfort, strengthen, and keep you; / he is willing to aid you, / he will carry you through.",
    verses: [
      "Yield not to temptation, for yielding is sin; / each victory will help you some other to win; / fight manfully onward, dark passions subdue; / look ever to Jesus, he will carry you through.",
      "Shun evil companions, bad language disdain; / God’s name hold in reverence, nor take it in vain; / be thoughtful and earnest, kind-hearted and true; / look ever to Jesus, he will carry you through.",
      "To him that o'ercometh, God giveth a crown; / through faith we shall conquer, though often cast down; / he who is our Savior our strength will renew; / look ever to Jesus, he will carry you through."
    ]
  },
  {
    id: 805,
    number: 805,
    title: "You shall go out with joy",
    category: "Other",
    author: "Steffi Geiser Rubin",
    tune: "The Trees of the Field",
    chorus: "And all the trees of the field will clap their hands, / the trees of the field will clap their hands, / the trees of the field will clap their hands, / while you go out with joy.",
    verses: [
      "You shall go out with joy, / and be led forth with peace; / the mountains and the hills / shall break forth before you. / There'll be shouts of joy, / and all the trees of the field / will clap, will clap their hands."
    ]
  },
  {
    id: 806,
    number: 806,
    title: "Your hand, O God, has guided",
    category: "Dedication",
    author: "Edward H. Plumptre",
    tune: "Thornbury",
    verses: [
      "Your hand, O God, has guided / your flock from age to age; / the wondrous tale is written / on history's ample page; / our fathers owned your goodness, / and we their deeds record; / and both of this bear witness: / one Church, one Faith, one Lord.",
      "Your heralds brought glad tidings / to greatest, as to least; / they bade them rise, and hasten / to share the great King's feast; / and this was all their teaching, / in every deed and word, / to all alike proclaiming: / one Church, one Faith, one Lord.",
      "When shadows thickly gathered, / and obstacles arose, / your faithful people triumphed / o'er all their many foes; / for Christ was with his servants, / their shield and great reward, / their strength in all their conflicts: / one Church, one Faith, one Lord.",
      "And we, shall we be faithless? / Shall hearts fail, hands hang down? / Shall we evade the conflict, / and cast away our crown? / Not so: in God's deep mercy / we'll hold with one accord, / and cry, with hearts exultant: / one Church, one Faith, one Lord.",
      "Thy mercy will not fail us, / nor leave us comfortless; / thy hand of power shall lead us, / thy presence shall us bless; / and so, through all the ages, / thy truth shall be adored, / and we shall sing for ever: / one Church, one Faith, one Lord."
    ]
  },
  {
    id: 807,
    number: 807,
    title: "Your words are spirit and life",
    category: "Worship",
    author: "Bernadette Farrell",
    tune: "Farrell",
    chorus: "Your words are spirit and life, O Lord: / richer than gold, stronger than death. / Your words are spirit and life, O Lord; / life everlasting.",
    verses: [
      "God's law is perfect, refreshing the soul, / reviving the weary spirit. / God's rule can be trusted: bringing us wisdom, / bringing the simple wisdom.",
      "God's precepts are right, they gladden the heart, / they give us light to guide us. / God's command is so clear, it brings us new vision, / bringing God's light to our eyes.",
      "Living in God's truth is holy and sure, / and lasting from age to age. / God's decisions are quite plain, and they are so right, / more to be desired than gold.",
      "But who can know all the errors of his ways? / Keep us from hidden failings. / Guard your servants from pride, and let them not rule us; / then we shall be pure and clean."
    ]
  },
  {
    id: 808,
    number: 808,
    title: "Zacchaeus was a tax collector",
    category: "Children",
    author: "Traditional",
    tune: "Zacchaeus",
    verses: [
      "Zacchaeus was a tax collector, / he was very, very small; / he couldn't see the Lord at all, / behind the crowd so tall. / So he climbed up in a sycamore tree, / to see what he could see, / and when the Lord came walking by, / he looked up in the tree.",
      "\"Zacchaeus, please come down,\" he said, / \"for I'm coming to your house today; / yes, I'm coming to your house today, / so hurry and lead the way.\" / So Zacchaeus scrambled down from the tree, / as happy as could be, / and he welcomed Jesus to his home, / and set his spirit free."
    ]
  },
  {
    id: 809,
    number: 809,
    title: "The Song of Zechariah (Benedictus)",
    category: "Morning",
    author: "Luke 1:68-79",
    tune: "Anglican Chant",
    verses: [
      "Blessed be the Lord the God of Israel, / who has come to his people and set them free.",
      "He has raised up for us a mighty Saviour, / born of the house of his servant David.",
      "Through his holy prophets God promised of old / to save us from our enemies, from the hands of all that hate us.",
      "To show mercy to our ancestors, / and to remember his holy covenant.",
      "This was the oath God swore to our father Abraham, / to set us free from the hands of our enemies,",
      "Free to worship him without fear, / holy and righteous in his sight all the days of our life.",
      "And you, child, shall be called the prophet of the Most High, / for you will go before the Lord to prepare his way,",
      "To give his people knowledge of salvation / by the forgiveness of all their sins.",
      "In the tender compassion of our God / the dawn from on high shall break upon us,",
      "To shine on those who dwell in darkness and the shadow of death, / and to guide our feet into the way of peace.",
      "Glory to the Father and to the Son / and to the Holy Spirit; / as it was in the beginning is now / and shall be for ever. Amen."
    ]
  },
  {
    id: 810,
    number: 810,
    title: "The Song of Mary (Magnificat)",
    category: "Evening",
    author: "Luke 1:46-55",
    tune: "Anglican Chant",
    verses: [
      "My soul proclaims the greatness of the Lord, / my spirit rejoices in God my Saviour; / for he has looked with favour on his lowly servant.",
      "From this day all generations will call me blessed; / the Almighty has done great things for me / and holy is his name.",
      "He has mercy on those who fear him, / from generation to generation.",
      "He has shown strength with his arm / and has scattered the proud in their conceit.",
      "Casting down the mighty from their thrones / and lifting up the lowly.",
      "He has filled the hungry with good things / and sent the rich away empty.",
      "He has come to the aid of his servant Israel, / to remember his promise of mercy,",
      "The promise made to our ancestors, / to Abraham and his children for ever.",
      "Glory to the Father and to the Son / and to the Holy Spirit; / as it was in the beginning is now / and shall be for ever. Amen."
    ]
  },
  {
    id: 811,
    number: 811,
    title: "The Song of Simeon (Nunc Dimittis)",
    category: "Evening",
    author: "Luke 2:29-32",
    tune: "Anglican Chant",
    verses: [
      "Now, Lord, you let your servant go in peace: / your word has been fulfilled.",
      "My own eyes have seen the salvation / which you have prepared in the sight of every people:",
      "A light to reveal you to the nations / and the glory of your people Israel.",
      "Glory to the Father and to the Son / and to the Holy Spirit; / as it was in the beginning is now / and shall be for ever. Amen."
    ]
  },
  {
    id: 812,
    number: 812,
    title: "We Praise You, O God (Te Deum)",
    category: "Praise",
    author: "Traditional",
    tune: "Anglican Chant",
    verses: [
      "We praise you, O God, / we acclaim you as Lord; / all creation worships you, / the Father everlasting.",
      "To you all angels, all the powers of heaven, / cherubim and seraphim, sing in endless praise: / Holy, holy, holy Lord, God of power and might, / heaven and earth are full of your glory.",
      "The glorious company of apostles praise you. / The noble fellowship of prophets praise you. / The white-robed army of martyrs praise you. / Throughout the world the holy Church acclaims you:",
      "Father, of majesty unbounded, / your true and only Son, worthy of all worship, / and the Holy Spirit, advocate and guide.",
      "You, Christ, are the King of glory, / the eternal Son of the Father. / When you became man to set us free / you did not shun the Virgin's womb.",
      "You overcame the sharpness of death / and opened the kingdom of heaven to all believers. / You are seated at God's right hand in glory. / We believe that you will come and be our judge.",
      "Come then, Lord, and help your people, / bought with the price of your own blood, / and bring us with your saints / to glory everlasting."
    ]
  },
  {
    id: 813,
    number: 813,
    title: "Glory to God in the Highest (Gloria)",
    category: "Praise",
    author: "Traditional",
    tune: "Anglican Chant",
    verses: [
      "Glory to God in the highest, / and peace to his people on earth.",
      "Lord God, heavenly King, almighty God and Father, / we worship you, we give you thanks, / we praise you for your glory.",
      "Lord Jesus Christ, only Son of the Father, / Lord God, Lamb of God, / you take away the sin of the world: / have mercy on us;",
      "you are seated at the right hand of the Father: / receive our prayer.",
      "For you alone are the Holy One, / you alone are the Lord, / you alone are the Most High, Jesus Christ, / with the Holy Spirit, / in the glory of God the Father. Amen."
    ]
  },
  {
    id: 814,
    number: 814,
    title: "The Lord's Prayer",
    category: "Worship",
    author: "Traditional",
    tune: "Traditional Chant",
    verses: [
      "Our Father in heaven, / hallowed be your name, / your kingdom come, / your will be done, / on earth as in heaven.",
      "Give us today our daily bread.",
      "Forgive us our sins / as we forgive those who sin against us.",
      "Lead us not into temptation / but deliver us from evil.",
      "For the kingdom, the power, / and the glory are yours / now and for ever. Amen."
    ]
  },
  {
    id: 820,
    number: 820,
    title: "Yes, God is good",
    category: "Praise",
    author: "John Hampden Gurney (1802-1862)",
    tune: "YES, GOD IS GOOD",
    verses: [
      "\"Yes, God is good!\" in earth and sky,\nfrom ocean depth and mountain high,\nall things we see and hear proclaim\nthe glories of his holy name.",
      "The sun that keeps his trackless way,\nand sheds the joyous light of day,\nthe moon that rules the silent night,\nand all the stars that shine so bright.",
      "The flower that decks the smiling sod,\nall praise the goodness of our God;\nthe birds that fly from tree to tree,\nand sing their songs of liberty.",
      "Yes, God is good, all nature says,\nand shall not we our voices raise?\nTo him who made us, and who gives\neach blessing every day that lives.",
      "Yes, God is good! in child and man,\nwhose lives are in his perfect plan;\nbut most of all in him who died\nto bring us to his Father's side."
    ]
  },
  {
    id: 821,
    number: 821,
    title: "Yesterday, today, forever",
    category: "Worship",
    author: "Albert Benjamin Simpson (1843-1919)",
    tune: "YESTERDAY, TODAY, FOREVER",
    chorus: "Yesterday, today, forever,\nJesus is the same.\nAll may change, but Jesus never!\nGlory to His name,\nGlory to His name,\nGlory to His name;\nAll may change, but Jesus never!\nGlory to His name.",
    verses: [
      "Oh, how sweet the glorious message,\nsimple faith may now receive,\nyesterday, today, forever,\nJesus Christ is still the same.\nStill He loves to save the sinful,\nHealing all the sick and lame;\nCheering up the broken-hearted,\nGlory to His holy name!",
      "He who was the friend of sinners,\nSeeks thee, ruined, lost, undone;\nHe who paid thy debt on Calvary's tree,\nSaves thee now, O weary one.\nHe who walked the stormy Galilee,\nKnows thy sorrow and thy fear;\nHe who wept at Lazarus' grave-side,\nWipes away each falling tear.",
      "He who healed the sick and suffering,\nWhen He walked this earth below,\nStill is ready, still is able,\nTo remove our grief and woe.\nHe who gave His life a ransom,\nSaves us to the uttermost;\nSends the Holy Spirit's power,\nAs of old at Pentecost.",
      "As He went to heaven ascending,\nThere to plead for us above,\nSo He's coming back in glory,\nFull of majesty and love.\nThen our eyes shall see the King,\nIn His beauty, face to face;\nAnd our tongues shall ever praise Him,\nFor His wonderful, rich grace."
    ]
  },
  {
    id: 822,
    number: 822,
    title: "Yet once shall all the world be torn",
    category: "Other",
    author: "Thomas Hornblower Gill (1819-1906)",
    tune: "ALFORD BRIDGE",
    verses: [
      "Yet once shall all the world be torn,\nyet once the sky shall shake,\nand all that is of darkness born\nshall vanish and forsake.\nBut we, who have on Christ believed,\nour trust shall never fail;\nthe kingdom we in him received\nshall over all prevail.",
      "The things that can be shaken must\nlike shadows pass away,\nbut we have placed our hope and trust\nin things that cannot decay.\nThe Lord who spoke on Sinai's hill\nshall speak again in power,\nand his eternal purpose will\nstand in the final hour.",
      "Then let us serve him with fear,\nand offer praise and prayer,\nfor our redeeming Lord is near\nto take us to his care.\nTo Father, Son, and Holy Ghost,\nthe God whom we adore,\nbe praise from all the heavenly host\nboth now and evermore."
    ]
  },
  {
    id: 824,
    number: 824,
    title: "You are the vine, we are the branches",
    category: "Worship",
    author: "Danny Daniels",
    tune: "YOU ARE THE VINE",
    verses: [
      "You are the vine, we are the branches,\nkeep us abiding in you.\nYou are the vine, we are the branches,\nkeep us abiding in you.\nAnd we'll go in, and we'll go out,\nand we will find pasture;\nand we will be your disciples, Lord."
    ]
  },
  {
    id: 825,
    number: 825,
    title: "You, Lord, are both Lamb and Shepherd",
    category: "Worship",
    author: "Sylvia Dunstan (1955-1993)",
    tune: "PICARDY",
    verses: [
      "You, Lord, are both Lamb and Shepherd,\nyou, Lord, are both prince and slave,\nyou, peacemaker and swordbringer\nof the way you took and gave.\nYou, the everlasting instant,\nyou, whom we both seek and shun.",
      "Clothed in light upon the mountain,\nstripped of might upon the cross,\nshining in eternal glory,\nbeggared by a soldier's toss,\nyou, the everlasting instant,\nyou, whom we both seek and shun.",
      "You, the pathway of the paradox\nthat leads us to the tomb,\nshattered grave-stones, empty shroud,\nand child within the womb.\nYou, the everlasting instant,\nyou, whom we both seek and shun.",
      "Let our journeys end in peace,\nboth the bitter and the sweet;\ncradled in your wider grace,\ntill we are in you complete,\nyou, the everlasting instant,\nyou, whom we both seek and shun."
    ]
  },
  {
    id: 828,
    number: 828,
    title: "Zion, at thy shining gates",
    category: "Worship",
    author: "John Brownlie (1857-1925)",
    tune: "HYFRYDOL",
    verses: [
      "Zion, at thy shining gates,\nLo, the King of Glory waits;\nHaste thy Monarch's pomp to greet,\nStrew thy palms before His feet.",
      "Christ, for Whom the world prepares\nSilent ways and secret prayers,\nComes to seek His lost again,\nComes to find His home with men.",
      "He shall sit on David's throne,\nHe shall rule and He alone;\nTo His hand the sceptre yield,\nWhom the prophet's word revealed.",
      "Zion, at thy shining gates,\nLo, the King of Glory waits;\nHaste, O haste, the Lord to greet,\nCast thy crowns before His feet."
    ]
  },
  {
    id: 831,
    number: 831,
    title: "We limit not the truth of God",
    category: "Other",
    author: "George Rawson",
    tune: "HALIFAX",
    verses: [
      "We limit not the truth of God to our poor reach of mind, by notions of our day and sect, crude, partial, and confined: now let a new and better hope within our hearts be stirred: the Lord hath yet more light and truth to break forth from his word.",
      "Who dares to bind to one poor use the beauty of his grace? Or limit to a single age the glory of his face? The world's great scriptures are not closed, the Spirit is not dead; still speaks the Lord to waiting hearts, still is his table spread.",
      "O Father, Son, and Spirit, send us increase of thy grace, that we may more and more behold the glory of thy face; till we shall know as we are known in that celestial place, and praise thee for the light and truth that guided all our race."
    ]
  },
  {
    id: 839,
    number: 839,
    title: "What shall we offer our good Lord",
    category: "Dedication",
    author: "Ernst Lange, tr. John Wesley",
    tune: "DUKE STREET",
    verses: [
      "What shall we offer our good Lord, poor nothings, for his boundless grace? Fain would we his great name record, and worthily set forth his praise.",
      "Our souls and bodies we resign; with joy we render thee thine own; O take our hearts, and keep them thine, and make them thy eternal throne.",
      "O let us our whole office feel, our solemn ministry fulfill; as we are called, to do thy will, and suffering, to be faithful still.",
      "To thee, O Lord, our all we give; and if thy work our lives demand, for thee, and thee alone, we'll live, and die at thy divine command."
    ]
  },
  {
    id: 845,
    number: 845,
    title: "Kyrie (Mass of St Thomas)",
    category: "Communion",
    author: "David Thorne",
    tune: "Mass of St Thomas",
    verses: [
      "Lord, have mercy. Lord, have mercy.",
      "Christ, have mercy. Christ, have mercy.",
      "Lord, have mercy. Lord, have mercy."
    ]
  },
  {
    id: 846,
    number: 846,
    title: "Gloria (Mass of St Thomas)",
    category: "Communion",
    author: "David Thorne",
    tune: "Mass of St Thomas",
    verses: [
      "Glory to God in the highest, and peace to his people on earth. Lord God, heavenly King, almighty God and Father, we worship you, we give you thanks, we praise you for your glory.",
      "Lord Jesus Christ, only Son of the Father, Lord God, Lamb of God, you take away the sin of the world: have mercy on us; you are seated at the right hand of the Father: receive our prayer.",
      "For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen."
    ]
  },
  {
    id: 847,
    number: 847,
    title: "Sanctus (Mass of St Thomas)",
    category: "Communion",
    author: "David Thorne",
    tune: "Mass of St Thomas",
    verses: [
      "Holy, holy, holy Lord, God of power and might, heaven and earth are full of your glory. Hosanna in the highest."
    ]
  },
  {
    id: 848,
    number: 848,
    title: "Benedictus (Mass of St Thomas)",
    category: "Communion",
    author: "David Thorne",
    tune: "Mass of St Thomas",
    verses: [
      "Blessed is he who comes in the name of the Lord. Hosanna in the highest."
    ]
  },
  {
    id: 849,
    number: 849,
    title: "Acclamation (Mass of St Thomas)",
    category: "Communion",
    author: "David Thorne",
    tune: "Mass of St Thomas",
    verses: [
      "Christ has died: Christ is risen: Christ will come again."
    ]
  },
  {
    id: 850,
    number: 850,
    title: "Agnus Dei (Mass of St Thomas)",
    category: "Communion",
    author: "David Thorne",
    tune: "Mass of St Thomas",
    verses: [
      "Lamb of God, you take away the sin of the world, have mercy on us.",
      "Lamb of God, you take away the sin of the world, have mercy on us.",
      "Lamb of God, you take away the sin of the world, grant us peace."
    ]
  },
  {
    id: 851,
    number: 851,
    title: "Kyrie (Communion Setting in F)",
    category: "Communion",
    author: "Peter Aston",
    tune: "Communion Setting in F",
    verses: [
      "Lord, have mercy. Lord, have mercy.",
      "Christ, have mercy. Christ, have mercy.",
      "Lord, have mercy. Lord, have mercy."
    ]
  },
  {
    id: 852,
    number: 852,
    title: "Gloria (Communion Setting in F)",
    category: "Communion",
    author: "Peter Aston",
    tune: "Communion Setting in F",
    verses: [
      "Glory to God in the highest, and peace to his people on earth. Lord God, heavenly King, almighty God and Father, we worship you, we give you thanks, we praise you for your glory.",
      "Lord Jesus Christ, only Son of the Father, Lord God, Lamb of God, you take away the sin of the world: have mercy on us; you are seated at the right hand of the Father: receive our prayer.",
      "For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen."
    ]
  },
  {
    id: 853,
    number: 853,
    title: "Sanctus (Communion Setting in F)",
    category: "Communion",
    author: "Peter Aston",
    tune: "Communion Setting in F",
    verses: [
      "Holy, holy, holy Lord, God of power and might, heaven and earth are full of your glory. Hosanna in the highest."
    ]
  },
  {
    id: 854,
    number: 854,
    title: "Benedictus (Communion Setting in F)",
    category: "Communion",
    author: "Peter Aston",
    tune: "Communion Setting in F",
    verses: [
      "Blessed is he who comes in the name of the Lord. Hosanna in the highest."
    ]
  },
  {
    id: 855,
    number: 855,
    title: "Agnus Dei (Communion Setting in F)",
    category: "Communion",
    author: "Peter Aston",
    tune: "Communion Setting in F",
    verses: [
      "Lamb of God, you take away the sin of the world, have mercy on us.",
      "Lamb of God, you take away the sin of the world, have mercy on us.",
      "Lamb of God, you take away the sin of the world, grant us peace."
    ]
  },
  {
    id: 856,
    number: 856,
    title: "Kyrie (Merbecke)",
    category: "Communion",
    author: "John Merbecke",
    tune: "Merbecke",
    verses: [
      "Lord, have mercy upon us. Lord, have mercy upon us. Lord, have mercy upon us.",
      "Christ, have mercy upon us. Christ, have mercy upon us. Christ, have mercy upon us.",
      "Lord, have mercy upon us. Lord, have mercy upon us. Lord, have mercy upon us."
    ]
  },
  {
    id: 857,
    number: 857,
    title: "Gloria (Merbecke)",
    category: "Communion",
    author: "John Merbecke",
    tune: "Merbecke",
    verses: [
      "Glory be to God on high, and in earth peace, good will towards men. We praise thee, we bless thee, we worship thee, we glorify thee, we give thanks to thee for thy great glory, O Lord God, heavenly King, God the Father Almighty.",
      "O Lord, the only-begotten Son, Jesu Christ; O Lord God, Lamb of God, Son of the Father, that takest away the sins of the world, have mercy upon us. Thou that takest away the sins of the world, have mercy upon us. Thou that takest away the sins of the world, receive our prayer. Thou that sittest at the right hand of God the Father, have mercy upon us.",
      "For thou only art holy; thou only art the Lord; thou only, O Christ, with the Holy Ghost, art most high in the glory of God the Father. Amen."
    ]
  },
  {
    id: 858,
    number: 858,
    title: "Nicene Creed (Merbecke)",
    category: "Communion",
    author: "John Merbecke",
    tune: "Merbecke",
    verses: [
      "I believe in one God the Father Almighty, Maker of heaven and earth, And of all things visible and invisible:",
      "And in one Lord Jesus Christ, the only-begotten Son of God, Begotten of his Father before all worlds, God of God, Light of Light, Very God of very God, Begotten, not made, Being of one substance with the Father, By whom all things were made: Who for us men, and for our salvation came down from heaven, And was incarnate by the Holy Ghost of the Virgin Mary, And was made man, And was crucified also for us under Pontius Pilate. He suffered and was buried, And the third day he rose again according to the Scriptures, And ascended into heaven, And sittest on the right hand of the Father. And he shall come again with glory to judge both the quick and the dead: Whose kingdom shall have no end.",
      "And I believe in the Holy Ghost, The Lord and giver of life, Who proceedeth from the Father and the Son, Who with the Father and the Son together is worshipped and glorified, Who spake by the Prophets. And I believe one Catholick and Apostolick Church. I acknowledge one Baptism for the remission of sins. And I look for the Resurrection of the dead, And the life of the world to come. Amen."
    ]
  },
  {
    id: 859,
    number: 859,
    title: "Victory Ahead",
    category: "Praise",
    author: "William Grum",
    tune: "VICTORY AHEAD",
    chorus: "Victory ahead, victory ahead,\nThrough the blood of Jesus, victory ahead.\nTrusting in the Lord, I hear the conqueror’s tread,\nBy faith I see the victory ahead.",
    verses: [
      "When the hosts of Israel led by God,\nRound the walls of Jericho softly trod,\nTrusting in the Lord, they felt the conqueror’s tread,\nBy faith they saw the victory ahead.",
      "David with a shepherd’s sling and five stones,\nMet the giant on the field all alone,\nTrusting in the Lord, he knew what God had said,\nBy faith he saw the victory ahead.",
      "Daniel prayed unto the Lord thrice each day,\nThen unto the lion’s den led the way,\nTrusting in the Lord, he did not fear or dread,\nBy faith he saw the victory ahead.",
      "Often with the carnal mind I was tried,\nAsking for deliverance oft I cried,\nTrusting in the Lord, I reckoned I was dead,\nBy faith I see the victory ahead.",
      "When like those who’ve gone before to that land,\nBy death’s river cold and dark I shall stand,\nTrusting in the Lord, I will not fear or dread,\nBy faith I see the victory ahead."
    ]
  }
];
