import Image from 'next/image'

import { Button } from '@components/atoms/Button'
import { Heading } from '@components/atoms/Heading'
import { InputSelect } from '@components/atoms/Input'
import { Text } from '@components/atoms/Text'
import { StationCard } from '@components/molecules/StationCard'
import { TitleSection } from '@components/molecules/TitleSection'
import { Footer } from '@components/organisms/Footer'
import { Header } from '@components/organisms/Header'

import appleStore from '@assets/apple-store.svg'
import carPartner from '@assets/carPartner.png'
import googlePlay from '@assets/google-play.svg'
import introBannerDireita from '@assets/intro-banner-direita.png'
import introBannerEsquerda from '@assets/intro-banner-esquerda.png'
import introBanner from '@assets/intro-banner.png'
import iphone from '@assets/iphone.png'
import journeySvg from '@assets/jorney.svg'
import { ArrowRight, CaretDown, CaretUp } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'
import {
  AccordionContainer,
  AccordionRoot,
  AccordionTrigger,
  AppArea,
  AppContainer,
  AppTextBox,
  AppTextImage,
  FaqArea,
  FaqContainer,
  ImageBox,
  InfoArea,
  InfoBoxText,
  InfoContainer,
  IntroContainer,
  JourneyArea,
  JourneyContainer,
  Separator,
  StationArea,
  StationContainer,
  StationFilter,
  StationMap,
  StationMapBox,
  StationSearch,
  StoreIcons,
  TextBox,
  AccordionContent,
  PartnerContainer,
  PartnerArea,
  PartnerTextBox,
} from '@styles/pages/Intro/styles'

