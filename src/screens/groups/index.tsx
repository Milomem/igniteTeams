import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/groupCard';
import { Button } from '@components/button';
import { ListEmpty } from '@components/listEmpty';

import { Container } from './styles';

import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data)
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  },[]))
  
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
            onPress={() => handleOpenGroup(item)}
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