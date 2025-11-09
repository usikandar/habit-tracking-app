# Calculate simple interest with proper validation
calculate_interest() {
    local principal=$1
    local rate=$2
    local time=$3
    
    # Validate inputs are numeric
    if ! validate_number "$principal"; then
        echo "Error: Principal must be a number"
        return 1
    fi
    
    # Perform calculation
    local interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc -l)
    echo "$interest"
}