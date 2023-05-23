import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

function SoloFilledTextField({placeholder, type}: { placeholder?: string, type?: string }) {
  return (
    <Paper
      component="form"
      elevation={2}
      sx={{ 
        p: '10px', 
        display: 'flex', 
        alignItems: 'center',
        bgcolor: 'text.primary',
        width: '100%',
        ':hover': {
          boxShadow: 6,
        },
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: '#000'  }}
        placeholder={placeholder}
        type={type}
      />
    </Paper>
  );
}

export default SoloFilledTextField