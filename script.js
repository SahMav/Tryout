const playPauseBtn = document.querySelector(".play-pause-btn")
const theaterBtn = document.querySelector(".theater-btn")
const fullScreenBtn = document.querySelector(".full-screen-btn")
const miniPlayerBtn = document.querySelector(".mini-player-btn")
const muteBtn = document.querySelector(".mute-btn")
const captionsBtn = document.querySelector(".captions-btn")
const speedBtn = document.querySelector(".speed-btn")
const currentTimeElem = document.querySelector(".current-time")
const totalTimeElem = document.querySelector(".total-time")
const previewImg = document.querySelector(".preview-img")
const thumbnailImg = document.querySelector(".thumbnail-img")
const volumeSlider = document.querySelector(".volume-slider")
const videoContainer = document.querySelector(".video-container")
const mainVideoContainer = document.querySelector(".main-video-container")
const liveVideoContainer = document.querySelector(".live-video-container")
const timelineContainer = document.querySelector(".timeline-container")
const video = document.querySelector("video")
const startTime = document.querySelector(".start-time-text")
const slider = document.querySelector(".slider")
const sliderTime = document.querySelector(".slider-text")
const asyncThumbIndicator = document.querySelector(".view-thumb-indicator")
const syncThumbIndicator = document.querySelector(".thumb-indicator")
const asyncControls = document.querySelector(".async-controls")
const closeBtn = document.querySelector(".close-btn")
const playBtn = document.querySelector(".play-btn")
const skipForwardBtn = document.querySelector(".skip-forward-btn")
const skipBackBtn = document.querySelector(".skip-back-btn")
const speedContainer = document.querySelector(".speed-container")
const speedText = document.querySelector(".speed-text")
const incSpeedBtn = document.querySelector(".increase-btn-img")
const decSpeedBtn = document.querySelector(".decrease-btn-img")
const smallWindowPrompt = document.querySelector(".small-window-prompt")
const bigWindowPrompt = document.querySelector(".big-window-prompt")
const slidesContainer = document.querySelector(".slides-container")
const timerBtn = document.querySelector(".timer-btn")
const bookmarkBtn = document.querySelector(".bookmark-btn")
const activityBtn = document.querySelector(".activity-btn")
const flagBtn = document.querySelector(".slider-btn")
const asyncSubtitle = document.querySelector(".async-subtitle-text")
const syncSubtitle = document.querySelector(".sync-subtitle-text")
const audioButtonMain = document.querySelector(".audio-btn-main")
const audioButtonLive = document.querySelector(".audio-btn-live")
const catchUpLine = document.querySelector(".catch-up-line")
const rightArrow = document.querySelector(".right-arrow")
const leftArrow = document.querySelector(".left-arrow")
const catchUpTimeText = document.querySelector(".catch-up-time-text")
const transcriptBody = document.querySelector(".transcript-body")
const transcript = document.querySelector(".transcript")
const liveLableMain = document.querySelector("#main-label")
const audioBtnText = document.querySelector(".audio-btn-text")
const transcriptButton = document.querySelector(".transcript-btn")
const timeProgress = document.querySelector(".time-progress")
const minimizeBtn = document.querySelector(".minimize-btn")
const maximizeBtn = document.querySelector(".maximize-btn")
const emailPopup = document.querySelector(".email-popup")
const popupContainer = document.querySelector(".popup-container")
const popupText = document.querySelector(".popup-text")
const popupButton = document.querySelector(".popup-button")





const today = new Date();
const time_0 = today.getHours() + ":" + today.getMinutes()// + ":" + today.getSeconds();

const inf = 1000000


//video information specific to each video
var eventTimesList = ["1:14", "4:24", "5:14", "9:36", "15:47", "16:50", "50:0"]
// var eventTimesList = ["0:10", "0:20", "0:30", "0:40", "50:0"]
const promptsList = ["Remeber, the first method of scientific method is what?", "Molecules come together to form what?", "What is the cell membrane mostly made of? ", "What are the monomers of the proteins?", "What's a mosaic?", "Remember, we talked about oligosaccharides. What are they used for?"]


