# A simple quantum simulation using Qiskit
from qiskit import QuantumCircuit, Aer, execute

# Create a 2-qubit quantum circuit
qc = QuantumCircuit(2)

# Apply quantum gates
qc.h(0)  # Hadamard gate for superposition
qc.cx(0, 1)  # CNOT gate for entanglement

# Simulate the circuit
simulator = Aer.get_backend('statevector_simulator')
result = execute(qc, simulator).result()

# Output the quantum state
statevector = result.get_statevector(qc)
print(f"Statevector: {statevector}")
