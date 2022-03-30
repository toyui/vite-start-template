export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const renderContent = () => {
      return <div>render content</div>
    }

    let count = $ref(100)

    return () => {
      return (
        <div>
          Hello world
          {renderContent()}
          {count}
        </div>
      )
    }
  },
})