//------Ancient Greece
// var slidesTimesList = ["0:0","0:26", "1:17", "3:49", "11:19", "13:06", "14:27", "14:50", "18:21", "19:42"]
// const subtitleTexts = ['- [Salman] I am now going to give an overview', 'of ancient Greece.', "In future videos we're gonna go into a lot more depth", 'on a lot of these events and ideas.', 'But this one is to give you context on the big picture.', "And just to start, let's begin with the name Greece.", 'It turns out that the Greeks do not call', 'where they live, Greece, neither did the ancient Greeks.', 'They called it Hellas.', 'Hellas, Hellas.', 'And the word Hellas comes from Hellen,', 'so this comes from Hellen,', 'which is this legendary figure who is viewed', 'as a progenitor of the Greek people.', 'You could kind of view him', 'as the father of the Greek people.', "And it's not well established in the historical record", 'when Hellen actually existed,', 'but this is where we get the name Hellas from.', "And it's very important.", 'Do not confuse this Hellen, who was a man,', 'with Helen of Troy.', 'Helen of Troy was a different person.', 'When I was a child and I heard about Hellenic things', 'or the Hellenic period, or the Hellenes,', 'I was like, oh,', "maybe that's something to do with Helen of Troy.", 'No.', "That's referring to the Greek progenitor Hellen.", "And so that's where the word Hellas comes from,", 'and ideas like Hellenes, which is the Greek people.', 'Or Hellenic, which is referring to something that is Greek,', 'or the Hellenistic Period,', "which we'll talk about many videos from now,", 'which is this period of Greek influence.', 'Not just over Greece and the Anatolian Peninsula,', 'but over Persia and over Egypt.', 'So with that out of the way,', "let's now talk about the big arc of history", 'of ancient Greece.', "And it's believed that the Greek Peninsula", 'has been settled by human beings', 'for thousands and thousands of years.', "And as time goes on we'll hopefully understand", 'more and more about them.', 'But my timeline right over here', 'starts with Mycenaean Greece,', 'or it starts with the end of Mycenaean Greece.', 'In other videos we might talk more', 'about the Mycenaean Empire.', 'And as that empire falls,', 'we enter into the Greek Dark Ages.', "And the reason why it's called the Dark Ages,", "is there's not a lot of historical record of this period", 'roughly between 1100BCE and 800BCE.', "Now there's one event,", "and I'll kind of say that with a slight emphasis", 'or a question that is worth noting here.', 'I have Trojan War question mark around 1200BCE.', "Once again, there's not a strong historic record", 'for the Trojan War, but it is a famous war,', 'that was chronicled by Homer.', "And even Homer, we don't know if he really existed,", 'or whether he was an entire literary tradition.', 'But it was chronicled in the Iliad', 'in the aftermath in the Odyssey.', 'And once again,', 'this was chronicled many hundreds of years later,', 'and even Homer is a semi-legendary figure.', 'But when people talk about the Trojan Wars', 'or you see movies about it,', "we're talking about something that,", 'if it happened the way it happened,', "it's on the order of 1200BCE.", 'Now as we exit the Greek Dark Ages,', "that's when we start to have some of the institutions", 'that really, that we now identify with the ancient Greeks,', 'get established.', 'You have the Oracle at Delphi.', 'The Oracle of Delphi, or Pythia,', 'often known as the Oracle of Delphi.', 'This is where leaders of the Greek city-states', 'went for direction to understand what was likely to happen,', 'to get prophecies.', 'And this institution, the Oracle at Delphi,', 'lasts through this entire period I have on my timeline,', 'into Roman rule, for over 1000 years,', 'where the Oracle at Delphi is a very, very prominent figure', 'in influencing Greek leaders.', 'At around the same time, you also have the Olympic Games,', "where they're held at Olympia,", 'where people compete to show their athletic prowess.', 'And this ancient Olympic Games once again,', 'it continues on for over 1000 years.', 'Our modern Olympics are just kind of a flash in the pan,', 'and it was obviously modeled after the ancient Olympics,', 'compared to how long this lasted.', 'Now when most people think of Greece,', "they're actually talking about classical Greece.", 'So this is the Classical Period right over here.', "And we're gonna do videos on a lot of these events,", "but it's roughly the period between the Persian invasions", 'that were successfully put off,', 'and the rise of Alexander and the fall of Alexander.', "And that's where you have all of these ideas", 'of Greek democracy really kind of coming to the surface.', 'Pericles, the Strategos of Athens,', 'who had the influence to really help democracy flourish.', 'Under his leadership, or during his leadership,', 'you have the Acropolis and the Parthenon,', 'these famous icons of Greek culture being established.', 'But once again, this is in this period.', "That's in this period right over here.", 'This is also the period that we associate', 'with the famous Greek philosophers.', 'These lines right over here', 'are the lives of Socrates and Plato,', "who is Socrates' student,", 'established the famous academy.', "Aristotle who was Plato's student", 'and famous tutor of Alexander the Great.', 'Now as I mentioned, you had these city-states,', 'and the ones that are worth mentioning,', 'all of them are worth mentioning.', 'But I have in this diagram,', 'the most significant city-states of ancient Greece', "that you'll hear a lot about.", 'We talked about the Oracle at Delphi,', 'the Olympic Games at Olympia.', 'A lot of the conversation tends to focus around Sparta', 'and around Athens.', "And then you'll also hear a lot about Corinth and Thebes.", 'Sparta is famous for its militaristic society.', "It's often glorified.", "But it's also worth noting that they were", 'significant slave owners.', 'At different parts in Spartan history,', 'they had somewhere between seven and 20 slaves', 'for every Spartan.', 'Athens is famous for its philosophy.', "It's famous for the birthplace of democracy.", "It's famous for its art, it's famous for its architecture,", 'all of these areas are famous for its architecture.', "But it's also worth noting that during the Golden Age,", 'and you have the Athenian Empire,', 'they were also pretty brutal in putting down rebellion', 'and in some ways subjugating different people.', 'So it depends how you want to view things.', "And we're gonna have a lot of videos", 'on all of these things.', 'But at that time, we talk about these city-states,', 'even though they shared a common language', 'and common culture,', 'they sent folks to the Olympic games,', 'they went to the Oracle of Delphi,', 'they were independent states.', "And it wasn't until you have Philip of Macedonia", 'in the fourth century right over here,', 'where he starts to really unify these Greek city-states,', 'and it culminates with his son, Alexander the Great.', 'And Alexander the Great not only unifies Greece,', 'but he takes over the Persian Empire,', 'and really kind of with his death,', 'and he has a very short life,', 'he ushers in the Hellenistic period,', 'where you have Greek culture influencing', 'that entire region.', 'Not only Greece, not only what was the Persian Empire,', 'the Middle East, Egypt,', 'that whole region gets influenced by Greek culture.', 'And Greece, I guess you could say, at the end,', 'finally gets under Roman control,', 'and it depends which date you wanna use it.', 'In the middle of the second century BCE', 'is when Greece itself falls to Rome,', 'but then other parts of, I guess you could say,', 'the Hellenistic world, finally succumb to Rome.', 'For example, Ptolemaic Egypt in the first century BCE.', 'But even then,', 'even when it becomes part of the Roman Empire,', 'it influences the Roman Empire very, very, very heavily.', 'Now other things that you will hear us talk about', 'when we discuss the Greeks,', 'besides the democracy and the philosophy,', "we're gonna talk a lot about wars.", "And it's worth noting what Greek warriors looked like.", 'So this is a depiction of Hoplites,', 'which are Greek citizen soldiers in ancient Greece.', "And you'll also here about a phalanx.", 'A phalanx is a formation where they walked', 'or they marched very tightly together.', 'And when archers came they would put all their shields up,', "and they'd almost be like this armored tank.", 'And it was a very effective method of warfare.', 'Another word that you will hear associated', 'with Sparta and those slaves is Helots.', 'Those were the names of those slaves.', "They weren't owned by individuals,", 'they were actually owned by the state.', 'Now some of the other cities here,', 'Corinth, will come up a lot.', 'It has a very strategic location', 'in the Isthmus of Corinth.', 'Notice to get from the mainland,', 'or I guess into the Peloponnesian Peninsula,', 'you have to go through this Isthmus.', 'Thebes right here was a significant rival to Athens', 'at different periods of Greek history.', 'It was the dominant city.', 'Now the last thing I wanna mention', 'is there is a ton of culture that comes from the Greeks,', 'and a lot of words that we even use today.', 'For example, the word draconian,', "which is used for something that's very harsh.", "Well that comes from Draco's law,", 'which came in the seventh century BCE from Athens.', 'He was an Athenian legislator', 'who composed a very harsh series of laws.', "That's where the word draconian comes from.", 'When people say something is spartan,', "they kind of imagine it's something that's very basic", 'or you just have the necessities.', 'And it comes from the idea of Spartan culture', 'that they really,', 'everything revolved around military necessity.', 'Even the word laconic,', 'which means someone who says just enough', 'to get their meaning across.', 'It comes from the region where Sparta is, Laconia.', 'The Spartans were famous for their kind of', 'very terse speech.', 'Famously, when Philip of Macedon', 'was threatening the Spartans,', 'and he\'s saying, "If you don\'t come on to my side', '"I\'m going to do this and that to you', '"if you don\'t become part of my kingdom, my empire,', '"I\'m going to do this to your city,', '"I\'m going to do that to your people."', 'And the Spartan\'s famous reply was, "If."', 'which is kind of a good example of laconic speech.', 'With that one word they were able to convey a lot.', "So I'm going to leave you there.", 'In the next few videos,', "we're going to go into some depth on this.", "But it's important to realize", 'that when people talk about ancient Greece,', "they're talking about a large span of history,", 'and most of what we associate with ancient Greece,', 'the Acropolis, the Parthenon, the Persian Wars,', 'the great Greek philosophers,', 'most of that is associated with the classical period,', 'often associated with the Golden Age.', 'Which is right around there.', 'Well before this period,', "the Greeks weren't all these philosophers", 'sitting around in togas.', "They might've been wearing togas,", 'but at these earlier periods', 'they were more adventurers and conquerors,', 'and they might have been in small villages.', 'And eventually those evolved into the city-states', 'that especially in Athens and Sparta', 'had their Golden Age in this period right over here.']
// var subtitleTimes = ['0:0', '0:2', '0:3', '0:5', '0:7', '0:10', '0:15', '0:17', '0:21', '0:24', '0:27', '0:31', '0:33', '0:35', '0:38', '0:39', '0:41', '0:45', '0:48', '0:51', '0:52', '0:56', '0:59', '1:0', '1:4', '1:6', '1:7', '1:10', '1:11', '1:15', '1:18', '1:22', '1:25', '1:27', '1:29', '1:31', '1:35', '1:38', '1:39', '1:44', '1:45', '1:49', '1:52', '1:54', '1:56', '1:57', '1:59', '2:1', '2:4', '2:6', '2:9', '2:10', '2:13', '2:15', '2:18', '2:22', '2:24', '2:26', '2:29', '2:35', '2:38', '2:42', '2:45', '2:47', '2:49', '2:51', '2:53', '2:54', '2:56', '3:1', '3:3', '3:4', '3:6', '3:8', '3:13', '3:16', '3:19', '3:22', '3:24', '3:26', '3:29', '3:31', '3:34', '3:38', '3:40', '3:43', '3:47', '3:53', '3:56', '3:59', '4:3', '4:5', '4:9', '4:12', '4:16', '4:20', '4:24', '4:27', '4:31', '4:35', '4:37', '4:39', '4:44', '4:46', '4:50', '4:54', '5:1', '5:4', '5:7', '5:10', '5:13', '5:17', '5:21', '5:23', '5:25', '5:27', '5:28', '5:31', '5:33', '5:35', '5:37', '5:41', '5:44', '5:46', '5:48', '5:49', '5:52', '5:53', '5:55', '5:56', '5:59', '6:3', '6:6', '6:12', '6:13', '6:15', '6:16', '6:19', '6:22', '6:24', '6:27', '6:31', '6:34', '6:36', '6:40', '6:42', '6:45', '6:48', '6:50', '6:52', '6:54', '6:57', '6:59', '7:0', '7:2', '7:5', '7:8', '7:11', '7:15', '7:19', '7:22', '7:25', '7:27', '7:30', '7:31', '7:33', '7:36', '7:37', '7:41', '7:43', '7:47', '7:50', '7:53', '7:55', '7:58', '8:1', '8:4', '8:7', '8:12', '8:13', '8:15', '8:20', '8:23', '8:24', '8:28', '8:30', '8:35', '8:37', '8:41', '8:44', '8:46', '8:48', '8:51', '8:53', '8:58', '9:0', '9:2', '9:4', '9:6', '9:9', '9:11', '9:13', '9:15', '9:16', '9:18', '9:22', '9:25', '9:29', '9:31', '9:34', '9:35', '9:38', '9:41', '9:43', '9:46', '9:48', '9:52', '9:56', '9:59', '10:1', '10:2', '10:5', '10:7', '10:11', '10:13', '10:16', '10:18', '10:22', '10:23', '10:27', '10:29', '10:31', '10:33', '10:34', '10:37', '10:39', '10:42', '10:43', '10:45', '10:49', '10:53', '10:57', '10:58', '11:0', '11:2', '11:4', '11:5', '11:7', '11:9', '11:14', '11:16', '11:19', '11:21', '11:26', '11:27', '11:29', '11:31', '11:32', '11:34', '11:37', '11:39', '11:42', '11:44']


// read video data" subtitles , slide times, alert times from info.txt file

