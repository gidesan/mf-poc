import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DynamicComponent from './DynamicComponent';

const remoteApiModules = import('api/modules');

export default function ModulePage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [module, setModule] = useState();

  async function performFetch() {
    const { fetchModuleById } = await remoteApiModules;
    const module = await fetchModuleById(id);
    setModule(module);
    setIsLoading(false);
  }

  useEffect(() => {
    performFetch();
  }, [id]);

  return !isLoading && <DynamicComponent config={module} />;
}
