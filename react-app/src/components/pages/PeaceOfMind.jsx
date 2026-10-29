import '../css/BoxMain.css'
import TitleMain from '../TitleMain.jsx'
import Navbar from '../Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../TitleSub.jsx'
import TitleSection from '../TitleSection.jsx'
import Paragraph from '../Paragraph.jsx'


function PeaceOfMind(){
  const p1 = `Peace of mind refers to the sense of peace that comes from
					having safety nets in your life.`;
  const p2 = `Whether this be from having a financial cushion, healthy
					body, secure housing, or a self-hosted food system, you need
					to feel safe.`;

  const p3 = `This page depics different levels of safety nets that
					contribute to someone's sense of peace. The safety nets are
					described below, ranked in ascending order of strength:`;
  const p4 = `A bullet-proof life means someone can just live securely
						within the systems around them. This means preventing
						personal disasters from ruining their life (e.g. managing
						to afford housing and utilities, preventing health issues)`;
  const p5 = `Built on top of a bullet-proof life, a self-sustaining
						life means someone can start to abstract parts of their
						life away from other sources and bring control back into
						their life (e.g. self-sustaining food systems, renewable
						energy)`;
  const p6 = `A bullet-proof and self-sustaining life detail how
						individuals can provide safety nets for themselves within
						the systems they live in. A well-protected life details
						how the systems themselves can provide safety nets to the
						people living in them.`;

  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Peace of Mind' />
          <TitleSection title='What is "Peace of Mind"?' />
          <Paragraph para={p1} />
          <Paragraph para={p2} />
          <TitleSection title='Peace of Mind' />
          <Paragraph para={p3} />
          <ol>
            <li>Bullet-proof</li>
            <Paragraph para={p4} />
            <li>Self-sustaining</li>
            <Paragraph para={p5} />
            <li>Well-protected</li>
            <Paragraph para={p6} />
          </ol>
        </div>

      </div>
    </>
  )

}

export default PeaceOfMind