// -------Digestive Organlles
var slidesTimesList = ["0:10", "1:53", "2:45", "3:16", "4:50", "8:25", "9:10", "10:08", "14:43", "15:63",  "18:18", "20:04"]
var subtitleTimes = ['0:0', '0:4', '0:10', '0:18', '0:25', '0:31', '0:37', '0:47', '0:54', '1:0', '1:7', '1:13', '1:18', '1:25', '1:31', '1:39', '1:44', '1:51', '1:59', '2:6', '2:15', '2:21', '2:28', '2:34', '2:40', '2:45', '2:52', '2:58', '3:6', '3:11', '3:19', '3:25', '3:31', '3:39', '3:45', '3:52', '3:59', '4:6', '4:12', '4:17', '4:27', '4:35', '4:42', '4:50', '4:56', '5:3', '5:8', '5:15', '5:22', '5:29', '5:35', '5:41', '5:50', '5:57', '6:3', '6:9', '6:18', '6:25', '6:32', '6:38', '6:46', '6:54', '7:0', '7:5', '7:11', '7:17', '7:22', '7:29', '7:34', '7:39', '7:44', '7:50', '7:59', '8:4', '8:10', '8:15', '8:23', '8:29', '8:35', '8:42', '8:48', '8:56', '9:3', '9:10', '9:15', '9:23', '9:31', '9:38', '9:44', '9:51', '9:58', '10:4', '10:10']
const subtitleTexts = ['So, lys means to break apart. So lysosomes, these are', 'the digestive organelles of the cell. They contain an acidic environment,', "a PH of about 2.4 or so. It might be more like 2.7, but it's very acidic, okay.", "So what happens is, when the cell eats something, or let's say an organelle gets worn out,", 'like a mitochondria gets worn out and the cell just wants to recycle the organic molecules that made it up.', "That's where the lysosomes come in. They will fuse with that matter, and inside of the lysosomes,", 'you have a variety of enzymes, each which have specific jobs to break down carbohydrates, lipids, proteins and the like.', "So, because it's got so many different enzymes, it pretty much can digest most organic molecules.", 'And the reason why it contains an acidic environment is because, if my chance these lysosomes,', "it's not just the acid that helps break up the tissues, although that helps. If the lysosome actually bursts open", 'and releases its enzymes, remember what happens when you change the PH of a protein', 'or the PH surrounding a protein? What happens to the protein?', "- [Student] It unravels. - [Professor] It unravels. We call this denaturation, and that's a good thing because, if these lysosomes were to burst open,", 'which they occasionally do, and the enzymes remained active, they would start chewing up everything in the cell.', "You don't want that to happen. So it actually deactivates the enzymes if by chance the lysosomes accidentally burst open.", "So it's a two-fold purpose. The PH helps in the digestion process", 'because it helps break the covalent bonds and aids in that lysine process like the hydrolysis.', "But, it's also a protective measure so that the enzymes don't eat the cell up if the lysosome actually gets destroyed.", "Okay, now let's talk about eating the cell because there are occasions where the lysosomes will destroy the cell,", "but it's actually a good thing, and this is where we get into cancer because, when a cell starts having too many problems,", 'it can literally self destruct. We call this apoptosis, which is', 'called programmed cell death, A-P-O-P-T-O-S-I-S, A-P-O-P-T-O-S-I-S.', "I don't have any markers today. Otherwise, I'd write it on the board. So, apoptosis is programmed cell death.", 'Why is that essential? Well, in the cases of cancer, where your cells are growing out of control,', 'normally your body is able to say, "Hey, you\'re messed up, kill yourself."', 'And normally, the cells will, but in some cases where the cells have malfunctioned in a certain way,', "they don't respond to your body's immune system telling them to shut down and to kill themselves. And that's when the cancer starts growing", "and spreading and having all sorts of issues. So, this is a default mechanism that's absolutely necessary for the health of your system", "when the cells start becoming problematic. It's also part of your development process.", "If you look at your hand, the reason why we don't have webbing between our fingers is because of this programmed cell death.", 'As you develop as a fetus, your hand grows like this and then the cells die in between.', 'Same thing for your toes, same thing for your brain, you make three times the number of neurons that you actually need.', "Two thirds of them die through apoptosis. Now you don't get smarter if they don't die. You will actually die because you have too many neurons.", "Your brain gets too big. And now, there's one more thing about lysosomes that you should know.", "They're not just a digestive organ now, but when problems, genetic problems arise", 'because the enzyme is not made properly, this leads to various diseases.', "You may have heard of this one before. It's called Tay-Sachs disease. The child usually dies at about age three", 'because what ends up happening is, if you have this disease, there is a defective enzyme', "that doesn't break down certain lipids that surround your nerve cells in your brain.", "Well, as those lipids accumulate, the nerves essentially die and you die. So, this disease, there's no cure for it.", "Ultimately, it causes cell death because it can't break down certain fats in your brain.", 'And that has to do with your lysosomes. So, pretty important organelle there,', "they're important for digestion, cleaning up worn out, old organelles like your mitochondria", "when they get damaged or whatnot, it'll absorb it. And here's where the Golgi apparatus", "actually makes lysosomes because it'll take the proteins that are made from the rough ER, it'll modify them", 'so that they can survive in a very acidic environment, and then, it creates those lysosomes', "that will chew up things that the cell takes in. It'll recycle old organelles in the cell.", 'So these are important organelles in any cell. All right, vacuoles, vacuoles are kind of', "like lysosomes for the plants, but you don't really find huge vacuoles in animal cells.", "So plants have vacuoles. They're mainly storage containers,", "but they also serve to break molecules down. Now, for testing purposes, I'm gonna keep it simple so that you don't", "get confused between the two, and we'll just say that they're storage containers 'cause that's one of their main jobs. So vacuoles store nutrients, store sugars,", 'store water, store what the cells typically need to be able to undergo photosynthesis', 'and to store the products of photosynthesis. So as you can see, these are membrane-bound vesicles', "that take up a lot of space in the cell, look at that. I mean, that's a huge amount of space for the cell.", "Here's the nucleus, there's a vacuole. So they take up a lot of space. Let me show you another picture.", 'There it is. Look how much space these vacuoles take up in the plant cell. So vacuoles are the storage containers', "that pretty much store water 'cause you need a lot of water for photosynthesis. So these cells need to be able to store", 'and have a reservoir of water as well as nutrients and supplies.', "All right, there is some degradation. There are some enzymes, so they're similar", "to lysosomes in that regard, but yeah. Now, peroxisomes, this one's a fun one.", "Shoot, I don't have my video with me. Well, I'll get my video for next time.", 'Peroxisomes are similar to lysosomes as well.', 'You\'re like, "Man, all these different things. "Why don\'t they just have one large organelle?" well, because though they have similar functions,', 'they do have their respective roles. Peroxisomes do break down certain molecules,', "but unlike lysosomes, they're not the digestive organelle of the cell. So what is their main job?", 'Well, the peroxisome actually gets its name because of one of its major functions', 'amongst the many that it does. One of those is to break down hydrogen peroxide,', 'hence the word peroxisomes. How does it do this? Well, and why does it do this?', 'Why does it need to? Your cells actually produce hydrogen peroxide', 'when you undergo metabolism. When your body is using oxygen and water and whatnot', 'to be able to break down sugars and get energy from them, this is a toxic byproduct, hydrogen peroxide.', "Now, a lot of you know that you buy those in brown bottles. The reason why it's in brown bottles is", 'because light will actually break down hydrogen peroxide back into oxygen and water,', "but in the inner workings of your body, the light can't reach those", 'nor can it break it down fast enough. So these organelles have enzymes that immediately turn hydrogen peroxide', "back into oxygen and water. Now, next time when we meet, I'll bring a video to show you", 'that we just did in the lab a few days ago, where the liver of an organism,', "specifically this cow liver, but it's in any animal. The liver has so many peroxisomes in it", 'that when you put it into a solution of hydrogen peroxide, it turns it', 'into oxygen and water so fast that it literally bubbles over, heating up and spewing oxygen and water out of it.', "So I'll show you that video. It's like a side-by-side video of a denatured liver, a cooked liver", "and one that's normally functioning. It's just amazing to watch. So, hydrogen peroxide by itself", "can actually disrupt a lot of the cell's machinery. And so, it needs to immediately", "be rendered harmless by turning it back into oxygen and water. And that's one of the main jobs of peroxisomes.", 'Though peroxisomes do undergo some metabolism, even lipid metabolism, which brings us to another disease', "called adrenoleukodystrophy. (laughing) I've been teaching for over 10 years.", 'It took me about two to be able to say that word without tripping over it. So adrenoleukodystrophy, if you think of dystrophy,', "like muscular dystrophy, that's really what this disease is all about is instead of causing neurons to die,", 'and therefore causing death, it usually affects the neurons that control your limbs.', "We call them somatic neurons, like your skeletal muscle system. And when these lipids don't get broken down", 'due to a malfunctioning enzyme and peroxisomes, then it usually affects the nervous system', "that affects your limbs, and hence the muscular dystrophy. You can't, you lose control over your limbs"]



subtitleTimes = convertToSeconds(subtitleTimes)
eventTimesList = convertToSeconds(eventTimesList)
//video update in 0.4s intervals
setInterval(update, 300)
function update(){
  const percent = video.currentTime / video.duration
  timelineContainer.style.setProperty("--progress-position", percent)
  timelineContainer.style.setProperty("--live-progress-position", syncVideo.currentTime/video.duration)
  updateMissedPercent()
  updateAsyncView()
  viewReminder()
  checkforLiveEvents()
  updateSlideThumbs()
  updateTimer()
  checkFlagButton()
  addSubtitles(syncVideo, syncSubtitle)
  addSubtitles(video, asyncSubtitle)
  updateTranscript()
  updateTimeProgress()
  updatePopup()
}

//Sliders adding and updating
let slidersList = []
let sliderPosList =[]
let slidingSliderIndex = -1
let isSliding = false