export default function Home() {
  return (
    <>
      <Header />

      <IntroContainer>
        <TextBox className="full-container-content">
          <Heading
            content="Abasteça seu veículo elétrico com facilidade e rapidez, onde quer que vá."
            color="gray_300"
            size="xxlarge"
            level={1}
            maxWidth="973px"
            mobileSize="large"
            align="center"
            mobilePadding={true}
          />

          <Text
            content="Aprimoramos a experiência de carregamento, combinando design intuitivo, tecnologia de ponta e um compromisso inabalável com a sustentabilidade."
            color="gray_100"
            size="xsmall"
            mobileSize="xxsmall"
            maxWidth="708px"
            align="center"
            mobilePadding={true}
          />

          <Button content="Conheça a beVoltz" variant="primary" />
        </TextBox>

        <ImageBox>
          <Image
            src={introBannerEsquerda}
            width={200}
            height={400}
            alt="Carro eletrico carregando"
          />
          <Image
            src={introBanner}
            width={1200}
            height={400}
            alt="Carro eletrico carregando"
          />
          <Image
            src={introBannerDireita}
            width={200}
            height={400}
            alt="Carro eletrico carregando"
          />
        </ImageBox>
      </IntroContainer>

      <InfoContainer className="container-content">
        <InfoArea>
          <Heading
            content="Conectando motoristas e estações de carregamento em uma rede global unificada."
            color="gray_300"
            size="large"
            level={1}
            maxWidth="520px"
            mobileSize="medium"
          />

          <InfoBoxText>
            <Separator></Separator>
            <Text
              content="Descubra a eficiência sem precedentes no carregamento de veículos elétricos através da plataforma beVoltz, projetada para atender às demandas de um mundo em constante evolução."
              color="gray_100"
              size="xsmall"
              mobileSize="xxsmall"
              maxWidth="534px"
              lineHeight={160}
            />
          </InfoBoxText>
        </InfoArea>
      </InfoContainer>

      <JourneyContainer id="sobre">
        <JourneyArea>
          <TitleSection
            title="Reserve, Abasteça, Pague"
            subtitle="Aprimoramos a experiência de carregamento, combinando design intuitivo, tecnologia de ponta e um compromisso inabalável com a sustentabilidade."
            subtitleWidth="647px"
          />

          <Image src={journeySvg} width={100} height={100} alt="jornadinha" />
        </JourneyArea>
      </JourneyContainer>

      <StationContainer id="estações" className="container-content">
        <StationArea>
          <TitleSection
            title="Mais de 200 estações espalhadas por 52 cidades no Brasil"
            titleWidth="693px"
            subtitle="Selecione a cidade e categoria e veja as estações disponiveis para recarga
          mais próxima da sua região"
            subtitleWidth="647px"
          />

          <StationSearch>
            <InputSelect
              label="Cidade:"
              options={['São Paulo', 'Rio de janeiro', 'Minas Gerais']}
            />
            <InputSelect
              label="Categoria:"
              options={['Estacionamento', 'Farmácia', 'Shopping']}
            />
          </StationSearch>

          <StationMapBox>
            <StationFilter>
              <StationCard />
              <StationCard />
              <StationCard />
            </StationFilter>
            <StationMap>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14637.396939834474!2d-46.64157255!3d-23.483927249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1681861588012!5m2!1spt-BR!2sbr"
                width="695"
                height="413"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </StationMap>
          </StationMapBox>
        </StationArea>
      </StationContainer>

      <AppContainer id="aplicativo">
        <AppArea className="container-content">
          <AppTextBox>
            <Heading
              content="O aplicativo beVoltz está disponivel nas principais plataformas"
              color="black"
              size="xlarge"
              level={2}
              maxWidth="630px"
              mobileSize="large"
              mobilePadding={true}
            />

            <StoreIcons>
              <Image
                src={appleStore}
                width={178.56}
                height={54.71}
                alt="ícone apple store"
              />
              <Image
                src={googlePlay}
                width={178.56}
                height={54.71}
                alt="ícone google play"
              />
            </StoreIcons>
          </AppTextBox>

          <AppTextImage>
            <Image src={iphone} width={406.17} height={829} alt="Iphone" />
          </AppTextImage>
        </AppArea>
      </AppContainer>

      <FaqContainer>
        <FaqArea className="container-content" id="faq">
          <TitleSection
            title="Perguntas Frequentes"
            titleWidth="693px"
            subtitle="Tire suas dúvidas sobre a plataforma beVoltz com este guia de perguntas frequentes"
            subtitleWidth="400px"
          />

          <AccordionContainer>
            <AccordionRoot type="multiple">
              <Accordion.Item value="item-1">
                <Accordion.Header>
                  <AccordionTrigger>
                    <Heading
                      content="É possível carregar motos na estação?"
                      color="gray_300"
                      size="medium"
                      level={1}
                      mobileSize="small"
                    />
                    <CaretDown size={30} weight="bold" className="iconClosed" />
                    <CaretUp size={30} weight="bold" className="iconOpen" />
                  </AccordionTrigger>
                </Accordion.Header>
                <AccordionContent>
                  <Text
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
                    color="gray_100"
                    size="xsmall"
                    mobileSize="xxsmall"
                    maxWidth="1000px"
                  />
                </AccordionContent>
              </Accordion.Item>

              <Accordion.Item value="item-2">
                <Accordion.Header>
                  <AccordionTrigger>
                    <Heading
                      content="É possível carregar motos na estação?"
                      color="gray_300"
                      size="medium"
                      level={1}
                      mobileSize="small"
                    />
                    <CaretDown size={30} weight="bold" className="iconClosed" />
                    <CaretUp size={30} weight="bold" className="iconOpen" />
                  </AccordionTrigger>
                </Accordion.Header>
                <AccordionContent>
                  <Text
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
                    color="gray_100"
                    size="xsmall"
                    mobileSize="xxsmall"
                    maxWidth="1000px"
                  />
                </AccordionContent>
              </Accordion.Item>

              <Accordion.Item value="item-3">
                <Accordion.Header>
                  <AccordionTrigger>
                    <Heading
                      content="É possível carregar motos na estação?"
                      color="gray_300"
                      size="medium"
                      level={1}
                      mobileSize="small"
                    />
                    <CaretDown size={30} weight="bold" className="iconClosed" />
                    <CaretUp size={30} weight="bold" className="iconOpen" />
                  </AccordionTrigger>
                </Accordion.Header>
                <AccordionContent>
                  <Text
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen"
                    color="gray_100"
                    size="xsmall"
                    mobileSize="xxsmall"
                    maxWidth="1000px"
                  />
                </AccordionContent>
              </Accordion.Item>
            </AccordionRoot>
          </AccordionContainer>
        </FaqArea>
      </FaqContainer>

      <PartnerContainer>
        <PartnerArea className="container-content">
          <PartnerTextBox>
            <Heading
              content="Conectando motoristas e estações de carregamento em uma rede global unificada."
              color="black"
              size="large"
              level={1}
              maxWidth="520px"
              mobileSize="medium"
            />

            <Text
              content="Ofereça a seus clientes opções de recarga de veículos elétricos e alavanque sua empresa na era da sustentabilidade"
              color="green_300"
              size="xsmall"
              mobileSize="xxsmall"
              maxWidth="520px"
              weight="medium"
            />

            <Button
              content="Quero ser um parceiro"
              variant="primary"
              icon={<ArrowRight />}
            />
          </PartnerTextBox>
          <Image
            src={carPartner}
            width={553}
            height={401}
            alt="Carro partner"
          />
        </PartnerArea>
      </PartnerContainer>

      <Footer />
    </>
  )
}
