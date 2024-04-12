import { Header } from '@components/header';
import { Container } from './styles';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/groupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/listEmpty';
import { Button } from '@components/button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da Rocket']);
  
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
      />
    </Container>
  );
}