slider.addEventListener("click", clone)
function clone(e){
	e.stopPropagation()
  console.log("cloned")
  const cloneSlider = slider.cloneNode(true)
  cloneSlider.children[0].src = "assets/flag3.png"
  timelineContainer.appendChild(cloneSlider)
  cloneSlider.style.left = "50%"
  cloneSlider.style.bottom = "50%"
  cloneSlider.style.display = "none"
  cloneSlider.setAttribute("index", slidersList.length)
  cloneSlider.setAttribute("isSliding", true)
  cloneSlider.style.cursor = "grab"
  slidingSliderIndex = cloneSlider.getAttribute("index")
  slidersList.push(cloneSlider)
  sliderPosList.push(inf)
  cloneSlider.addEventListener("click", toggleSliding)
  cloneSlider.addEventListener("dblclick", removeSlider)
  isSliding = true
  // cloneSlider.children[3].addEventListener("click", removeSlider)
}


document.addEventListener("mousemove", e => {
  if (slidingSliderIndex >= 0) moveSlider(e)
})

function toggleSliding(e){
  e.stopPropagation()
  let slider = event.target.parentNode
  let index = parseInt(slider.getAttribute("index"))
  if (isSliding == false){
    isSliding = true
    slider.setAttribute("isSliding", true)
    slidingSliderIndex = index
    slider.style.cursor = "grab"
    
  }
  else{
    slider.style.cursor = "pointer"
    isSliding = false
    slidingSliderIndex = -1
    slider.setAttribute("isSliding", false)
    slider.children[1].style.color = "black"
    let sliderPositionPercent = slider.style.left
    sliderPositionPercent = sliderPositionPercent.substring(0, sliderPositionPercent.length - 1)
    sliderPosList[index] = parseFloat(sliderPositionPercent)
    console.log(sliderPosList)
    flagBtn.style.opacity = "100%"
  }
}

function moveSlider(e){
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const startTime = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
  // const time = ~~(startTime + video.duration * percent)
  let time = ~~(video.duration * percent)
  let hour = ~~(time/3600)
  let minute = ~~((time - 3600 * hour)/60)
  let second = ~~(time - 3600 * hour - 60 * minute)
  // const timeText = hour+ ":" + minute
  if(second < 10){
  	second = "0" + second
  }
  if(minute < 10){
  	minute = "0" + minute
  }
  const timeText = minute+ ":" + second

  if(isSliding && percent > video.currentTime / video.duration){
    let slider = slidersList[slidingSliderIndex]
    if(slider.style.display == "none") slider.style.display = "block"
    slider.style.left = percent * 100 + "%"
    slider.style.bottom = "50%"
    slider.children[1].textContent = timeText
    slider.children[1].style.color = "rgb(200, 200, 200)"
  }
}

function removeSlider(e){
  console.log("closed")
  e.stopPropagation()
  let slider = event.target.parentNode
  let index = parseInt(slider.getAttribute("index"))
  timelineContainer.removeChild(slider)
  sliderPosList[index] = inf
  isSliding = false
}



// Focus and no focus
let isActive = true
let startInactvity
let endInactivity
let sectionStarts = []
let sectionEnds = []

window.addEventListener("blur", toggleFocus)
window.addEventListener("focus", toggleFocus)

const green = "#6db35d"
// const green = "grey"
// const red = "#e06666"
// const red = "rgb(235, 235, 235)"
const red = "white"
const audioTrack = "assets/alert3.wav"


function toggleFocus(){
  if(!isAsync){
    if(isActive == true){
      isActive = false
      startInactvity = video.currentTime/video.duration * 100
      sectionStarts.push(startInactvity)
    }
    else{
      isActive = true
      endInactvity = video.currentTime/video.duration * 100
      addSection(startInactvity, endInactvity, red)
      sectionEnds.push(endInactvity)
      totalMissedPercent += (endInactvity - startInactvity)
      // totalMissedPercent += currentMissedPercent
      currentMissedPercent = 0

      //move async thumbnail indicator to the first red section
      // asyncThumbIndicator.style.display = "block"
      // asyncThumbIndicator.children[1].textContent = ""
      // asyncThumbIndicator.style.left = sectionStarts[sectionInd] + "%"
    }
  }
}

let greenSections = []
let redSections = []

let totalRedPercent = 0
let totalGreenPercent = 0

function addSection(start, end, color){
  const section = document.createElement("div")
  section.setAttribute("class", "section")
  section.style.left = start + "%"
  section.style.width = (end - start) + "%"
  section.style.backgroundColor = color
  timelineContainer.appendChild(section)
  if(color == green){
    section.style.zIndex = 10
    greenSections.push(section)
    currentGreenWidth = 0
    totalGreenPercent += (end - start)
  }
  if(color == red){
    // //if there is a small gap between this section and the last --> ignore the gap
    // if(start - sectionEnds.slice(-1) < 1){
    //   section.style.left = sectionEnds.slice(-1) + "%"
    //   section.style.width = (end - sectionEnds.slice(-1)) + "%"
    // }
    redSections.push(section)
    currentRedWidth = 0
    totalRedPercent += (end - start)    
  }
}

let currentGreenWidth = 0
let currentRedWidth = 0
function updateSection(){
  //green section added when viewing asynchronosly to show what we watched, until the end of hte red section!
  if (greenSections.length != 0 && greenSectionActive == true){
    let end = video.currentTime/video.duration * 100
    let start = greenSections[greenSections.length - 1].style.left
    start = parseFloat(start.substring(0, start.length - 1))
    if(end - start > currentGreenWidth){ //only increase length
      currentGreenWidth = end - start
    }
    greenSections[greenSections.length - 1].style.width = currentGreenWidth + "%"
  }

  //red section added when viewing asynchronously to show what we are missing
  if (redSections.length != 0){
    let syncend = syncVideo.currentTime/video.duration * 100
    let syncstart = redSections[redSections.length - 1].style.left
    syncstart = parseFloat(syncstart.substring(0, syncstart.length - 1))
    currentRedWidth = syncend - syncstart
    redSections[redSections.length - 1].style.width = currentRedWidth + "%"
  }
}

let currentMissedPercent
let currentViewedPercent
function updateMissedPercent(){
  if(isActive == false){
    currentMissedPercent = (video.currentTime/video.duration) * 100 - sectionStarts[sectionStarts.length - 1]
  }
  if(isAsync){
    currentViewedPercent = (video.currentTime/video.duration) * 100 - sectionStarts[sectionInd]
    currentMissedPercent = (syncVideo.currentTime/video.duration) * 100 - sectionStarts[sectionStarts.length - 1]
    // console.log("green", totalViewedPercent + currentViewedPercent, ",red:", totalMissedPercent + currentMissedPercent)
  }
}

// Reminder to start asynchronous viewing
let totalMissedPercent = 0
let totalViewedPercent = 0
let playbackPace = 1.5
let reminderSent = false
let timeDifference
let blinkInterval

var requiredViewingTime = 0

function viewReminder(){
  let nextSliderPos = Math.min(...sliderPosList)
  let minInd = sliderPosList.indexOf(nextSliderPos)

  // total of what needs to be watched in the future
  const currentPercent = video.currentTime/video.duration * 100
  requiredViewingTime = ((currentPercent - sectionStarts[sectionInd])/playbackPace) / (1 - 1/playbackPace)
  // const toWatchPercent = (totalMissedPercent + currentMissedPercent) - (totalViewedPercent + currentViewedPercent)
  // const requiredViewingTime = ((totalMissedPercent + currentMissedPercent)/playbackPace) / (1 - 1/playbackPace)


  //send a reminder when it is time to start async viewing only once to start
  if(requiredViewingTime!= 0){
    if ((nextSliderPos - currentPercent) <= requiredViewingTime +0.1 && reminderSent == false && isAsync == false){
      console.log(requiredViewingTime)
      playSound(audioTrack)
      reminderSent = true
      showAlertMark(slidersList[minInd].children[3])
      showAlertMark(slider.children[3])
      // asyncThumbIndicator.style.left = sectionStarts[sectionInd] + "%"
      // asyncThumbIndicator.style.display = "block"
      // asyncThumbIndicator.children[1].textContent = "Start viewing!"
      // slidersList[minInd].children[1].style.borderStyle = "solid"
      blinkInterval = setInterval(blink, 500)
    }
  }

  //if in reviewing mode update the expected finishing time
  if(isAsync && nextSliderPos <= 100){
    const syncPercent = syncVideo.currentTime / video.duration * 100
    const expectedViewingTime = ((syncPercent - currentPercent)/playbackPace) / (1 - 1/playbackPace)
    timeDifference = (expectedViewingTime - (nextSliderPos - syncPercent)) / 100 * video.duration
    timeDifference = (timeDifference / 60)  // convert to minutes
    //update the slider time-difference
    let minInd = sliderPosList.indexOf(Math.min(...sliderPosList))
    if(timeDifference >= 0){
      slidersList[minInd].children[2].textContent = "+" + timeDifference.toFixed(1) + " min"
      slidersList[minInd].children[2].style.color = red
    }else{
      slidersList[minInd].children[2].textContent = timeDifference.toFixed(1) + " min"
      slidersList[minInd].children[2].style.color = green
    }   
  }

  //if it passes the slide in non-reviewing mode remove the slider
  if(!isAsync && currentPercent >= nextSliderPos){
    slidersList[minInd].style.display = "none"
    sliderPosList[minInd] = inf
  }
}


