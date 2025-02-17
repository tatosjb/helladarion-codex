import React from 'react'
import {
  Abilities,
  Attacks,
  Attributes,
  Editable,
  HealthAndMana,
  MonsterInfo,
  Mugshot,
  ResponsiveFallback
} from 'components'
import { Separator, Diskette } from 'assets'
import { useModal } from 'hooks/useModal'
import { useSheet } from './Sheet.hooks'
import {
  Container,
  Content,
  Perks,
  Stats,
  Name,
  NameWrapper,
  HeaderIcons,
  About,
  Details,
  SkillsWrapper,
  Skills,
  AbilitiesWrapper
} from './Sheet.style'

export const Sheet = () => {
  const { openModal, closeModal, Modal } = useModal()
  const { renderModal, setModalType, monsterData, onGetData } = useSheet({ openModal })

  return (
    <Container>
      <ResponsiveFallback />
      {monsterData && (
        <Content>
          <Modal>
            {renderModal({ closeModal })}
          </Modal>
          <Perks>
            <Name>
              <NameWrapper>
                <Editable
                  as='h1'
                  id='name'
                  text={monsterData.name.slice(0, 25)}
                  maxLength={25}
                />
                <HeaderIcons>
                  <About
                    type='button'
                    onClick={() => {
                      setModalType('greetings')
                      openModal()
                    }}
                  >
                    ?
                  </About>
                  <Diskette
                    onClick={() => {
                      setModalType('save')
                      openModal()
                    }}
                  />
                </HeaderIcons>
              </NameWrapper>
              <Separator />
              <Details>
                <Editable
                  as='span'
                  id='monsterType'
                  text={monsterData.monsterType}
                  maxLength={13}
                />
                <Editable
                  as='span'
                  id='level'
                  text={`${monsterData.level}, `}
                  maxLength={3}
                />
                <Editable
                  as='span'
                  id='size'
                  text={monsterData.size}
                  maxLength={12}
                />
              </Details>
              <Editable
                as='h2'
                id='description'
                text={monsterData.description}
                maxLength={180}
              />
            </Name>
            <SkillsWrapper>
              <Skills>
                <Attributes
                  attributeList={monsterData.attributes}
                  setModalType={setModalType}
                  openModal={openModal}
                />
                <AbilitiesWrapper>
                  <Abilities
                    title='Sentidos'
                    modalType='senses'
                    abilitiesList={monsterData.senses}
                    openModal={openModal}
                    setModalType={setModalType}
                  />
                  <Abilities
                    title='Perícias'
                    modalType='skills'
                    abilitiesList={monsterData.skills}
                    openModal={openModal}
                    setModalType={setModalType}
                  />
                </AbilitiesWrapper>
              </Skills>
            </SkillsWrapper>
            <Attacks
              attacksList={monsterData.attacks}
              openModal={openModal}
              setModalType={setModalType}
            />
          </Perks>
          <Stats>
            <MonsterInfo
              defense={monsterData.defense}
              distance={monsterData.distance}
              challengeLevel={monsterData.challengeLevel}
            />
            <HealthAndMana
              type='health'
              points={monsterData.healthpoints}
              current={monsterData.currentHealth}
              setModalType={setModalType}
              openModal={openModal}
            />
            <HealthAndMana
              type='mana'
              points={monsterData.manapoints}
              current={monsterData.currentMana}
              setModalType={setModalType}
              openModal={openModal}
            />
            <Mugshot monsterData={monsterData} onGetData={onGetData} />
          </Stats>
        </Content>
      )}
    </Container>
  )
}
