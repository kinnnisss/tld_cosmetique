import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const history = useHistory()

  const handleAcheter = () => {
    history.push('/Achat') // fonctionne en v5
  }
  // const history1 = useHistory()

  // const handleProduits = (e) => {
  //   e.preventDefault()
  //   history1.push('/produits')
  // }
  
  return (
    <div className="home-container">
      <Helmet>
        <title>Homely French Aardvark</title>
        <meta property="og:title" content="Homely French Aardvark" />
      </Helmet>
      <Navbar8
        page4Description={
          <Fragment>
            <span className="home-text100">
             Contactez-nous pour toute question, collaboration ou retour. Nous serions ravis de vous entendre.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
<button onClick={handleAcheter} className="home-button">
          Acheter Maintenant
        </button>         
         </Fragment>
        }
        link2={
          <Fragment>
            <link to="/produits"  className="thq-link thq-text-primary">Produits</link>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text103">Home</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text105">Contact</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text106">Produits</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <link to="/contact" className="home-text107">Contact</link>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text108">
              Bienvenue sur le site de notre marque de cosmétiques. Découvrez notre gamme de produits de haute qualité.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text109">
             Explorez notre collection de soins de la peau et de produits de beauté conçus pour sublimer votre beauté naturelle.
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
          <Link to="/propos" className="home-text110">
            À propos de nous
          </Link>
        </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text111">A propos de nous </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Découvrez l’histoire de notre marque, ses valeurs et son engagement pour la beauté et le développement durable.
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text113">En savoir Plus</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <Fragment>
            <span className="home-text114">En savoir Plus</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115">Acheter Maintenant</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116">
              Découvrez nos produits premium
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117">
              Découvrez notre gamme exclusive de produits cosmétiques de haute qualité conçus pour sublimer votre beauté naturelle.
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <Fragment>
            <span className="home-text118">
              Promets un bon soin à vos cheveux
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text119">Sérum Éclat</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text120">
             Adoucis la peau de vos mains
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text121">Masque hydratant pour le visage</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text122">
              Hydrate et nourrit la peau en profondeur
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text123">Pommade pour les mains </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124">Découvrez notre collection</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Découvrez notre gamme de cosmétiques de haute qualité conçus pour sublimer votre beauté naturelle.
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126">Achetez Maintenant</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <Fragment>
            <span className="home-text127">
             Nous accordons la priorité à la durabilité en utilisant des emballages écologiques, recyclables et réduisant l'impact environnemental.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text128">
             Nos produits sont élaborés avec des ingrédients naturels soigneusement sélectionnés pour nourrir et sublimer votre peau.
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text129">Cruelty-Free</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="home-text130">Natural Ingredients</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Nous nous engageons à être une marque sans cruauté, garantissant qu’aucun animal n’est blessé dans la fabrication de nos produits.
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text132">Emballage durable</span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <Fragment>
            <span className="home-text133">$79.99</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text134">Choisir cette formule</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text135">Formule de base</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text136">Choisir cette formule</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text137">Formule entreprise</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text138">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text139">Feature 2 included</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text140">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text141">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text142">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text143">Feature 2 included</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text144">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text145">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text146">$499.99</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text147">Démarrer</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Choisir cette formule</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text149">Feature 1 included</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text150">Feature 3 included</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text151">$200/yr</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text152">Formule Standard</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text153">Feature text goes here</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text154">Démarrer</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text155">Feature 2 included</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text156">
              Choisissez le plan qui vous convient le mieux
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text157">Feature 1 included</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text158">Pricing plan</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text159">Feature text goes here</span>
          </Fragment>
        }
        plan1={
          <Fragment>
            <span className="home-text160">Formule de base</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text161">Formule professionnelle</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text165">or $29 monthly</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text166">$49.99</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text167">or $49 monthly</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text170">or $20 monthly</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text171">$299/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text172">$799.99</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text174">$499/yr</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text176">Feature 3 included</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text177">or $200 yearly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text178">Feature 1 included</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text179">Feature 3 included</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text180">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text181">Démarrer</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text182">$29.99</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text183">Formule premium</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
step1Description={
  <Fragment>
    <span className="home-text184">
      Commencez votre routine de soins en nettoyant votre visage avec notre nettoyant doux pour éliminer les impuretés et le maquillage.
    </span>
  </Fragment>
}
step3Description={
  <Fragment>
    <span className="home-text185">
      Ciblez les besoins spécifiques de votre peau avec nos soins spécialisés pour obtenir un teint éclatant.
    </span>
  </Fragment>
}
step2Title={
  <Fragment>
    <span className="home-text186">Hydrater</span>
  </Fragment>
}
step2Description={
  <Fragment>
    <span className="home-text187">
      Hydratez et nourrissez votre peau avec notre crème hydratante pour la garder douce et souple toute la journée.
    </span>
  </Fragment>
}
step1Title={
  <Fragment>
    <span className="home-text188">Nettoyer</span>
  </Fragment>
}
step3Title={
  <Fragment>
    <span className="home-text189">Traiter</span>
  </Fragment>
}
step4Description={
  <Fragment>
    <span className="home-text190">
      Terminez votre routine de soins en appliquant notre crème solaire pour protéger votre peau des rayons UV nocifs.
    </span>
  </Fragment>
}

        step4Title={
          <Fragment>
            <span className="home-text191">Protect</span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <Fragment>
            <span className="home-text192">Fashion Blogger</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text193">Marketing Manager</span>
          </Fragment>
        }
author1Name={
  <Fragment>
    <span className="home-text194">Alice Smith</span>
  </Fragment>
}
author3Name={
  <Fragment>
    <span className="home-text195">Emily Brown</span>
  </Fragment>
}
review2={
  <Fragment>
    <span className="home-text196">
      J'ai testé de nombreuses marques de soins de la peau, mais celle-ci se distingue par son efficacité et ses ingrédients naturels.
    </span>
  </Fragment>
}
author2Name={
  <Fragment>
    <span className="home-text197">John Doe</span>
  </Fragment>
}
author4Position={
  <Fragment>
    <span className="home-text198">Dermatologue</span>
  </Fragment>
}
author4Name={
  <Fragment>
    <span className="home-text199">Michael Johnson</span>
  </Fragment>
}
content1={
  <Fragment>
    <span className="home-text200">
      Découvrez ce que nos clients disent de nos produits.
    </span>
  </Fragment>
}
author3Position={
  <Fragment>
    <span className="home-text201">Influenceuse beauté</span>
  </Fragment>
}

review1={
  <Fragment>
    <span className="home-text202">
      J'adore vraiment la qualité des produits. Ils ont apporté une différence visible à ma peau.
    </span>
  </Fragment>
}
heading1={
  <Fragment>
    <span className="home-text203">Témoignages</span>
  </Fragment>
}
review3={
  <Fragment>
    <span className="home-text204">
      Ces produits sont devenus indispensables dans ma routine quotidienne. Ma peau n’a jamais été aussi belle.
    </span>
  </Fragment>
}
review4={
  <Fragment>
    <span className="home-text205">
      En tant que dermatologue, je recommande ces produits à mes patients pour leurs formules douces mais efficaces.
    </span>
  </Fragment>
}

      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text207">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text208">Locations</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text209">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210">Bucharest</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211">Cluj - Napoca</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <Fragment>
            <span className="home-text212">FAQs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text213">A propos de nous</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text214">Home</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text215">Terms &amp; Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text216">Produits</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217">Nous Contacter</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Politique privée</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