//border blinking 
function blink(){
  let nextSliderPos = Math.min(...sliderPosList)
  let minInd = sliderPosList.indexOf(nextSliderPos)
  if(slidersList[minInd].children[1].style.borderStyle == "none"){
    slidersList[minInd].children[1].style.borderStyle = "solid" 
    // asyncThumbIndicator.style.display = "block"
  }
  else{
    slidersList[minInd].children[1].style.borderStyle = "none"
    // asyncThumbIndicator.style.display = "none"
  }
}

// start asynchronous viewing (AV)
let sectionInd = 0
let isAsync = false
const syncVideo = liveVideoContainer.children[0]
// syncVideo.style.filter = "grayscale(1)"
let midSectionStartTime = 0

asyncThumbIndicator.addEventListener("click", startAV)

function startAV(time){
  if(isAsync == false || isAsync == true /*&& (currentMissedPercent + totalMissedPercent)!= 0*/){
    console.log(time)
    //remove text and change color for indicator
    asyncThumbIndicator.children[1].textContent = ""
    asyncThumbIndicator.children[0].src = "assets/student.png"
    asyncThumbIndicator.style.opacity = "100%"
    // mainVideoContainer.style.borderColor = red

    //setup live video container
    if(showLiveWindow){
    	liveVideoContainer.style.display = "block"
    }
    else{
    	maximizeBtn.style.display = "block"
    }
    liveLableMain.textContent = "RECORDED"
    // syncVideo.currentTime = video.currentTime
    // syncVideo.play()
    syncVideo.playbackRate = 1
    // syncVideo.musted = true
    // syncVideo.style.filter = "grayscale(1)"
    liveVideoContainer.style.borderColor = "grey"
    syncVideo.style.borderColor = "grey"


    //start async viewing of the video
    isAsync = true
  

    video.currentTime = time

    //add green section for the async view 
    // addSection(video.currentTime/video.duration * 100, video.currentTime/video.duration * 100, green)
    // greenSectionCount += 1
    // greenSectionActive = true
    greenSectionActive = false   //end the green section when moving to another start point

    // video.currentTime = parseInt(asyncThumbIndicator.style.left.substring(0, asyncThumbIndicator.style.left.length - 1))/100 * video.duration
    video.playbackRate = playbackPace

    
    //add red section for the live video that is being missed (most recent red section being updated right now)
    if(redSectionActive == false){
      addSection(syncVideo.currentTime/video.duration * 100, syncVideo.currentTime/video.duration * 100, red)
      sectionStarts.push(syncVideo.currentTime/video.duration * 100)
      redSectionActive = true
    }

    //activate all controls
    activate(skipForwardBtn)
    activate(speedContainer)
    speedText.textContent = playbackPace.toFixed(1)

    //stop blinking 
    asyncThumbIndicator.style.display = "block"
    clearInterval(blinkInterval)

    //update sectionInd, what is the next red section that we are going to view?
    for(let i = 0; i<sectionEnds.length; i ++){
      if(time/video.duration * 100 > sectionEnds[i]){
        sectionInd = i
        console.log(i)
      }
      if(time/video.duration * 100 < sectionEnds[0]){
      	sectionInd = 0
      }
    }
  }

}

// when clicking on the syncthumbindicator we want to jump to the live lecture
syncThumbIndicator.addEventListener("click", jumpToLive)
function jumpToLive(){
  if(isAsync){
      isAsync = false
      
      liveVideoContainer.style.display = "none"
      liveLableMain.textContent = "LIVE"
      // mainVideoContainer.style.borderColor = "#595959"
      asyncThumbIndicator.children[0].src = "assets/student.png"
      // asyncThumbIndicator.style.opacity = "50%"
      // asyncThumbIndicator.style.left = video.currentTime / video.duration * 100 + "%"
      syncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"

      video.playbackRate = 1
      video.currentTime = syncVideo.currentTime

      if(video.paused){
      	togglePlayPause()
      }
      // syncVideo.pause()
      syncVideo.muted = true

      //delete catchup line
      removeCatchUpLine()

      //push the last red section's end
      sectionEnds.push(syncVideo.currentTime/video.duration * 100)
      redSectionActive = false

      maximizeBtn.style.display = "none"
      // sectionInd += 1

      // deactive async viewing controls
      // asyncControls.style.opacity = "50%"
      // asyncControls.style.zIndex = "50"
  }
}

let greenSectionCount = 0
let greenSectionActive = false
let redSectionActive = false


function updateAsyncView(){
  if (isAsync){
    //move thumb-indicator
    asyncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"
    syncThumbIndicator.style.left = "calc(var(--live-progress-position) * 100%)"

    

    //move to next missed section
    if(sectionInd < sectionStarts.length){
      if(video.currentTime >= sectionEnds[sectionInd]/100 * video.duration){
        totalViewedPercent += (sectionEnds[sectionInd] - sectionStarts[sectionInd])
        sectionInd += 1
        greenSectionActive = false
        //video.currentTime = sectionStarts[sectionInd]/100 * video.duration
        currentViewedPercent = 0
        //add green sections starting in the new section
      }
      if(video.currentTime > sectionStarts[sectionInd]/100 * video.duration && greenSectionActive == false){
          addSection(video.currentTime/video.duration * 100, video.currentTime/video.duration * 100, green)
          // addSection(sectionStarts[sectionInd], video.currentTime/video.duration * 100, green)      // made a change so that the green sections only cover red sections.
          greenSectionCount += 1
          greenSectionActive = true
        }
    }

    //update green and red section
    updateSection()
    updateCatchUpLine()

   
    //exit async viewing
    if (video.currentTime > syncVideo.currentTime){

      isAsync = false
      video.playbackRate = 1
      // syncVideo.pause()
      liveVideoContainer.style.display = "none"
      liveLableMain.textContent = "LIVE"
      // mainVideoContainer.style.borderColor = "#595959"
      asyncThumbIndicator.children[0].src = "assets/student.png"
      // asyncThumbIndicator.style.opacity = "50%"
      // asyncThumbIndicator.style.left = video.currentTime / video.duration * 100 + "%"
      asyncThumbIndicator.style.display = "initial"
      // syncThumbIndicator.style.left = "calc(var(--progress-position) * 100%)"
      // slider.style.left = "100%"
      // sliderTime.textContent = ""

      //deactivate controls
      deactivate(skipForwardBtn)
      deactivate(speedContainer)
      speedText.textContent = "1.0"

      //delete catchup line
      removeCatchUpLine()

      //reset reminder 
      totalMissedPercent = 0
      currentMissedPercent = 0
      totalViewedPercent = 0
      currentViewedPercent = 0
      reminderSent = false

      // remove the time estimate on the next slider
      let minInd = sliderPosList.indexOf(Math.min(...sliderPosList))
      if(sliderPosList[minInd] <= 100){
        slidersList[minInd].children[2].textContent = ""
      }

      // if there were any sliders and current time is past the slider pos
      if(sliderPosList[minInd] <= 100 && video.currentTime/video.duration * 100 > sliderPosList[minInd]){
      sliderPosList[minInd] = inf
      slidersList[minInd].style.display = "none"
      }

      //push the last red section's end
      sectionEnds.push(video.currentTime/video.duration * 100)
      sectionInd += 1
      greenSectionActive = false
      redSectionActive = false

      maximizeBtn.style.display = "none"


      // deactive async viewing
      // asyncControls.style.opacity = "50%"
      // asyncControls.style.zIndex = "50"
    }
  }
}


function updateCatchUpLine(){
	leftArrow.style.display="block"
	rightArrow.style.display = "block"
	catchUpLine.style.display = "block"
	catchUpTimeText.style.display = "block"
	catchUpLine.style.left = video.currentTime/video.duration * 100 + "%"
    catchUpLine.style.width = (syncVideo.currentTime - video.currentTime)/video.duration * 100 + "%"
    rightArrow.style.left = (syncVideo.currentTime/video.duration * 100)-0.5 + "%"
    leftArrow.style.left =  video.currentTime/video.duration * 100 + "%"
    catchUpTimeText.style.left = (syncVideo.currentTime + video.currentTime) * 0.5 /video.duration * 100 + "%"
    catchUpTimeText.textContent = convertToMinutesDescript(((syncVideo.currentTime - video.currentTime)/playbackPace)/(1 - 1/playbackPace))
    if(((syncVideo.currentTime - video.currentTime)/playbackPace)/(1 - 1/playbackPace) > video.duration - syncVideo.currentTime){
    	catchUpTimeText.style.color = "red"
    }
    else{
    	catchUpTimeText.style.color = green
    }
}

function removeCatchUpLine(){
	leftArrow.style.display = "none"
	rightArrow.style.display = "none"
	catchUpLine.style.display = "none"
	catchUpTimeText.style.display = "none"
}

// asynchronous controls event handling

playBtn.addEventListener("click", togglePlayPause)
video.addEventListener("click", togglePlayPause)

var audioBtnisLive = false

