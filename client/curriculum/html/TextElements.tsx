import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEOTags from '~/components/SEOTags';
import Lesson, {
  LessonContributors,
  LessonCover,
  LessonFigure,
  LessonFirstSentence,
  LessonHeading,
  LessonTip,
} from '~/components/lessons';
import Highlight from '~/components/Highlight/Highlight';
import FormattedText from '~/components/FormattedText';
import { getLessonById } from '~/services/Constants';

const chapters = [
  { title: 'Titluri (Headings)', id: 'titluri' },
  { title: 'Paragrafe', id: 'paragrafe' },
  { title: 'Elementul <hr>', id: 'elementul-hr' },
  { title: 'Citate', id: 'citate' },
  { title: 'Elementele <em> & <strong>', id: 'em-strong' },
];

export default function TextsLesson() {
  const lessonInfo = getLessonById('texte');

  return (
    <>
      <SEOTags
        title={`${lessonInfo.title} | Lecție HTML`}
        description={lessonInfo.description}
        url={`https://FrontEnd.ro${lessonInfo.url}`}
        shareImage={`${process.env.CLOUDFRONT_PUBLIC}/seo/texts_1200w.jpg`}
      />
      <Lesson id={lessonInfo.id} title={lessonInfo.title} chapters={chapters}>
        <LessonContributors className="absolute" contributors={lessonInfo.contributors} />
        <LessonCover>
          <Image
            width="2400"
            height="1260"
            alt="Elemente HTML pentru texte"
            src={`${process.env.CLOUDFRONT_PUBLIC}/seo/texts_2400w.jpg`}
          />
        </LessonCover>
        <LessonFirstSentence>
          Acest articol explică modul în care HTML poate fi utilizat pentru a structura o
          pagină de text prin adăugarea de titluri și paragrafe,
          accentuarea cuvintelor și multe altele.
        </LessonFirstSentence>
        <section>
          <LessonHeading as="h3" id="titluri">
            Titluri (Headings)
          </LessonHeading>
          <p>
            HTML oferă șase elemente pentru titluri (headings), care pot fi marcate
            utilizînd tagurile:
            {' '}
            <FormattedText as="strong">{'<h1>'}</FormattedText>
            ,
            {' '}
            <FormattedText as="strong">{'<h2>'}</FormattedText>
            ,
            {' '}
            <FormattedText as="strong">{'<h3>'}</FormattedText>
            ,
            {' '}
            <FormattedText as="strong">{'<h4>'}</FormattedText>
            ,
            {' '}
            <FormattedText as="strong">{'<h5>'}</FormattedText>
            {' '}
            și
            {' '}
            <FormattedText as="strong">{'<h6>'}</FormattedText>
            .
          </p>
          <p>
            <FormattedText as="strong">
              {'<h1>'}
            </FormattedText>
            {' '}
            este folosit pentru titlul principal al
            paginii, următoarele fiind utilizate pentru a marca subtitluri în
            ordinea importanței lor. Este recomandat să avem
            {' '}
            <strong>
              un singur
              {' <h1>'}
            </strong>
            {' '}
            în pagină, pentru a arăta motoarelor de
            căutare care este subiectul principal al paginii.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<h1> Texte | Lecție HTML </h1>`}
          />
          <p>
            În principiu
            {' '}
            <FormattedText as="strong">{'<h1>'}</FormattedText>
            {' '}
            va avea fontul cel mai mare, iar
            {' '}
            <FormattedText as="strong">
              {'<h6>'}
            </FormattedText>
            {' '}
            cel mai mic,
            deși aceasta nu este neapărat o regulă bătută în cuie.

            Fiecare browser vine cu propriile stiluri asupra elementelor de bază,
            însă mai târziu vom vedea cum putem adăuga propriile stiluri via
            {' '}
            <Link href="/css/intro">
              <a>
                CSS
              </a>
            </Link>
            .
          </p>
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/headings.png"
            alt="Toate cele 6 headinguri"
            demo="/demo/html/titluri"
          />
          <p>
            Atunci când realizăm structura unei pagini este bine să luăm în
            considerare câteva bune practici:
          </p>
          <LessonTip>
            Să ne asiguram că atunci cînd folosim titluri, ținem cont de ordinea
            lor in ierarhie. Adică, dacă am folosit un
            {' '}
            <strong>h3</strong>
            {' '}
            ce
            reprezintă un subtitlu în pagină, nu vom folosi după acesta un
            {' '}
            <strong>h2</strong>
            {' '}
            să reprezentăm un sub-subtitlu. Nu ar avea nici
            un sens să facem asta, nu?
          </LessonTip>
          <LessonTip>
            Deși avem 6 headings la dispoziție, nu ar trebui să folosim mai mult
            de 3 per pagină. Dacă totuși simțim nevoia de a folosi mai multe
            titluri, poate e momentul să facem o nouă pagină?!
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="paragrafe">
            Paragrafe
          </LessonHeading>
          <p>
            Elementele de tip paragraf sunt marcate cu ajutorul tag-ului
            {' '}
            <FormattedText as="strong">{'<p>'}</FormattedText>
            . Vom folosi acest element pentru a insera paragrafe de text fără
            vreo proprietate sau înțeles special.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<p> Acesta este un paragraf cu câteva cuvinte. </p>`}
          />
          <p>
            De fiecare dată când va întâlni tag-ul
            {' '}
            <FormattedText as="strong">{'<p>'}</FormattedText>
            , browser-ul va afișa
            conținutul acestuia începînd cu o nouă linie (spunem că paragrafele
            sunt elemente de tip
            {' '}
            <a target="_blank" rel="noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements">
              block
            </a>
            ). Același lucru se întâmplă și cu titlurile, după cum poți vedea în demo-ul de mai jos.
          </p>
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/paragraphs-and-headings.png"
            alt="Paragrafe și titluri"
            demo="/demo/html/paragrafe-titluri"
          />
          <div className="dots" />
          <p>
            Dacă ai experimentat cu codul până acum, poate ai observat că dând
            {' '}
            <FormattedText as="strong">Enter</FormattedText>
            {' '}
            într-un paragraf, nu va afișa textul pe o nouă linie.
            Ca să obținem asta putem fie să folosim un nou paragraf, fie
            tag-ul
            {' '}
            <FormattedText as="strong">
              {'<br>'}
            </FormattedText>
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<p>
  Azi am codat împreună cu <br>
  Alex, <br>
  Diana și <br>
  Antonia.
</p>
            `}
          />
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/line-break.png"
            alt="Elementul <br>"
            demo="/demo/html/elementul-br"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="elementul-hr">
            {'Elementul <hr>'}
          </LessonHeading>
          <p>
            Elementul
            {' '}
            <FormattedText as="strong">
              {'<hr>'}
            </FormattedText>
            {' '}
            (horizontal line)
            este un separator între
            secțiuni/elemente din pagină.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<p> O primă regulă în această casă: Întotdeauna zâmbește! </p>
<hr>
<p> A doua regulă: Vino cu prăjituri! </p>
            `}
          />
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/horizontal-line.png"
            alt="Elementul <hr> (horizontal-line)"
            demo="/demo/html/elementul-hr"
          />
        </section>
        <section>
          <LessonHeading as="h3" id="citate">
            Citate
          </LessonHeading>
          <p>
            Atunci când vrem să marcăm un text mai lung preluat dintr-o anumită
            sursă ne vom folosi de tag-ul
            {' '}
            <FormattedText as="strong">{'<blockquote>'}</FormattedText>
            .
            Acest tag vine la pachet cu o indentare default.
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<blockquote 
  cite="https://en.wikipedia.org/wiki/A_journey_of_a_thousand_miles_begins_with_a_single_step"
