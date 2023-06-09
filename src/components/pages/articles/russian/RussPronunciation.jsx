import React from "react";
import RussConsonants from "../../../inc/RussConsonants";
import RussVowels from "../../../inc/RussVowels";
import Background from "../../../inc/Background";

function RussPronunciation() {
    return (
        <div className="py-4">
            <div className="container rounded-3 shadow bg-light">
                <Background className="bg-success" />
                <div className="row">
                    {/* Left hand side */}
                    <div className="p-4 col-xl-6">
                        <h2 className="mb-4">Russian Pronunciation</h2>
                        <p>
                            Before we attempt to understand the sounds produced by Russian speakers,
                            and attempt to modify our motor output to match, we first need to map
                            out some of what our motor outputs already are, in the context of
                            English. This is particularly striking in English, where our mental
                            representation of what a word is made up of—strongly influenced by
                            spelling—can differ in all sorts of ways from how we actually say it!
                        </p>
                        <p>
                            Take, as a quick example, the phrase: "Did you buy a truck today?" The
                            spelling alone doesn't make it obvious at all that (depending a bit on
                            your English dialect), you're pronouncing a "j", "ch" and tapped "r"
                            sound in that sentence!
                        </p>
                        <p>
                            Now, with some sounds in some languages, it can be enough to simply
                            point out: Did you know you're making a Spanish tapped <i>r</i> sound
                            all the time? Simply think of your English "tt" in "butter" whenever you
                            see the Spanish <i>r</i>! This technique is pretty effective, and really
                            quick. It does have some shortcomings. Not only does it not reach sounds
                            that your native language completely lacks, it can be somewhat
                            misleading when not wielded knowledgeably. Of course, it all depends on
                            how good of an accent you personally want to achieve, but this article
                            is for those who want to pass as native! In that case, we should note
                            that the above technique falls very short when the target language
                            contains sounds that are "kinda like" sounds in our native language, but
                            aren't actually the same. While it is possible and does happen that
                            languages share literally the same sound, it also often happens that two
                            languages both have a "sh" sound <i>of sorts</i>, but they can be quite
                            different types. Pronouncing the target language's "sh" as your native
                            language's is easily enough to give you away.
                        </p>
                        <p>
                            So, if we're going to learn the <i>real</i> and specific sounds that
                            Russian is made up of, we'll also need to put a finger on many English
                            sounds—a conscious, practiced, confident finger. This allows us to
                            address ourselves to the Russian sound with a much greater degree of
                            clarity, and actually hear what at first sounded like a negligible
                            difference for the stark mark of non-nativeness it is.
                        </p>
                        <p>
                            Since I first encountered the International Phonetic Alphabet (IPA), the
                            tool linguists use to catalog each unique human sound with a unique
                            symbol, I have had an idea I wanted to try out. In the IPA, you can find
                            paragraphs of text written in <i>an accent</i>, not just "written in
                            English." You can even find paragraphs which begin in one accent, and
                            transition programmatically to another! A skilled reader of the IPA
                            could read the paragraph aloud, and bewilder anyone in the room with a
                            bizarre and mind-bending transition between accents. Here, I'll give you
                            something similar: a story written in English, that progressively
                            becomes written in the IPA. If you read aloud the word you <i>think</i>{" "}
                            it is, you'll pronounce the sounds of the symbols you see (by and
                            large). Notice what words didn't used to be "spelled the same" and now
                            become so, and which words used to be written the same, and now are
                            written differently.
                        </p>
                        <p className="">
                            {" "}
                            <b>
                                Once upon a taɪm there was a great famine ɪn the land, and Monkey
                                could faɪnd no food. There were no bulbs, no beans, no ɪnsects, nor
                                anything else to eat. At last Monkey said to hɪmself, "Waɪ should aɪ
                                perish here with hunger? Maɪ uncle Orang-outang haz enough and to
                                spare; aɪ shall go to hɪm, and he wɪll gɪve me food and shelter." So
                                he set out and soon came to the place where Orang-outang lɪved. For
                                a long taɪm Monkey was happy ɪn hɪz new home, but baɪ and baɪ he
                                heard that there was no longer a famɪne ɪn hɪz own lænd. Then he
                                decided to go back. Before he started, Orang-outang made hɪm a
                                present of a fɪddle and a bow and arrow, "Wɪth thɪs bow and arrow
                                you cæn kɪl any animal," he said. "Wɪth thɪs fidl you cæn make
                                anything dænce until you bɪd ɪt stop." Thænking hɪz uncle for the
                                presents, Monkey set out on hɪz homeward journey. On the way he met
                                Brother Wolf. "What newz, Brother Wolf?" æskt Monkey. When Wolf hæd
                                told him the newz, Monkey æskt, "What hæv you bɪn doing to-day?"
                                "Oh," said Wolf, "aɪ hæv bɪn following a deer all the morning, but
                                aɪ hæv been unable to get near enough to kɪll him. Now aɪ æm faint
                                wɪth hʌnger." "aɪ cæn help you," said Monkey. "aɪ hæv a mægɪc bow
                                ænd arrow. Show me the dir, and aɪ wɪll brɪng hɪm down." When Wolf
                                showed hɪm the dir, Monki fɪtted æn arrow to the bow and took eɪm.
                                Hardly hæd the arrow left the bow when the dir fell dɛd. Monki ænd
                                Wolf sæt down and hæd a good fist. æs Wolf eɪt, hi thought of the
                                magɪc bow and arrow, and hi plænned to gɛt thɛm aweɪ frʌm Monki.
                                "First aɪ wɪll æsk for thɛm,"hi sɛd to hɪmself. "ɪf Monki wɪll not
                                gɪv thɛm to me, aɪ wɪll use force." Whɛn Wolf hæd fɪnɪshed eating,
                                hi sɛd to Monki, "Pliz gɪv mi the bow and arrow." "aɪ wɪll not," sɛd
                                Monki. "ðeɪ were a preznt from my dir uncle; waɪ should aɪ gɪv ðɛm
                                to you?" "Very wɛll," sɛd Wolf. "aɪ am stronger ðæn you, and aɪ wɪll
                                teɪk ðɛm baɪ force." Wʊlf waz just about tʊ snætch ðe bow and arrow
                                from Monki when Jæckal came along. ðɛn Wʊlf thought of a new plæn.hi
                                called out tə Jæckal, "hɛlp! hɛlp! Monki hæz stolən maɪ mægɪk bow
                                ənd arrow." Jæckal came running to ðɛm. Wʊlf told hɪz saɪd əf ðə
                                story, ænd Monki told hɪz. "aɪ kænnot bəlieve aɪðer əv you," sɛd
                                Jækəl. "Lɛt əs leɪ ðə kwɛstion bəfore ðə kort. ðɛr, Laɪən, Taɪger,
                                ən ði oðer ænɪmalz wəll hɪr you both; pərhaps ðeɪ wəll bi able tə
                                dɪsaɪd tə whom ðə mægik bow ən arrow bɪlong. bət tə keep you two
                                frəm kwarreling, aɪ həd bettər teɪk kɛər əf ðə bow ən arrow." Monki
                                geɪv ðəm tə jækəl, ən all thri started ɑff tə kourt. wən ðeɪ
                                ərrived, ðere sæt Laɪən ən ðə throne. sitəd əɹound wəɹ ði oðeɹ
                                ænɪməlz əf ðə jʌngl. monki told hɪz stoɹy fəɹst. stændɪŋ in fɹont of
                                ðe thɹone, hi meɪd a low bow and sɛd, "ðe gɹeɪt fæmɪn, my lɔɹd,
                                dɹove me out of my kountɹy, and aɪ hæd tə teɪk ɹefuge wɪθ maɪ ʌnkl.
                                whɛn aɪ staɹted bæk home,hi geɪv mi ðɪs bow and aɹow. faɪndɪŋ wʊlf
                                almost staɹvɪŋ, aɪ shot a diɹ foɹ hɪm. instead of beɪŋ gɹeɪtful foɹ
                                ðe food,hitɹaɪd to ɹɑb me of ðe bow and aɹɹow. aɪ æm heɹe to æsk ðæt
                                you ɹestoɹe ðɛm to mi." "hi does not tɛll ðe tɹuθ," kɹaɪd wʊlf. ðen
                                jækal sɛd, "aɪ bɪliv ðæt ðe bow æn aɹɹow bɪlɑŋ to wʊlf; hi ən moŋki
                                weɹe quaɹɹelɪŋ əbaʊt thɛm whɛn aɪ kame aloŋ. ðeɪ agɹeed to leave ðe
                                question to you, kɪŋ laɪən. aɪ know you wɪll si ðət justɪs ɪz done."
                                wʊlf looked veɹy ɪnəsənt æn sɛd noθɪŋ. kɪŋ laɪən ɹose and asked,
                                "what seɪ you? to whom do ðe bow æn aɹɹow bɪlɑŋ?" "to wʊlf," theɪ
                                all kɹaɪd. "stilɪŋ is a cɹime ðat must be punished," sɛd kɪŋ laɪən.
                                "what ʃæll be done?" "lɛt moŋki be hanged," ðeɪ all kɹaɪd. moŋki
                                stɪl hæd hɪz mæd͡ʒɪk fɪdl. holdɪŋ ɪt in hɪz hand, hi meɪd a deep baʊ
                                and sɛd: "gɪv mi liv to play a tune on my fɪdl befoɹe aɪ hæŋ, o
                                kɪŋ." now, ðe beasts all loved a meɹɹy tune, and knowɪŋ ðat monki
                                was a mæsteɹ playeɹ ðeɪ called aʊt, "lɛt hɪm play." monki placed ðe
                                fɪdl undeɹ hɪz chin, d͡ʒɹew ðe boʊ acɹoss ðe stɹɪŋs, and st͡ʃɹuk up
                                "cɑkcɹoʊ." ðɪs waz a feɪvoɹɪt tune wɪθ ðe koɹt. at ðe fiɹst notes
                                all nodded ðeiɹ hɛdz in taɪm to ðe muzɪk. as monki played ɑn, ðe
                                ɛntiɹe koɹt bɪgæn to dæns. ɹound and ɹound ðeɪ went like a
                                whiɹlwind. oveɹ and oveɹ, quikeɹ and quikeɹ sounded ðe tune of
                                "cɑkcɹoʊ." fæsteɹ and fæsteɹ flew the danseɹz, untɪl one afteɹ
                                anoðeɹ fell to ðe gɹound woɹn out. monki saw noθɪŋ of all ðɪz. wɪθ
                                aɪz closed and hɪz head placed lovɪŋly against ðe fɪdl, hi played on
                                and on, keepɪŋ taɪm wɪθ hɪz foot. wʊlf was ðe fiɹst one to cɹy out,
                                "please stɑp, cousin monki. foɹ pɪty's seɪk, stɑp." but monki did
                                not seem to heaɹ him. again and again sounded ðe mæd͡ʒɪk notes of
                                "cɑkcɹoʊ." kɪŋ lion hæd gone ɹound and ɹound wɪθ hɪz young waɪf so
                                many taɪmz that boθ weɹe ɹeady to d͡ʒɹop. at last, as hi passed
                                monki, hi ɹoaɹed, "stɑp, eɪp! maɪ whole kɪŋdom ɪz youɹs ɪf you wɪll
                                only stɑp playɪŋ." "aɪ do not want ɪt," sɛd monki. "meɪk wʊlf
                                confess ðat hi tɹaɪd to steal my bow and aɹɹow. ðen aɪ wɪll stɑp
                                playɪŋ." "aɪ konfɛs! aɪ konfɛs!" pænted wʊlf, who was ɹeady to fɑll
                                to ðe gɹound. "gʊd," kɹaɪd kɪŋ lion, as ðe music stɑpt. "moŋki is
                                innocent. let him have hɪz bow and aɹɹow." "punish wʊlf!" kɹied the
                                ænɪməlz. so wʊlf was soundly beaten and dɹiven fɹom ðe koɹt. ðɛn
                                monki went ɑff ɹɪˈd͡ʒɔɪsɪŋ, kɛɹiɪŋ wɪθ hɪm hɪz mæd͡ʒɪk gɪfs.
                            </b>
                        </p>
                        <p>
                            If you'd like a break after that, it's understandable! That's quite a
                            strange trick that's just been played on you, but now you've experienced
                            some IPA in action, we can slow down and take apart some of the key
                            English sounds that need to be squarely distinguished from the new
                            sounds that make up Russian phonology...
                        </p>
                        <p></p>
                    </div>

                    {/* Right hand side*/}
                    <div className="p-4  col-xl-6">
                        {" "}
                        <RussConsonants /> <RussVowels />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RussPronunciation;