function togglePlayPause(){
	if(started){
		if(video.paused){
		    video.play()
		    playBtn.children[0].setAttribute("src", "assets/pause-btn.png")
		    // syncVideo.style.filter = "grayscale(1)"
		    liveVideoContainer.style.borderColor = "grey"
		    // video.style.filter = "grayscale(0)"
		    // mainVideoContainer.style.borderColor = "#e06666"

		     //swtich which audio button is shown -> when video is playing the audio for the async video is playing
		    // audioButtonLive.style.display = "none"
		    // audioButtonMain.style.display = "block"
		    audioBtnText.textContent = ""
		    audioBtnisLive = false

		    if(syncVideo.muted){
		    	video.muted = true
		    }else{
		    	video.muted = false
		    }

		    syncVideo.muted = true


       }else{
		  	video.pause()
		  	video.currentTime -= 1
		  	startAV(video.currentTime)
		    playBtn.children[0].setAttribute("src", "assets/play-btn.png")
		    // syncVideo.style.filter = "grayscale(0)"
		    // liveVideoContainer.style.borderColor = "#e06666"
		    // video.style.filter = "grayscale(1)"
		    // mainVideoContainer.style.borderColor = "grey"

		    //if audio is muted keep live video muted, otherwise play live audio
		    if(!video.muted){
		    	syncVideo.muted = false
		    }
		    else{
		    	syncVideo.muted = true
		    }

		    //swtich which audio button is shown -> when video is pause the audio for the sync video is playing
		    // audioButtonLive.style.display = "block"
		    audioBtnText.textContent = "LIVE"
		    audioBtnisLive = true
		    // audioButtonMain.style.display = "none"
	  		}  
	}
}

//close btn
closeBtn.addEventListener("click", jumpToLive)

skipForwardBtn.addEventListener("click", skipForward)
skipBackBtn.addEventListener("click", skipBack)


const skipInterval = 5
// function skipForward(){
//   if(isAsync){
//     if(sectionInd < sectionEnds.length){
//       if((video.currentTime + skipInterval) / video.duration * 100 < sectionEnds[sectionInd]){
//          video.currentTime += skipInterval
//       }
//       else{
//         video.currentTime = (sectionEnds[sectionInd]) / 100 * video.duration
//       }
//     } else{
//       if((video.currentTime + skipInterval) < syncVideo.currentTime){
//         video.currentTime += skipInterval
//       }
//       else{
//         video.currentTime = syncVideo.currentTime
//       }
//     }
//   }
// }

function skipForward(){
  if(isAsync){
    if(video.currentTime + skipInterval < syncVideo.currentTime){
      video.currentTime += skipInterval
    }else{
      video.currentTime = syncVideo.currentTime
    }
  }
}

// function skipBack(){
//   if(isAsync){
//     if(sectionInd > 0){
//       if((video.currentTime - skipInterval)/ video.duration * 100 < sectionStarts[sectionInd]){
//         sectionInd -= 1
//         video.currentTime = sectionEnds[sectionInd] / 100 * video.duration - skipInterval
//       }
//       else{
//         video.currentTime -= skipInterval
//       }
//     }
//     else{
//       if((video.currentTime - skipInterval)/ video.duration * 100 < sectionStarts[sectionInd]){
//         video.currentTime = sectionStarts[sectionInd]
//       }
//       else{
//         video.currentTime -= skipInterval
//       }
//     }
//   }
// }

function skipBack(){
  greenSectionActive = false
  if(isAsync){
    if(video.currentTime - skipInterval > 0){
      video.currentTime -= skipInterval
    }else{
      video.currentTime = 0
    }
    //update sectionInd, what is the next red section that we are going to view?
    for(let i = 0; i<sectionEnds.length; i ++){
      if(video.currentTime/video.duration * 100 > sectionEnds[i]){
        sectionInd = i
        console.log(i)
      }
      if(video.currentTime/video.duration * 100 < sectionEnds[0]){
      	sectionInd = 0
      }
    }
  }
  else{
  	startAV(video.currentTime - 5)
  }
}


incSpeedBtn.addEventListener("click", increaseSpeed)
decSpeedBtn.addEventListener("click", decreaseSpeed)
function increaseSpeed(){
  if(isAsync){
    if(playbackPace <= 2.5){
      playbackPace += 0.1
      video.playbackRate += 0.1
      speedText.textContent = video.playbackRate.toFixed(1)
    }
  }
}

function decreaseSpeed() {
  if(isAsync){
    if(playbackPace >= 1.1){
      playbackPace -= 0.1
      video.playbackRate -= 0.1
      speedText.textContent = video.playbackRate.toFixed(1)
    }
  }
}


//---- check for activity live events -> Unanticipated non-defferable events. live pop up questions


let eventTimeInd = 0
let signalTime = 0
let signalLength = 10   //how long the signal is shown
let answeredQuestionsNum = 0

function checkforLiveEvents(){
  // if the activity button is on
  if(isCheckingActivity){
    // if viewing asynchronously
    if (isAsync){
      for(let i = 0; i < eventTimesList.length + 1; i++){
        if(syncVideo.currentTime >= eventTimesList[i] && syncVideo.currentTime < eventTimesList[i] + 3){
          playSound(audioTrack)
          showAlertMark(activityBtn.children[1])
          bigWindowPrompt.children[0].textContent = promptsList[i]
          bigWindowPrompt.style.display = "block"
          // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
          signalTime = syncVideo.currentTime + signalLength
          eventTimesList[i] = "50:0"
        }
      }
    }else{
      if(!isActive){
        for(let i = 0; i < eventTimesList.length + 1; i++){
          if(syncVideo.currentTime >= eventTimesList[i] && syncVideo.currentTime < eventTimesList[i] + 3){
              playSound(audioTrack)
              showAlertMark(activityBtn.children[1])
              // activateLive(eventTimeInd)
              bigWindowPrompt.children[0].textContent = promptsList[i]
              bigWindowPrompt.style.display = "block"
              // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
              signalTime = syncVideo.currentTime + signalLength
              eventTimesList[i] = "50:0"
          }
        }
      }
    }
  }
  if(signalTime != 0){
      terminateBy(signalTime)
    }
}

function terminateBy(time){
  if(isAsync){
    if(syncVideo.currentTime >= time){
      // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
      bigWindowPrompt.children[0].textContent = ""
      bigWindowPrompt.style.display = "none"
      signalTime = 0

      if(bigWindowPrompt.children[1].checked){
      	answeredQuestionsNum++
      	bigWindowPrompt.children[1].checked = false
      }
    }
  }
  else{
    if(syncVideo.currentTime >= time){
      // syncThumbIndicator.children[0].setAttribute("src", "assets/teacher.png")
      bigWindowPrompt.children[0].textContent = ""
      bigWindowPrompt.style.display = "none"
      signalTime = 0

      if(bigWindowPrompt.children[1].checked){
      	answeredQuestionsNum++
      	bigWindowPrompt.children[1].checked = false
      }
    }
  }
}


// slide thumbnails

function convertToSeconds(list){
  let ans = []
  for (let i = 0; i <list.length; i++){
    let str = list[i].split(":")
    let seconds = parseInt(str[0]) * 60 + parseInt(str[1])
    ans.push(seconds)
  }
  console.log(ans)
  return(ans)
}

function convertToMinutes(time){
	let min = 0
	let sec = time.toFixed(0)
	
	min = Math.floor(time/60)
	sec = Math.floor(time - min * 60)
	if(sec < 10.0){
		sec = "0" + sec
	}
	if(min < 10.0){
		min = "0" + min
	}
	return (min+":"+sec)
}

function convertToMinutesDescript(time){
	let min = 0
	let sec = time.toFixed(0)
	
	min = Math.floor(time/60)
	sec = Math.floor(time - min * 60)
	// if(sec < 10.0){
	// 	sec = "0" + sec
	// }
	// if(min < 10.0){
	// 	min = "0" + min
	// }
  if(min == 0){
    return (sec + "s")
  }
	return (min + "m " + sec + "s")
}


slidesTimesList = convertToSeconds(slidesTimesList)
let slidesThumbsList = []

function addInitialThumbs(){
  const num = slidesTimesList.length
  // const num = 30
  for (let i = 0; i<num; i+=1){
    const thumbnail = document.createElement("div")
    thumbnail.setAttribute("class", "future-slide-thumb")
    thumbnail.setAttribute("time", slidesTimesList[i])
    thumbnail.style.width = Math.min(5, (90/num - 1)) + "%"
    thumbnail.style.left = i * 100/(num) + 0.5 + "%"
    thumbnail.style.backgroundImage = "url(assets/slides/"+(i+1).toString()+".png)"
    // thumbnail.style.backgroundImage = "url(assets/slides/2.png)"
    slidesContainer.appendChild(thumbnail)
    slidesThumbsList.push(thumbnail)

    //add hover and click event listener to the thumbnails
    thumbnail.addEventListener("mouseover", enlargeThumb)
    thumbnail.addEventListener("mouseout", removeLarge)
    thumbnail.addEventListener("click", toggleBookmark)

    const bookmarkImg = document.createElement("img")
    bookmarkImg.setAttribute("class", "thumb-bkmark-img")
    bookmarkImg.setAttribute("src", "assets/bookmark2.png")
    bookmarkImg.setAttribute("isOn", "False")
    thumbnail.appendChild(bookmarkImg)

    //add event listener to thumbs for bookmarking
    thumbnail.addEventListener("click", toggleBookmark)
  }
}
addInitialThumbs()