>
  <p> Călătoria de 1000 mile începe cu un singur pas. </p>
</blockquote>          
            `}
          />
          <p>
            Dacă avem nevoie să marcăm un citat mai scurt, vom folosi tag-ul
            {' '}
            <FormattedText as="strong">{'<q>'}</FormattedText>
            (quote).
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<p>
  După cum a spus Roosevelt, 
  <q cite="https://www.goodreads.com/quotes/10002-it-is-hard-to-fail-but-it-is-worse-never">
    It is hard to fail, but it is worse never to have tried to succeed.
  </q>
</p>       
            `}
          />
          <LessonFigure
            withBorder
            src="https://d3tycb976jpudc.cloudfront.net/demo-assets/quotes.png"
            alt="Citate"
            demo="/demo/html/citate"
          />
          <LessonTip>
            După cum poți observa mai sus, ambele elemente au atributul
            {' '}
            <FormattedText as="strong">cite</FormattedText>
            {' '}
            pe care îl folosim pentru a marca sursa citatului.
          </LessonTip>
        </section>
        <section>
          <LessonHeading as="h3" id="em-strong">
            {'Elementele <em> & <strong>'}
          </LessonHeading>
          <p>
            În limbajul obișnuit, subliniem adesea cuvinte pentru a modifica
            sensul unei propoziții și dorim să marcăm anumite cuvinte ca fiind
            importante sau diferite într-un fel.
          </p>
          <p>
            HTML oferă diverse elemente
            semantice pentru a ne permite să marcăm conținutul textual cu astfel
            de efecte.
            .
            Unul dintre aceste elemente este tag-ul
            {' '}
            <FormattedText as="strong">
              {'<em>'}
            </FormattedText>
            {' '}
            .
          </p>
          <Highlight
            className="my-5"
            language="html"
            code={`
<p>
  Sunt <em> foarte bucuros </em> că ai primit jobul!
</p>        
            `}
          />
          <p>
            Mai avem la dispoziție și tag-ul
            {' '}
            <FormattedText as="strong">
              {'<strong>'}
            </FormattedText>
            {' '}
            , folosit pentru a marca un element ca fiind
            foarte important. Fiind un element semantic, acesta este recunoscut
            de cititoarele de ecrane și redat cu o tonalitate diferită a vocii.
          </p>
          <p>
            Deși browserele afișează acest element îngroșat (bolduit),
            {' '}
            <strong>nu ar trebui să folosim</strong>
            {' '}
            <FormattedText as="span">
              {'<strong>'}
            </FormattedText>
            {' '}
            doar pentru a obține acest rezultat. Pentru a face asta
            vom folosi un element de tip
            {' '}
            <FormattedText as="span">
              {'<span>'}
            </FormattedText>
            {' '}
            pe care vom aplica stiluri CSS.
          </p>
        </section>
      </Lesson>
    </>
  );
}
