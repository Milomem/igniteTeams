import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/groupCard';
import { Button } from '@components/button';
import { ListEmpty } from '@components/listEmpty';

import { Container } from './styles';

import { useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }
  
  return (
    <Container>
      <Header/>
      
      <Highlight 
      title="Turmas"
      subtitle="jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty 
          message="Que tal cadastrar a primeira turma?" 
          />
        )}
        showsHorizontalScrollIndicator={false}
      />


      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}