let bigThumb = null
function enlargeThumb(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  let thumb = event.target
  bigThumb = thumb.cloneNode(false)
  videoContainer.appendChild(bigThumb) 
  // bigThumb.style.left = "80%"
  
  bigThumb.style.top = "40%"
  bigThumb.style.width = "28%"
  bigThumb.style.height = "40%"
  bigThumb.style.backgroundSize = "contain"
  if(parseInt(bigThumb.style.left, 10)>71){
    bigThumb.style.left = "71%"
  }
}

function removeLarge(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  videoContainer.removeChild(bigThumb)
}

let bookmarksList = []
function toggleBookmark(e){
  if(e.target.getAttribute("class") != "future-slide-thumb"){
    return
  }
  let thumbnail = event.target
  let bookmark = thumbnail.children[0]
  let bookmarkTime = parseInt(thumbnail.getAttribute("time"))
  //set bookmark
  if(bookmark.getAttribute("isOn") == "False" && bookmarkTime > syncVideo.currentTime){
    bookmark.style.display = "block"
    bookmark.setAttribute("isOn", "True")
    bookmarksList.push(parseInt(thumbnail.getAttribute("time")))
  }
  else{   //remove bookmark
    bookmark.style.display = "none"
    bookmark.setAttribute("isOn", "False")
    bookmarksList.splice(bookmarksList.indexOf(bookmarkTime), 1)
  }
  console.log(bookmarksList)
}


let slideInd = 0 //the slide that is being shown right now

function updateSlideThumbs(){
  let time
  if(isAsync) time = syncVideo.currentTime
  else time = video.currentTime

  if(time > slidesTimesList[slideInd]){
    let thumb = slidesThumbsList[slideInd]

    //check for bookmarks, if there it is bookmarked, play alert sound and remove from list
    let bookmark = thumb.children[0]
    let bookmarkTime = parseInt(thumb.getAttribute("time"))
    if(bookmark.getAttribute("isOn") == "True"){
      playSound(audioTrack)
      showAlertMark(bookmarkBtn.children[1])
      bookmark.style.display = "none"
      bookmark.setAttribute("isOn", "False")
      bookmarksList.splice(bookmarksList.indexOf(bookmarkTime), 1)
    }

    //update the current slide thumb width and position
    thumb.style.removeProperty("aspect-ratio") 
    thumb.style.left = slidesTimesList[slideInd]/video.duration * 100 + 0.6 + "%"
    thumb.style.width = (time - slidesTimesList[slideInd]) / video.duration * 100 + "%"
    thumb.style.height = "50%"
    thumb.style.top = "5%"
    thumb.style.borderRadius = "0px"
    thumb.style.borderWidth = "2.5px"
    
    //update the future slide thumbs space between them
    for (let i = 1; i < slidesTimesList.length - slideInd; i+=1){
      let futureThumb = slidesThumbsList[slideInd + i]
      let currentPercent = time/video.duration * 100
      futureThumb.style.left = currentPercent + i * (100 - currentPercent)/(slidesTimesList.length - slideInd) + "%"
    }

    //increment the slideInd
    if(time >= slidesTimesList[slideInd + 1]){
      slideInd += 1
    }

    //update the bookmark button
    if(bookmarksList.length!= 0){
      bookmarkBtn.style.opacity = "100%"
    }
    else{
      // bookmarkBtn.style.opacity = "50%"
    }
  }
}

// play alert sounds
function playSound(url) {
  const audio = new Audio(url);
  audio.play();
}

// show the alert mark on the button to make clear where the alerts sound is coming from
function showAlertMark(element){
  element.style.display = "block"
  setTimeout(hideAlertMark(element), 10000)
}

function hideAlertMark(element){
  return function() {
    element.style.display = "none"
  }
}

// clicking on liveWindow takes you to live
liveVideoContainer.addEventListener("click", jumpToLive)


// clicking on timerbutton once will set a timer for 1 minute from now, clicking on it twice for 2 minutes, and so on

timerBtn.addEventListener("click", setTimer)

let timerClickNum = 0
let timerTime
const timer = timerBtn.cloneNode(true)
timer.children[0].src = "assets/timer.png"
timelineContainer.appendChild(timer)
timer.style.display = "none"

function setTimer(e){
  e.stopPropagation()
  // if(!isAsync){
    timerClickNum += 1
    if (timerClickNum == 1){
      timerBtn.style.opacity = "100%"
      timerTime = syncVideo.currentTime + 60 * timerClickNum
      timer.style.display = "block"
      timer.style.left = timerTime /video.duration * 100 + "%"
      timer.style.bottom = "100%"
      timer.style.opacity = "100%"
    }
    else{
      if(timerTime + 60 < video.duration){
        timerTime += 60
        timer.style.left = timerTime /video.duration * 100 + "%"
      }
    }
  // }
}

//delete timer by clicking on its icon on the timeline
timer.addEventListener("click", deleteTimer)

function deleteTimer(){
  timer.style.display = "none"
  timerTime = 0
  timerClickNum = 0
  // timerBtn.style.opacity = "50%"
}

//function to update timers count down and remove it
let timeLeft
function updateTimer(){
  timeLeft = timerTime - syncVideo.currentTime
  let min = ~~(timeLeft / 60)
  let sec = ~~(timeLeft - min * 60)
  timer.children[1].textContent = min + ":" + sec
  if(timeLeft < 0 && timerClickNum > 0){
    playSound(audioTrack)
    deleteTimer()
    showAlertMark(timerBtn.children[2])
  }
}

// activity button on and off
activityBtn.addEventListener("click", toggleCheckingActivity)

let isCheckingActivity = false
function toggleCheckingActivity(e){
	e.stopPropagation()
  if(isCheckingActivity == false){
    isCheckingActivity = true
    activityBtn.style.opacity = "100%"
    activityBtn.children[2].style.display = "block"
  }
  else{
    isCheckingActivity = false
    activityBtn.children[2].style.display = "none"
    // activityBtn.style.opacity = "50%"
  }
}

//update flag button opacity on and off
function checkFlagButton(){
  for(let i = 0; i < sliderPosList.length; i++){
    if (sliderPosList != inf){
      return
    }
  }
  // flagBtn.style.opacity = "50%"
}

//add subtitles to the sync video and the async video

function addSubtitles(video, element){
  if(isAsync){
    for(let i = 0; i < subtitleTimes.length + 1; i++){
      if(video.currentTime > subtitleTimes[i] && video.currentTime < subtitleTimes[i+1]){
        // console.log(ind, element)
        element.textContent = subtitleTexts[i]
      }
    }
  }
  else{element.textContent = ""}
}

//--- audio buttons toggleing audio between main and live videos

// audioButtonMain.addEventListener("click", toggleAudio(video, audioButtonMain))
// audioButtonLive.addEventListener("click", toggleAudio(syncVideo, audioButtonLive))

// function toggleAudio(video, button){
// 	return function(e){
// 		e.stopPropagation();
// 		if(video.muted){
// 			video.muted = false
// 			button.src = "assets/audio.png"
// 		}
// 		else{
// 			video.muted = true
// 			button.src = "assets/no-audio.png"
// 		}
// 	}

// }

audioButtonMain.addEventListener("click", toggleAudio)

function toggleAudio(){
	let currentVideo
	if(audioBtnisLive){
		currentVideo = syncVideo
	}else{
		currentVideo = video
	}
	if(currentVideo.muted){
			currentVideo.muted = false
			audioButtonMain.src = "assets/audio.png"
		}
		else{
			currentVideo.muted = true
			audioButtonMain.src = "assets/no-audio.png"
		}
}


//-- functions for deactivating and activating async controls 

function deactivate(element){
	element.style.opacity = "50%"
    element.style.pointerEvents = "none"
}

function activate(element){
	element.style.opacity = "100%"
    element.style.pointerEvents = "auto"
}

deactivate(speedContainer)
deactivate(skipForwardBtn)



//-- update transcript body
let transcriptInd = 1
let autoScrollOn = true

function updateTranscript(){
	if(syncVideo.currentTime > subtitleTimes[transcriptInd] && syncVideo.currentTime < subtitleTimes[transcriptInd+1]){
		console.log(transcriptBody.clientHeight, transcriptBody.scrollTop)
		console.log(transcriptBody.scrollHeight)
		if(transcriptBody.clientHeight + transcriptBody.scrollTop < transcriptBody.scrollHeight - 3){
			autoScrollOn = false
		}
		else{
			autoScrollOn = true
		}
		const newSentence = document.createElement("div")
		newSentence.setAttribute("class", "transcript-sentence")
		newSentence.innerHTML = subtitleTexts[transcriptInd - 1]+ "<br /><br />"
		newSentence.setAttribute("id", transcriptInd - 1)
		transcriptBody.appendChild(newSentence)
		transcriptInd++

		if(autoScrollOn){
			transcriptBody.scrollTo(0, transcriptBody.scrollHeight)
		}	
		//-- clicking on transcript sentence will take you back and startAV
		addSentecenClickHandler(newSentence, subtitleTimes[newSentence.getAttribute("id")])

	}
}

function addSentecenClickHandler(sentece, time){
	sentece.addEventListener("click", function(e) {
		startAV(time)
	}, false)
}


