export const insertMaskInCpf = (cpf: string) => {
    console.log('a')

    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  };