// toggle between showing trascript or not showing transcript
transcriptButton.addEventListener("click", toggleShowTranscript)
let transcriptIsShown = false
function toggleShowTranscript(){
	if(transcriptIsShown){
		transcript.style.display = "none"
		transcriptButton.children[1].style.display = "none"   //remove the red line
		mainVideoContainer.style.width = "90%"
		transcriptIsShown = false
	}
	else{
		transcript.style.display = "block"
		transcriptButton.children[1].style.display = "block"   //remove the red line
		mainVideoContainer.style.width = "74%"
		transcriptIsShown = true
	}
}


// add time progress to the video
function updateTimeProgress(){
	let currentTimeString = convertToMinutes(syncVideo.currentTime)
	let totalTimeString = convertToMinutes(syncVideo.duration)
	timeProgress.textContent = currentTimeString + "/" + totalTimeString
}
// this function pauses the live stream and the recorded stream
function pauseEverything(){
	video.pause()
	syncVideo.pause()
}

var showLiveWindow = true
// minimize the live view
function minimizeLiveWindow(e){
	e.stopPropagation()
	//hide the window
	liveVideoContainer.style.display = "none"
	showLiveWindow = false

	//show the maximize button
	maximizeBtn.style.display = "block"
}

function maximizeLiveWindow(e){
	e.stopPropagation()
	liveVideoContainer.style.display = "block"
	showLiveWindow = true
	maximizeBtn.style.display = "none"
}

minimizeBtn.addEventListener("click", minimizeLiveWindow)
maximizeBtn.addEventListener("click", maximizeLiveWindow)



//shows and hides the email pop up

const switchAudio = "assets/switch-alert.mp3"
let switchTimes = ['0:20', '11:0']
let interruptionLength = 45
switchTimes = convertToSeconds(switchTimes)

let switchInd = 0

function updatePopup(){
	//show mail on email times
	if(syncVideo.currentTime > switchTimes[switchInd]){
    popupType = 'switch'
    popupText.textContent = "You are late to submit your English assignment! \r\n \r\n Click on the button below to finish it and submit before the deadline! "
    popupButton.textContent = "Open Assignment"
    popupContainer.style.display = "block"
    playSound(switchAudio)
		switchInd += 1
	}
  if(syncVideo.ended){
    popupType = 'end'
    popupText.textContent = "Thank you for finishing this lecture! \r\n \r\n Your completion code is \"ShapeDone$\". Return to the survey, copy and paste the completion code in the text box to move on to the next step!"
    popupButton.textContent = "Take the Quiz!"
    popupButton.style.display = "none"
    popupContainer.style.display = "block"
  }
}

// control the message pop up

let popupType = 'start'  // popupType can be 'start', 'switch', 'end'
popupButton.addEventListener("click", handlePopupButton)

function handlePopupButton(){
  if(popupType == 'start'){
    popupContainer.style.display = "none"
    togglePlay()
  }
  if(popupType == 'switch'){
    popupContainer.style.display = "none"
    // open the assignment in a new tab
    var taskWindow = window.open('', '_blank');
    taskWindow.location.href = 'https://ubc.ca1.qualtrics.com/jfe/form/SV_0BAHTxLKsnBEurk';
  }
  if(popupType == 'end'){
    popupContainer.style.display = "none"
    window.location.href = 'https://ubc.ca1.qualtrics.com/jfe/form/SV_3JW1HItH7veqRNA'
  }
}


//----- original video player
document.addEventListener("keydown", e => {
  const tagName = document.activeElement.tagName.toLowerCase()
  if(e.keyCode == 32){
  	togglePlayPause()
  	return
  }
  if (tagName === "input") return

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return
    case "k":
      togglePlay()
      break
    case "l":
      pauseEverything()
      break
    case "f":
      toggleFullScreenMode()
      break
    case "t":
      toggleTheaterMode()
      break
    case "i":
      toggleMiniPlayerMode()
      break
    case "m":
      toggleMute()
      break
    case "space":
      togglePlayPause()
      break
    case "arrowleft":
    case "j":
      skipBack()
      break
    case "arrowright":
    case "l":
      skipForward()
      break
    case "c":
      toggleCaptions()
      break
    case "arrowup":
      increaseSpeed()
      break
    case "arrowdown":
      decreaseSpeed()
      break
  }
})

// Timeline
// timelineContainer.addEventListener("mousemove", handleTimelineUpdate)
// timelineContainer.addEventListener("mousedown", toggleScrubbing)
// document.addEventListener("mouseup", e => {
//   if (isScrubbing) toggleScrubbing(e)
// })
// document.addEventListener("mousemove", e => {
//   if (isScrubbing) handleTimelineUpdate(e)
// })

timelineContainer.addEventListener("mousedown", toggleScrubbing)
let isScrubbing = false
let wasPaused
function toggleScrubbing(e) {
	if(started){
		const rect = timelineContainer.getBoundingClientRect()
  		const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  		isScrubbing = (e.buttons & 1) === 1
  		// videoContainer.classList.toggle("scrubbing", isScrubbing)
  		if(percent < syncVideo.currentTime/video.duration){     // clicking on the timeline will start the review process
	    	for(let i = 0; i < sectionStarts.length; i++){
	      		console.log(sectionStarts[i], percent * 100)
	      		if((sectionStarts[i] - percent*100) < 0.5 &&(sectionStarts[i] - percent*100) > -0.5){
	        		startAV(sectionStarts[i]/100 * video.duration)
	        		return
	      		}
	    	}
	    	startAV(percent * video.duration)
  		}
	}
  
  // if (isScrubbing) {
  //   wasPaused = video.paused
  //   video.pause()
  // } else {
  //   video.currentTime = percent * video.duration
  //   if (!wasPaused) video.play()
  // }

  // handleTimelineUpdate(e)
}

function handleTimelineUpdate(e) {
  const rect = timelineContainer.getBoundingClientRect()
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
  const previewImgNumber = Math.max(
    1,
    Math.floor((percent * video.duration) / 10)
  )
  // const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`
  // previewImg.src = previewImgSrc
  timelineContainer.style.setProperty("--preview-position", percent)

  if (isScrubbing) {
    e.preventDefault()
    // thumbnailImg.src = previewImgSrc
    timelineContainer.style.setProperty("--progress-position", percent)
  }
}


// Playback Speed
speedBtn.addEventListener("click", changePlaybackSpeed)

function changePlaybackSpeed() {
  if(isAsync){
    let newPlaybackRate = video.playbackRate + 0.25
    if (newPlaybackRate > 2) newPlaybackRate = 0.25
    video.playbackRate = newPlaybackRate
    speedBtn.textContent = `${newPlaybackRate}x`
  }
}

// Captions
const captions = video.textTracks[0]
captions.mode = "hidden"

captionsBtn.addEventListener("click", toggleCaptions)

function toggleCaptions() {
  const isHidden = captions.mode === "hidden"
  captions.mode = isHidden ? "showing" : "hidden"
  videoContainer.classList.toggle("captions", isHidden)
}

// Duration
video.addEventListener("loadeddata", () => {
  totalTimeElem.textContent = formatDuration(video.duration)
})

// the funcitons are now called at function update()
video.addEventListener("timeupdate", () => {
  currentTimeElem.textContent = formatDuration(video.currentTime)
  // const percent = video.currentTime / video.duration
  // timelineContainer.style.setProperty("--progress-position", percent)
  // timelineContainer.style.setProperty("--live-progress-position", syncVideo.currentTime/video.duration)
  // viewReminder()
  // updateMissedPercent()
  // updateAsyncView()
})

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})
function formatDuration(time) {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(
      minutes
    )}:${leadingZeroFormatter.format(seconds)}`
  }
}

totalTimeElem.textContent = formatDuration(video.currentTime)


function skip(duration) {
  video.currentTime += duration
}

// Volume
muteBtn.addEventListener("click", toggleMute)
volumeSlider.addEventListener("input", e => {
  video.volume = e.target.value
  syncVideo.volume = e.target.value
  video.muted = e.target.value === 0
})

function toggleMute() {
  video.muted = !video.muted
}

video.addEventListener("volumechange", () => {
  volumeSlider.value = video.volume
  let volumeLevel
  if (video.muted || video.volume === 0) {
    volumeSlider.value = 0
    volumeLevel = "muted"
  } else if (video.volume >= 0.5) {
    volumeLevel = "high"
  } else {
    volumeLevel = "low"
  }

  videoContainer.dataset.volumeLevel = volumeLevel
})

// View Modes
theaterBtn.addEventListener("click", toggleTheaterMode)
fullScreenBtn.addEventListener("click", toggleFullScreenMode)
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode)

function toggleTheaterMode() {
  videoContainer.classList.toggle("theater")
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    videoContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

function toggleMiniPlayerMode() {
  if (videoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
}

document.addEventListener("fullscreenchange", () => {
  videoContainer.classList.toggle("full-screen", document.fullscreenElement)
})

video.addEventListener("enterpictureinpicture", () => {
  videoContainer.classList.add("mini-player")
})

video.addEventListener("leavepictureinpicture", () => {
  videoContainer.classList.remove("mini-player")
})

// Play/Pause
playPauseBtn.addEventListener("click", togglePlay)

var started = false
function togglePlay() {
  if(video.paused) video.play()
  started = true
  // startTime.textContent = "00:00"
  syncVideo.play()
  syncVideo.muted = true
}

video.addEventListener("play", () => {
  videoContainer.classList.remove("paused")
})

video.addEventListener("pause", () => {
  videoContainer.classList.add("paused")
})
